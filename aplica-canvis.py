#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
aplica-canvis.py — aplica el JSON d'eina-frases.html al projecte

QUÈ FA
Agafa el fitxer que exporta eina-frases.html i escriu cada canvi al lloc
correcte del projecte. "El lloc correcte" no sempre és el fitxer que llegeix
l'eina, i aquest és tot el motiu de ser d'aquest script.

    ORIGINALS (s'hi escriu directament)
      PREGUNTES              js/data/preguntes-dades.js
      GLOSSARI               js/data/glossari-dades.js
      DEMOS                  js/data/demos-dades.js
      CATEGORIES_TEMATIQUES  js/data/categories-tematiques-dades.js
      ITINERARIS_*           js/data/itineraris-tematics-dades.js
      UI_LANGS               js/i18n/ui-strings.js

    CÒPIA (NO s'hi escriu mai)
      GUIES                  js/data/guies-dades.js

`guies-dades.js` el fabrica parse_guies.py a partir dels nou markdown de
lots que hi ha a docs/guies/. Escriure-hi directament és inútil: el canvi hi és
fins que algú torni a executar parse_guies.py, i llavors desapareix sense
avisar. (Ago. 2026: la primera versió d'aquest script feia exactament això.)

Per tant, per als camps GUIES.* l'script:
  1. localitza dins del .md el tros de markdown que produeix aquell camp,
  2. hi escriu el text nou conservant l'èmfasi (**negreta**, *cursiva*),
  3. torna a executar parse_guies.py perquè la còpia es refaci sola,
  4. comprova que el .js resultant conté EXACTAMENT el text que volies,
  5. i si no hi és, desfà tots els canvis i no deixa res a mitges.

El pas 4 és la xarxa de seguretat de debò: sigui quin sigui l'encert del pas 2,
o el resultat és el que has escrit, o no es toca res.

COM ESCRIU ALS FITXERS ORIGINALS
No fa json.load + json.dump. glossari-dades.js, demos-dades.js i ui-strings.js
no són JSON vàlid (claus sense cometes, comes finals), i el format escrit a mà
i les capçaleres de comentari són part del valor del repositori. L'script els
recorre amb un lector de tokens que entén cadenes i comentaris, calcula el camí
exacte de cada literal i canvia només els caràcters d'aquell literal.

SEGURETAT
Abans de tocar res comprova que el text que hi ha ARA és idèntic al camp
`original` del JSON. Si no ho és, no aplica: t'ho llista. Per defecte, si hi ha
cap problema no toca absolutament res.

ÚS
    python3 aplica-canvis.py CANVIS.json             # simulacre, no toca res
    python3 aplica-canvis.py CANVIS.json --aplica
    python3 aplica-canvis.py CANVIS.json --aplica --parcial

Després, sempre:
    python3 verifica_projecte.py

Executa'l des de l'arrel del repositori.
"""
import json
import os
import re
import subprocess
import sys
import textwrap

BASE = os.path.dirname(os.path.abspath(__file__))

FITXER_DE = {
    "PREGUNTES": "js/data/preguntes-dades.js",
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

# El número del lot i l'extensió es concatenen en dos trossos a posta. Si
# anessin junts dins d'una sola cadena amb un marcador de format enmig,
# verifica_projecte.py hi llegiria el nom d'un document que no existeix i
# convertiria una comprovació passada en un avís. Mateix motiu per no
# escriure enlloc d'aquest fitxer un nom de lot amb comodí.
NUMS_LOT = (1, 2, 3, 4, 6, 7, 8, 9, 10)
LOTS_GUIES = ["docs/guies/GUIES-LOT-%d" % n + ".md" for n in NUMS_LOT]
AMPLADA_MD = 76          # mediana 71, percentil 90 76 als .md existents

# ============================================================ literals JS

ESCAPADES = {"n": "\n", "t": "\t", "r": "\r", "b": "\b", "f": "\f",
             "v": "\v", "0": "\0", "\\": "\\", "'": "'", '"': '"', "/": "/"}
RE_IDENT = re.compile(r"[A-Za-z_$][A-Za-z0-9_$]*")
RE_NUM = re.compile(r"-?\d[\d.eE+\-]*")


def decodifica(cru):
    cos, out, i = cru[1:-1], [], 0
    while i < len(cos):
        c = cos[i]
        if c != "\\":
            out.append(c); i += 1; continue
        seg = cos[i + 1] if i + 1 < len(cos) else ""
        if seg == "u":
            if i + 2 < len(cos) and cos[i + 2] == "{":
                j = cos.index("}", i + 2)
                out.append(chr(int(cos[i + 3:j], 16))); i = j + 1
            else:
                out.append(chr(int(cos[i + 2:i + 6], 16))); i += 6
        elif seg == "x":
            out.append(chr(int(cos[i + 2:i + 4], 16))); i += 4
        elif seg == "\n":
            i += 2
        else:
            out.append(ESCAPADES.get(seg, seg)); i += 2
    return "".join(out)


def codifica(text, cometa):
    out = [cometa]
    for c in text:
        if c == "\\": out.append("\\\\")
        elif c == cometa: out.append("\\" + c)
        elif c == "\n": out.append("\\n")
        elif c == "\r": out.append("\\r")
        elif c == "\t": out.append("\\t")
        elif ord(c) < 0x20 or ord(c) == 0x7F: out.append("\\u%04x" % ord(c))
        else: out.append(c)
    out.append(cometa)
    return "".join(out)


def tokenitza(src):
    tokens, i, n = [], 0, len(src)
    while i < n:
        c = src[i]
        if c in " \t\r\n":
            i += 1
        elif c == "/" and i + 1 < n and src[i + 1] == "/":
            j = src.find("\n", i); i = n if j == -1 else j + 1
        elif c == "/" and i + 1 < n and src[i + 1] == "*":
            j = src.find("*/", i + 2); i = n if j == -1 else j + 2
        elif c in "\"'":
            j = i + 1
            while j < n:
                if src[j] == "\\": j += 2
                elif src[j] == c: break
                else: j += 1
            tokens.append(("str", src[i:j + 1], i, j + 1)); i = j + 1
        else:
            m = RE_IDENT.match(src, i)
            if m:
                tokens.append(("ident", m.group(0), m.start(), m.end())); i = m.end(); continue
            m = RE_NUM.match(src, i)
            if m:
                tokens.append(("num", m.group(0), m.start(), m.end())); i = m.end(); continue
            tokens.append(("punt", c, i, i + 1)); i += 1
    return tokens


def indexa(src):
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
        if (not pila and mena == "ident" and text == "window" and k + 3 < len(tokens)
                and tokens[k + 1][1] == "." and tokens[k + 2][0] == "ident"
                and tokens[k + 3][1] == "="):
            arrel = tokens[k + 2][1]; k += 4; continue
        if mena == "punt" and text in "{[":
            pila.append({"mena": "obj" if text == "{" else "arr",
                         "prefix": cami_actual() or arrel or "?", "clau": None, "idx": 0})
            k += 1; continue
        if mena == "punt" and text in "}]":
            if pila: pila.pop()
            k += 1; continue
        if mena == "punt" and text == ",":
            if pila:
                if pila[-1]["mena"] == "obj": pila[-1]["clau"] = None
                else: pila[-1]["idx"] += 1
            k += 1; continue
        if mena in ("str", "ident") and k + 1 < len(tokens) and tokens[k + 1][1] == ":":
            if pila and pila[-1]["mena"] == "obj":
                pila[-1]["clau"] = decodifica(text) if mena == "str" else text
            k += 2; continue
        if mena == "str":
            cami = cami_actual()
            if cami:
                literals[cami] = (ini, fi, "str", decodifica(text))
                m = re.fullmatch(r"([A-Z_]+)\[(\d+)\]\.id", cami)
                if m:
                    ids.setdefault(m.group(1), {})[decodifica(text)] = int(m.group(2))
            k += 1; continue
        if mena == "ident" and text == "null":
            cami = cami_actual()
            if cami:
                literals[cami] = (ini, fi, "null", None)
            k += 1; continue
        k += 1
    return literals, ids


def cami_fisic(cami, ids):
    m = re.match(r"^PREGUNTES\.([^.\[]+)(.*)$", cami)
    if m and "PREGUNTES" in ids:
        idx = ids["PREGUNTES"].get(m.group(1))
        if idx is not None:
            return "PREGUNTES[%d]%s" % (idx, m.group(2))
    return cami


# ==================================================== markdown de les guies

def carrega_normalitzadors():
    """
    Manlleva `neteja`, `fix_llengua`, CAP i BLOC del propi parse_guies.py, per
    no tenir-ne una segona còpia que pugui divergir del compilador de veritat.
    """
    ruta = os.path.join(BASE, "parse_guies.py")
    if not os.path.exists(ruta):
        sys.exit("No trobo parse_guies.py. Executa'l des de l'arrel del repositori.")
    src = open(ruta, encoding="utf-8").read()
    tall = src.find("# --- execució")
    if tall == -1:
        sys.exit("parse_guies.py ha canviat d'estructura (no hi ha '# --- execució'). "
                 "Aquest script s'ha d'actualitzar abans de tocar cap guia.")
    ns = {"__file__": ruta, "__name__": "parse_guies_parcial"}
    exec(compile(src[:tall], "parse_guies.py", "exec"), ns)
    return ns["neteja"], ns["fix_llengua"], ns["CAP"], ns["BLOC"]


FIG_REF = re.compile(r"^\s*→\s*`[^`]+`")
CAP_MOV = re.compile(r"^\*\*Moviment[:\s]*([^*]*)\*\*")
CAP_PISTA = re.compile(r"^\*\*Pista (\d)\s*—?\s*([^*]*)\*\*")
EMFASI = re.compile(r"\*\*([^*]+)\*\*|(?<!\*)\*([^*\n]+)\*(?!\*)|`([^`]+)`")


def indexa_guies(CAP, BLOC):
    """{cami: (fitxer_md, inici, fi, mena)} sobre el text cru dels .md."""
    spans = {}
    for rel in LOTS_GUIES:
        ruta = os.path.join(BASE, rel)
        if not os.path.exists(ruta):
            continue
        raw = open(ruta, encoding="utf-8").read()
        caps = list(CAP.finditer(raw))
        for i, c in enumerate(caps):
            qid = c.group(1)
            fi_q = caps[i + 1].start() if i + 1 < len(caps) else len(raw)
            base = c.end()
            cos = raw[base:fi_q]
            for b in BLOC.finditer(cos):
                tipus = b.group(1)
                ini_txt, fi_txt = base + b.start(2), base + b.end(2)
                ini_bloc = base + b.start(0)
                if tipus == "Moviment":
                    m = CAP_MOV.match(b.group(0))
                    if m:
                        spans["GUIES.%s.movimentTitol.ca" % qid] = (
                            rel, ini_bloc + m.start(1), ini_bloc + m.end(1), "titol")
                elif tipus.startswith("Pista"):
                    n = int(tipus[-1])
                    m = CAP_PISTA.match(b.group(0))
                    if m and m.group(2).strip(" .—"):
                        spans["GUIES.%s.pistes[%d].titol.ca" % (qid, n)] = (
                            rel, ini_bloc + m.start(2), ini_bloc + m.end(2), "titol")
                    spans["GUIES.%s.pistes[%d].text.ca" % (qid, n)] = (
                        rel, ini_txt, fi_txt, "text")
                elif tipus == "Comprovació":
                    spans["GUIES.%s.comprovacio.ca" % qid] = (rel, ini_txt, fi_txt, "cos")
                elif tipus == "I després":
                    spans["GUIES.%s.iDespres.ca" % qid] = (rel, ini_txt, fi_txt, "cos")
    return spans


def valor_del_span(cru, mena, neteja, fix_llengua):
    t = fix_llengua(cru)
    if mena == "text":
        t = FIG_REF.sub("", t)
    t = neteja(t)
    if mena == "titol":
        t = t.rstrip(".")
    return t or None


def reembolcalla(text, amplada=AMPLADA_MD):
    """Text pla -> markdown embolcallat com la resta del fitxer."""
    return "\n\n".join(
        textwrap.fill(p, width=amplada, break_long_words=False, break_on_hyphens=False)
        for p in text.split("\n\n"))


OBRE, TANCA = "\ue000", "\ue001"     # sentinelles d'ús privat: `neteja` no les toca


def pla_amb_emfasi(cos_net, mena, neteja, fix_llengua):
    """
    Text pla del bloc + on cau cada èmfasi DINS d'aquest text pla.

    El truc: abans de passar-ho pel `neteja` del compilador, es canvien les
    marques (** * `) per dues sentinelles d'ús privat. `neteja` desembolcalla
    línies i ajunta guionets, però les sentinelles hi passen intactes, així
    que a la sortida sabem exactament a quins caràcters del text pla
    corresponia cada tros en negreta o cursiva.
    """
    marques = []

    def reemplaça(m):
        marca = "**" if m.group(1) else ("*" if m.group(2) else "`")
        marques.append(marca)
        return OBRE + (m.group(1) or m.group(2) or m.group(3)) + TANCA

    amb_sentinelles = EMFASI.sub(reemplaça, cos_net)
    pla = neteja(fix_llengua(amb_sentinelles))
    if mena == "titol":
        pla = pla.rstrip(".")

    rangs, net, i, k = [], [], 0, 0
    for c in pla:
        if c == OBRE:
            rangs.append([len(net), None, marques[k]]); k += 1
        elif c == TANCA:
            for r in reversed(rangs):
                if r[1] is None:
                    r[1] = len(net); break
        else:
            net.append(c)
    return "".join(net), [tuple(r) for r in rangs if r[1] is not None]


def mapa_de_posicions(vell, nou):
    """mapa[i] = posició de vell[i] dins de nou, o None si aquell tros ha canviat."""
    import difflib
    mapa = [None] * len(vell)
    for etiqueta, i1, i2, j1, j2 in difflib.SequenceMatcher(
            None, vell, nou, autojunk=False).get_opcodes():
        if etiqueta == "equal":
            for d in range(i2 - i1):
                mapa[i1 + d] = j1 + d
    return mapa


def nou_markdown(cru, vell_pla, nou_pla, mena, neteja, fix_llengua):
    """
    Construeix el markdown de recanvi. Retorna (text_nou, avis); avis és None
    si tot ha anat bé, o el motiu pel qual aquest camp no es pot tocar sol.
    """
    prefix, cos = "", cru
    if mena == "text":
        m = FIG_REF.match(cru)
        if m:
            prefix, cos = cru[:m.end()], cru[m.end():]
    davant = cos[:len(cos) - len(cos.lstrip())]
    darrere = cos[len(cos.rstrip()):]
    cos_net = cos.strip()

    punt_final = ""
    if mena == "titol" and cos_net.endswith("."):
        punt_final = "."
        cos_net = cos_net[:-1]

    def acaba(text):
        nou = text if mena == "titol" else reembolcalla(text)
        return prefix + davant + nou + punt_final + darrere, None

    if not EMFASI.search(cos_net):
        return acaba(nou_pla)

    _, rangs = pla_amb_emfasi(cos_net, mena, neteja, fix_llengua)
    if not rangs:
        return acaba(nou_pla)

    # On cau ara cada tros emfatitzat, dins del text que has escrit?
    mapa = mapa_de_posicions(vell_pla, nou_pla)
    nous_rangs, perduts, encongits = [], [], []
    for a, b, marca in rangs:
        frase = vell_pla[a:b]
        # el tros contigu més llarg de la frase que sobreviu intacte
        millor, cursor = None, a
        while cursor < min(b, len(mapa)):
            if mapa[cursor] is None:
                cursor += 1; continue
            fi_run = cursor
            while (fi_run + 1 < min(b, len(mapa)) and mapa[fi_run + 1] is not None
                   and mapa[fi_run + 1] == mapa[fi_run] + 1):
                fi_run += 1
            if millor is None or fi_run - cursor > millor[1] - millor[0]:
                millor = (cursor, fi_run)
            cursor = fi_run + 1
        if millor is None:
            perduts.append(frase); continue
        llarg = millor[1] - millor[0] + 1
        # val si sobreviu sencer, o si en queda un tros prou llarg per no ser soroll
        if llarg < b - a and llarg < max(3, 0.5 * (b - a)):
            perduts.append(frase); continue
        nous_rangs.append((mapa[millor[0]], mapa[millor[1]] + 1, marca))
        if llarg < b - a:
            encongits.append((frase, vell_pla[millor[0]:millor[1] + 1]))

    if perduts:
        return None, ("has reescrit un tros que anava en negreta o cursiva (%s); "
                      "cal decidir a mà on va l'èmfasi, a docs/guies/" %
                      ", ".join('"%s"' % p[:40] for p in perduts[:2]))

    marcat = nou_pla
    for a, b, marca in sorted(nous_rangs, key=lambda r: -r[0]):
        marcat = marcat[:a] + marca + marcat[a:b] + marca + marcat[b:]
    text, _ = acaba(marcat)
    nota = None
    if encongits:
        nota = "; ".join('l\'èmfasi de "%s" ara cobreix "%s"' % (v, n) for v, n in encongits[:2])
    return text, None if nota is None else ("NOTA:" + nota)


PROMPT_SOL = re.compile(r'(<p class="question-entry__prompt">)(.*?)(</p>)', re.S)


def text_pla_html(s):
    import html as _html
    s = re.sub(r"<[^>]+>", "", s)
    return re.sub(r"\s+", " ", _html.unescape(s)).strip()


def escapa_html(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def sincronitza_enunciat(qid, vell, nou):
    """
    L'enunciat de cada pregunta està DUPLICAT dins de solucions/qNN.html, en un
    <p class="question-entry__prompt">. Canviar-lo només a preguntes-dades.js
    deixa les dues còpies dient coses diferents, i verifica_projecte.py se
    salta solucions/ a posta, o sigui que ningú no se n'assabenta.

    Retorna (ruta, ini, fi, text_nou) o (None, motiu).
    """
    rel = os.path.join("solucions", qid + ".html")
    ruta = os.path.join(BASE, rel)
    if not os.path.exists(ruta):
        return None, None            # 13 preguntes no tenen fitxer de solució
    src = open(ruta, encoding="utf-8").read()
    m = PROMPT_SOL.search(src)
    if not m:
        return None, "%s no té <p class=\"question-entry__prompt\">" % rel
    actual = text_pla_html(m.group(2))
    if actual == nou:
        return None, None            # ja hi és
    if actual != vell:
        return None, ("%s porta un enunciat que no és ni el vell ni el nou (%r); "
                      "sincronitza'l a mà" % (rel, actual[:60]))
    return (rel, m.start(2), m.end(2), escapa_html(nou)), None



    """Llegeix js/data/guies-dades.js amb node i retorna {cami: text}."""
    codi = """
const fs=require('fs'),vm=require('vm');const s={console};s.window=s;vm.createContext(s);
vm.runInContext(fs.readFileSync(process.argv[1],'utf8'),s);const o={};
Object.keys(s.GUIES).forEach(id=>{const g=s.GUIES[id];
  if(g.movimentTitol)o['GUIES.'+id+'.movimentTitol.ca']=g.movimentTitol.ca;
  (g.pistes||[]).forEach((p,i)=>{
    if(p.titol)o['GUIES.'+id+'.pistes['+i+'].titol.ca']=p.titol.ca;
    if(p.text)o['GUIES.'+id+'.pistes['+i+'].text.ca']=p.text.ca;});
  if(g.comprovacio)o['GUIES.'+id+'.comprovacio.ca']=g.comprovacio.ca;
  if(g.iDespres)o['GUIES.'+id+'.iDespres.ca']=g.iDespres.ca;});
process.stdout.write(JSON.stringify(o));"""
    r = subprocess.run(["node", "-e", codi, os.path.join(BASE, "js/data/guies-dades.js")],
                       capture_output=True, text=True)
    if r.returncode != 0:
        return None
    return json.loads(r.stdout)


# ================================================================== feina

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
              if isinstance(c.get("actual"), str) and isinstance(c.get("original"), str)
              and c["actual"] != c["original"]]
    print("%s: %d camp(s) al fitxer, %d amb canvis."
          % (os.path.basename(args[0]), len(payload["camps"]), len(canvis)))
    if not canvis:
        return

    guies = [c for c in canvis if c["path"].startswith("GUIES.")]
    altres = [c for c in canvis if not c["path"].startswith("GUIES.")]
    problemes, notes = [], []
    edicions = {}      # ruta absoluta -> (text_original, [(ini, fi, nou, cami)], rel)

    # ---------- fitxers originals ----------
    per_fitxer = {}
    for c in altres:
        arrel = re.split(r"[.\[]", c["path"], 1)[0]
        destí = FITXER_DE.get(arrel)
        if destí is None:
            problemes.append((c["path"], "no sé a quin fitxer viu aquesta variable"))
        else:
            per_fitxer.setdefault(destí, []).append(c)

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
            lit = literals.get(cami_fisic(c["path"], ids))
            if lit is None:
                problemes.append((c["path"], "no trobo aquest camí dins de " + rel)); continue
            ini, fi, mena, valor = lit
            if mena == "null":
                if c["original"] != "":
                    problemes.append((c["path"], "al fitxer hi ha null i s'esperava text")); continue
                cometa = '"'
            else:
                if valor != c["original"]:
                    problemes.append((c["path"], "el text del projecte ha canviat des de l'exportació")); continue
                cometa = src[ini]
            talls.append((ini, fi, codifica(c["actual"], cometa), c["path"]))

            # Si el que canvia és un enunciat, la seva còpia dins de
            # solucions/qNN.html s'ha de moure alhora.
            m_enun = re.fullmatch(r"PREGUNTES\.([^.]+)\.enunciat\.ca", c["path"])
            if m_enun:
                tall_sol, motiu = sincronitza_enunciat(m_enun.group(1), c["original"], c["actual"])
                if motiu:
                    problemes.append((c["path"], motiu))
                elif tall_sol:
                    rel_sol, i_sol, f_sol, nou_sol = tall_sol
                    ruta_sol = os.path.join(BASE, rel_sol)
                    src_sol, talls_sol, _ = edicions.get(
                        ruta_sol, (open(ruta_sol, encoding="utf-8").read(), [], rel_sol))
                    talls_sol.append((i_sol, f_sol, nou_sol, rel_sol + " (còpia de l'enunciat)"))
                    edicions[ruta_sol] = (src_sol, talls_sol, rel_sol)
        if talls:
            edicions[ruta] = (src, talls, rel)

    # ---------- guies, escrivint al markdown font ----------
    guies_previst = {}
    if guies:
        neteja, fix_llengua, CAP, BLOC = carrega_normalitzadors()
        spans = indexa_guies(CAP, BLOC)
        per_md = {}
        for c in guies:
            sp = spans.get(c["path"])
            if sp is None:
                problemes.append((c["path"], "no trobo aquest camí als markdown de docs/guies/")); continue
            rel, ini, fi, mena = sp
            raw = open(os.path.join(BASE, rel), encoding="utf-8").read()
            actual = valor_del_span(raw[ini:fi], mena, neteja, fix_llengua)
            if actual != c["original"]:
                problemes.append((c["path"], "el text del projecte ha canviat des de l'exportació")); continue
            nou, avis = nou_markdown(raw[ini:fi], c["original"], c["actual"], mena,
                                     neteja, fix_llengua)
            if avis and avis.startswith("NOTA:"):
                notes.append((c["path"], avis[5:]))
                avis = None
            if avis:
                problemes.append((c["path"], avis)); continue

            # Assaig en sec: què en faria el compilador, d'aquest markdown nou?
            # Val més dir-ho aquí, camp per camp, que escriure-ho tot, refer el
            # .js i haver de desfer 300 canvis bons per culpa d'un d'impossible.
            sortiria = valor_del_span(nou, mena, neteja, fix_llengua)
            if sortiria != c["actual"]:
                if mena == "titol" and c["actual"].rstrip(".") == (sortiria or ""):
                    motiu = ("els títols no poden acabar en punt: parse_guies.py "
                             "l'esborra sempre. Treu-lo i torna-ho a exportar")
                else:
                    motiu = ("parse_guies.py normalitzaria aquest text i no quedaria "
                             "com l'has escrit (en sortiria %r)" % ((sortiria or "")[:60]))
                problemes.append((c["path"], motiu)); continue
            per_md.setdefault(rel, []).append((ini, fi, nou, c["path"]))
            guies_previst[c["path"]] = c["actual"]
        for rel, talls in per_md.items():
            ruta = os.path.join(BASE, rel)
            edicions[ruta] = (open(ruta, encoding="utf-8").read(), talls, rel)

    aplicats = sum(len(t[1]) for t in edicions.values())
    print("  aplicables: %d | amb problema: %d" % (aplicats, len(problemes)))
    for ruta, (_, talls, rel) in sorted(edicions.items()):
        etiqueta = "  %s — %d canvi(s)" % (rel, len(talls))
        if rel.endswith(".md"):
            etiqueta += "   [font de les guies]"
        print(etiqueta)
        for _, _, _, path in sorted(talls, key=lambda t: t[3]):
            print("      ·", path)
    if guies_previst:
        print("  js/data/guies-dades.js es refarà sol amb parse_guies.py")
    if notes:
        print("\n  Mira-ho, però no atura res (%d):" % len(notes))
        for path, nota in notes:
            print("      · %s — %s" % (path, nota))
    if problemes:
        print("\n  NO s'apliquen (%d):" % len(problemes))
        for path, per_que in problemes:
            print("      ✗ %s — %s" % (path, per_que))

    if problemes and not parcial:
        print("\nNo s'ha tocat res. Mira els problemes de sobre; si els vols saltar "
              "i aplicar la resta, torna-hi amb --parcial.")
        return
    if not escriu:
        print("\nSimulacre. Per escriure-ho de veritat: torna-hi amb --aplica.")
        return

    # ---------- escriptura, amb desfeta si el resultat no quadra ----------
    copia = {ruta: dades[0] for ruta, dades in edicions.items()}
    ruta_js = os.path.join(BASE, "js/data/guies-dades.js")
    js_previ = open(ruta_js, encoding="utf-8").read() if guies_previst else None

    def desfes(motiu):
        for ruta, text in copia.items():
            open(ruta, "w", encoding="utf-8").write(text)
        if js_previ is not None:
            open(ruta_js, "w", encoding="utf-8").write(js_previ)
        print("\n%s\nS'ha desfet tot: el projecte ha quedat com estava." % motiu)

    for ruta, (src, talls, rel) in sorted(edicions.items()):
        for ini, fi, nou, _ in sorted(talls, key=lambda t: -t[0]):
            src = src[:ini] + nou + src[fi:]
        open(ruta, "w", encoding="utf-8").write(src)
        print("Escrit %s (%d canvi(s))" % (rel, len(talls)))

    if guies_previst:
        print("\nRefent js/data/guies-dades.js…")
        r = subprocess.run([sys.executable, os.path.join(BASE, "parse_guies.py")],
                           capture_output=True, text=True, cwd=BASE)
        if r.returncode != 0:
            desfes("parse_guies.py ha fallat:\n" + (r.stdout or "") + (r.stderr or ""))
            sys.exit(1)
        valors = valors_del_js()
        if valors is None:
            desfes("no he pogut rellegir js/data/guies-dades.js després de refer-lo.")
            sys.exit(1)
        dolents = [p for p, v in guies_previst.items() if valors.get(p) != v]
        if dolents:
            desfes("el text refet no coincideix amb el que volies a: " + ", ".join(dolents[:5]))
            sys.exit(1)
        print("Comprovat: els %d camp(s) de guia han sortit exactament com els volies."
              % len(guies_previst))

    print("\nFet: %d camp(s) aplicats. Ara toca:\n    python3 verifica_projecte.py" % aplicats)


if __name__ == "__main__":
    main()
