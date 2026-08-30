#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
aplica-canvis.py — aplica el JSON d'eina-frases.html als fitxers de dades

PER QUÈ EXISTEIX
El camí d'anada estava automatitzat (les dades → eina-frases.html) i el de
tornada era manual: obrir el JSON, buscar cada `path` a mà als .js i enganxar
el text nou. És exactament el pas on s'hi colen els errors — un accent que es
perd, una cometa que es menja la resta de la línia, un canvi que s'oblida.

COM HO FA (i per què no és un json.load + json.dump)
Els fitxers de js/data/ no són JSON: glossari-dades.js, demos-dades.js i
ui-strings.js porten claus sense cometes i comes finals, i tots plegats porten
capçaleres de comentari llarguíssimes i un format escrit a mà que és part del
valor del repositori. Rellegir-los i tornar-los a escriure com a JSON ho
destruiria tot.

Així que aquest script NO reescriu els fitxers: els recorre amb un lector de
tokens que entén cadenes i comentaris, calcula el camí exacte de cada literal
(`GUIES.q01.pistes[0].text.ca`), i canvia NOMÉS els caràcters d'aquell literal.
La resta del fitxer —comentaris, sagnats, ordre, comes— queda byte a byte igual.

SEGURETAT
Abans de canviar res comprova que el text que hi ha ARA al fitxer és
idèntic al camp `original` del JSON. Si no ho és, vol dir que aquella frase
s'ha tocat pel seu compte des que es va exportar, i el canvi NO s'aplica: es
llista perquè el miris. Per defecte, si hi ha cap problema no toca res.

ÚS
    python3 aplica-canvis.py eina-frases-CANVIS-2026-08-30.json   # simulacre
    python3 aplica-canvis.py CANVIS.json --aplica                 # escriu
    python3 aplica-canvis.py CANVIS.json --aplica --parcial       # escriu el que es pugui

Després, sempre:
    python3 verifica_projecte.py

Executa'l des de l'arrel del repositori.
"""
import json
import os
import re
import sys

BASE = os.path.dirname(os.path.abspath(__file__))

# Quina variable global viu a quin fitxer.
FITXER_DE = {
    "PREGUNTES": "js/data/preguntes-dades.js",
    "GUIES": "js/data/guies-dades.js",
    "GLOSSARI": "js/data/glossari-dades.js",
    "DEMOS": "js/data/demos-dades.js",
    "DEMOS_TANCAMENT": "js/data/demos-dades.js",
    "CATEGORIES_TEMATIQUES": "js/data/categories-tematiques-dades.js",
    "CLASSIFICACIO_TEMATICA": "js/data/categories-tematiques-dades.js",
    "ITINERARIS_TEMATICS": "js/data/itineraris-tematics-dades.js",
    "ITINERARIS_GRUPS_ENTRELLACATS": "js/data/itineraris-tematics-dades.js",
    "ORDRE_PREGUNTES": "js/data/ordre-preguntes.js",
    "UI_LANGS": "js/i18n/ui-strings.js",
}

# ---------------------------------------------------------------- tokenitzador

ESCAPADES = {"n": "\n", "t": "\t", "r": "\r", "b": "\b", "f": "\f",
             "v": "\v", "0": "\0", "\\": "\\", "'": "'", '"': '"', "/": "/"}

RE_IDENT = re.compile(r"[A-Za-z_$][A-Za-z0-9_$]*")
RE_NUM = re.compile(r"-?\d[\d.eE+\-]*")


def decodifica(cru):
    """Cadena JS entre cometes -> el text que representa."""
    cos, out, i = cru[1:-1], [], 0
    while i < len(cos):
        c = cos[i]
        if c != "\\":
            out.append(c)
            i += 1
            continue
        seg = cos[i + 1] if i + 1 < len(cos) else ""
        if seg == "u":
            if i + 2 < len(cos) and cos[i + 2] == "{":       # \u{1F600}
                j = cos.index("}", i + 2)
                out.append(chr(int(cos[i + 3:j], 16)))
                i = j + 1
            else:
                out.append(chr(int(cos[i + 2:i + 6], 16)))
                i += 6
        elif seg == "x":
            out.append(chr(int(cos[i + 2:i + 4], 16)))
            i += 4
        elif seg == "\n":                                    # continuació de línia
            i += 2
        else:
            out.append(ESCAPADES.get(seg, seg))
            i += 2
    return "".join(out)


def codifica(text, cometa):
    """Text -> literal JS, amb la mateixa cometa que hi havia."""
    out = [cometa]
    for c in text:
        if c == "\\":
            out.append("\\\\")
        elif c == cometa:
            out.append("\\" + c)
        elif c == "\n":
            out.append("\\n")
        elif c == "\r":
            out.append("\\r")
        elif c == "\t":
            out.append("\\t")
        elif ord(c) < 0x20 or ord(c) == 0x7F:
            out.append("\\u%04x" % ord(c))
        else:
            out.append(c)                # els accents i el · hi van tal qual
    out.append(cometa)
    return "".join(out)


def tokenitza(src):
    """[(mena, text, inici, fi)] amb mena in {str, ident, num, punt}."""
    tokens, i, n = [], 0, len(src)
    while i < n:
        c = src[i]
        if c in " \t\r\n":
            i += 1
        elif c == "/" and i + 1 < n and src[i + 1] == "/":
            j = src.find("\n", i)
            i = n if j == -1 else j + 1
        elif c == "/" and i + 1 < n and src[i + 1] == "*":
            j = src.find("*/", i + 2)
            i = n if j == -1 else j + 2
        elif c in "\"'":
            j = i + 1
            while j < n:
                if src[j] == "\\":
                    j += 2
                elif src[j] == c:
                    break
                else:
                    j += 1
            tokens.append(("str", src[i:j + 1], i, j + 1))
            i = j + 1
        else:
            m = RE_IDENT.match(src, i)
            if m:
                tokens.append(("ident", m.group(0), m.start(), m.end()))
                i = m.end()
                continue
            m = RE_NUM.match(src, i)
            if m:
                tokens.append(("num", m.group(0), m.start(), m.end()))
                i = m.end()
                continue
            tokens.append(("punt", c, i, i + 1))
            i += 1
    return tokens


def indexa(src):
    """
    Recorre el fitxer i retorna:
      literals: {cami: (inici, fi, mena, valor)}  amb mena in {str, null}
      ids:      {'PREGUNTES': {id_de_pregunta: index_de_l_array}}
    """
    tokens = tokenitza(src)
    literals, ids = {}, {}
    pila, arrel = [], None

    def cami_actual():
        if not pila:
            return arrel
        marc = pila[-1]
        if marc["mena"] == "obj":
            return None if marc["clau"] is None else marc["prefix"] + "." + marc["clau"]
        return marc["prefix"] + "[%d]" % marc["idx"]

    k = 0
    while k < len(tokens):
        mena, text, ini, fi = tokens[k]

        # window.X = ...  (assignació d'arrel, sempre a nivell 0)
        if (not pila and mena == "ident" and text == "window"
                and k + 3 < len(tokens)
                and tokens[k + 1][1] == "." and tokens[k + 2][0] == "ident"
                and tokens[k + 3][1] == "="):
            arrel = tokens[k + 2][1]
            k += 4
            continue

        if mena == "punt" and text in "{[":
            pila.append({"mena": "obj" if text == "{" else "arr",
                         "prefix": cami_actual() or arrel or "?",
                         "clau": None, "idx": 0})
            k += 1
            continue

        if mena == "punt" and text in "}]":
            if pila:
                pila.pop()
            k += 1
            continue

        if mena == "punt" and text == ",":
            if pila:
                if pila[-1]["mena"] == "obj":
                    pila[-1]["clau"] = None
                else:
                    pila[-1]["idx"] += 1
            k += 1
            continue

        # una cadena o un identificador seguits de ':' són una CLAU
        if mena in ("str", "ident") and k + 1 < len(tokens) and tokens[k + 1][1] == ":":
            if pila and pila[-1]["mena"] == "obj":
                pila[-1]["clau"] = decodifica(text) if mena == "str" else text
            k += 2
            continue

        if mena == "str":
            cami = cami_actual()
            if cami:
                literals[cami] = (ini, fi, "str", decodifica(text))
                # index id -> posicio, per traduir PREGUNTES.q01 -> PREGUNTES[7]
                m = re.fullmatch(r"([A-Z_]+)\[(\d+)\]\.id", cami)
                if m:
                    ids.setdefault(m.group(1), {})[decodifica(text)] = int(m.group(2))
            k += 1
            continue

        if mena == "ident" and text == "null":
            cami = cami_actual()
            if cami:
                literals[cami] = (ini, fi, "null", None)
            k += 1
            continue

        k += 1

    return literals, ids


def cami_fisic(cami, ids):
    """PREGUNTES.q01.enunciat.ca -> PREGUNTES[7].enunciat.ca"""
    m = re.match(r"^PREGUNTES\.([^.\[]+)(.*)$", cami)
    if m and "PREGUNTES" in ids:
        idx = ids["PREGUNTES"].get(m.group(1))
        if idx is not None:
            return "PREGUNTES[%d]%s" % (idx, m.group(2))
    return cami


# ---------------------------------------------------------------------- feina

def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    opcions = {a for a in sys.argv[1:] if a.startswith("--")}
    desconegudes = opcions - {"--aplica", "--parcial"}
    if desconegudes:
        sys.exit("Opció desconeguda: " + " ".join(sorted(desconegudes)))
    if len(args) != 1:
        sys.exit(__doc__.strip().split("ÚS")[1].strip())

    escriu = "--aplica" in opcions
    parcial = "--parcial" in opcions

    with open(args[0], encoding="utf-8") as fh:
        payload = json.load(fh)
    if not isinstance(payload.get("camps"), list):
        sys.exit("Aquest JSON no té una llista \"camps\": no ve d'eina-frases.html.")

    canvis = [c for c in payload["camps"]
              if isinstance(c.get("actual"), str)
              and isinstance(c.get("original"), str)
              and c["actual"] != c["original"]]
    print("%s: %d camp(s) al fitxer, %d amb canvis."
          % (os.path.basename(args[0]), len(payload["camps"]), len(canvis)))
    if not canvis:
        return

    # agrupa per fitxer de destí
    per_fitxer, sense_fitxer = {}, []
    for c in canvis:
        arrel = re.split(r"[.\[]", c["path"], 1)[0]
        destí = FITXER_DE.get(arrel)
        if destí is None:
            sense_fitxer.append(c)
        else:
            per_fitxer.setdefault(destí, []).append(c)

    aplicats, problemes, edicions = 0, [], {}

    for c in sense_fitxer:
        problemes.append((c["path"], "no sé a quin fitxer viu aquesta variable"))

    for rel, llista in sorted(per_fitxer.items()):
        ruta = os.path.join(BASE, rel)
        if not os.path.exists(ruta):
            for c in llista:
                problemes.append((c["path"], "no existeix " + rel))
            continue
        src = open(ruta, encoding="utf-8").read()
        literals, ids = indexa(src)
        talls = []
        for c in llista:
            fisic = cami_fisic(c["path"], ids)
            lit = literals.get(fisic)
            if lit is None:
                problemes.append((c["path"], "no trobo aquest camí dins de " + rel))
                continue
            ini, fi, mena, valor = lit
            if mena == "null":
                # {ca: null} es veu com un camp buit a l'eina; escriure-hi
                # text vol dir substituir el null per una cadena.
                if c["original"] != "":
                    problemes.append((c["path"], "al fitxer hi ha null i s'esperava text"))
                    continue
                cometa = '"'
            else:
                if valor != c["original"]:
                    problemes.append((c["path"],
                                      "el text del projecte ha canviat des de l'exportació"))
                    continue
                cometa = src[ini]
            talls.append((ini, fi, codifica(c["actual"], cometa), c["path"]))
        if talls:
            edicions[ruta] = (src, talls, rel)
            aplicats += len(talls)

    print("  aplicables: %d | amb problema: %d" % (aplicats, len(problemes)))
    for ruta, (_, talls, rel) in sorted(edicions.items()):
        print("  %s — %d canvi(s)" % (rel, len(talls)))
        for _, _, _, path in sorted(talls, key=lambda t: t[3]):
            print("      ·", path)
    if problemes:
        print("\n  NO s'apliquen (%d):" % len(problemes))
        for path, per_que in problemes:
            print("      ✗ %s — %s" % (path, per_que))

    if problemes and not parcial:
        print("\nNo s'ha tocat res. Mira els problemes de sobre; si els vols "
              "saltar i aplicar la resta, torna-hi amb --parcial.")
        return
    if not escriu:
        print("\nSimulacre. Per escriure-ho de veritat: torna-hi amb --aplica.")
        return

    for ruta, (src, talls, rel) in sorted(edicions.items()):
        for ini, fi, nou, _ in sorted(talls, key=lambda t: -t[0]):  # del final cap al principi
            src = src[:ini] + nou + src[fi:]
        open(ruta, "w", encoding="utf-8").write(src)
        print("Escrit %s (%d canvi(s))" % (rel, len(talls)))

    print("\nFet: %d camp(s) aplicats. Ara toca:\n    python3 verifica_projecte.py" % aplicats)


if __name__ == "__main__":
    main()
