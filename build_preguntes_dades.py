#!/usr/bin/env python3
"""
PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
FITXER:       build_preguntes_dades.py (eina de construcció, no es serveix al lloc)
ROL:          Transforma questions_full_book.json (format d'extracció) a
              js/data/preguntes-dades.js (format de consum de l'app), seguint
              l'esquema del §4 de PROPOSTA-ARQUITECTURA.md.
ARQUITECTURA: Es fa servir un script en lloc d'editar el JS a mà perquè la
              transformació sigui auditable i repetible. Aquesta v2 substitueix
              la v1 (que només cobria p.1-55, 41 entrades) ara que ha arribat
              el lot complet (130 entrades, p.1-193). Es documenten aquí sota
              "CANVIS RESPECTE V1" els tres punts on el nou dataset trencava
              supòsits de l'script anterior — es van descobrir auditant les
              130 entrades abans de tocar cap línia de codi, no a mig procés.
DEPENDÈNCIES: geometry_questions_full_book/questions_full_book.json
              (font original, no es serveix)

DECISIONS DE MAPEIG QUE DIVERGEIXEN LLEUGERAMENT DE L'EXEMPLE LITERAL DEL §4
(documentades aquí seguint la filosofia de transparència de `repas`: què no
es fa tal com l'exemple suggeria, i per què — heretades de v1, encara vàlides)

1. Les entrades amb `caption` (q27_implicit, q40_implicit) no tenen enunciat
   de text al llibre: el seu `question` és un placeholder tècnic
   ("[No text question...]" / "[No hi ha pregunta de text...]" — el lot nou
   ve amb el placeholder en català, el vell el tenia en anglès; els dos es
   descarten igual) — NO és contingut per a l'alumne. S'usa `caption` com a
   enunciat.en en aquests casos.

2. El camp `notes` del JSON font és metadada de procés d'extracció ("on the
   page BEFORE the question"...) — descriu COM es va localitzar la imatge,
   no és text pensat per llegir. L'exemple del §4 el mapeja a
   notaEditorial.en, però fer-ho literalment convertiria soroll de captura
   en contingut de producte. En comptes d'això: es guarda a
   `_notaExtraccio` (prefix `_` = ús intern, mai a la UI) i `notaEditorial`
   es deixa `{en:null, ca:null}`, pendent que algú hi escrigui una nota
   pensada per a un lector, igual que `pista`.

3. `imatge.paginaFont`: al JSON font, `image_source_page` només apareix quan
   difereix de `question_page`. Quan no hi és, la imatge viu a la mateixa
   pàgina que la pregunta. Aquí es normalitza sempre a un valor concret
   (mai absent), fent `image_source_page` si existeix, si no
   `question_page`.

CANVIS RESPECTE V1 (descoberts auditant les 130 entrades abans de tocar codi)

A. DETECCIÓ DE "CAS IMPLICIT" GENERALITZADA, NO PER ID EXPLÍCIT.
   v1 comprovava `if qid == "q27_implicit"` — funcionava perquè només
   n'existia un. El lot nou n'afegeix un segon (q40_implicit) amb el mateix
   patró estructural: té `caption` i el seu `question` és un placeholder.
   En comptes d'ampliar la llista d'ids a mà (que tornaria a trencar-se amb
   un tercer cas futur), ara es detecta per la presència real del camp
   `caption`: `"caption" in entry`. És el senyal estructural correcte —
   ja s'ha confirmat que és exclusiu d'aquests dos casos sobre les 130
   entrades senceres.

B. image_file COM A LLISTA, NO NOMÉS STRING.
   q40_implicit és l'únic cas (sobre 130) on `image_file` és un array de
   dos noms de fitxer en lloc d'un string. v1 assumia sempre string i hauria
   escrit una llista sencera dins `imatge.fitxer`, trencant qualsevol
   consumidor (CSS, detall.js) que esperi un sol nom de fitxer. Ara
   `imatge` pot prendre DUES formes segons el cas:
     - normal:    { fitxer: "nom.png", paginaFont: N }
     - múltiple:  { fitxers: ["nom1.png", "nom2.png"], paginaFont: N }
   S'ha triat un nom de clau diferent (fitxer singular / fitxers plural)
   en lloc de forçar sempre un array de longitud 1, perquè el consumidor
   (detall.js, encara no construït) pugui distingir els dos casos sense
   ambigüitat ni haver de comprovar `Array.isArray()` per saber quin cas és
   — el nom de la clau ja ho diu. Aquest lot només té 1 cas així
   (q40_implicit); es documenta per si detall.js el necessita gestionar
   com a graella de dues imatges en lloc d'una figura sola.

C. notes POT SER null, NO NOMÉS STRING.
   36 de les 130 entrades tenen `notes: null` (preguntes sense cap
   observació d'extracció rellevant) enfront de sempre-string a v1 (les 41
   originals totes en tenien). `entry.get("notes")` ja gestiona `None`
   amb normalitat en Python (no cal `or ""` — es vol preservar `null`
   explícit a `_notaExtraccio`, no convertir-lo en soroll de string buida).

D. imatge.esCrop: DETECTAT AUTOMÀTICAMENT, NO A MÀ.
   7 imatges (q31, q76, q78, q79, q105, q107, q114) són retalls de la
   pàgina renderitzada (línia fina, tipografia pròpia del PDF per a
   etiquetes com a/b/c, C′, ∞) en lloc de dibuix a mà — el CSS ja té un
   tractament diferent per a aquest cas (.question-entry__figure--scan,
   que desactiva el mix-blend-mode: multiply perquè no n'afebleixi la
   línia fina). Cap camp del JSON font ho marca explícitament, així que
   NO es manté una llista d'ids escrita a mà (es desincronitzaria en
   silenci si futures pàgines n'afegissin més). En comptes d'això,
   s'inspecciona el mode de color real de cada PNG amb Pillow: aquests 7
   són l'únics del dataset sencer que no són escala de grisos pura ('L').
   Es va confirmar doblement abans de confiar-hi: (1) inspecció visual
   d'una mostra, i (2) el propi camp 'notes' de cadascuna esmenta una
   etiqueta de text concreta que calia preservar (a/b/c, C′, ∞, "1"),
   coherent amb el motiu de fer-ne un crop en lloc d'un dibuix. El camp
   resultant `imatge.esCrop` (true/false) es calcula en temps de build,
   no en temps d'execució al navegador — detall.js el llegeix directe,
   sense haver d'obrir cap imatge per esbrinar-ho.
"""

import json
from pathlib import Path
from PIL import Image

SRC = Path(
    "/home/claude/geo-full/geometry_questions_full_book/questions_full_book.json"
)
IMG_DIR = Path("/home/claude/geo-full/geometry_questions_full_book/images")
OUT = Path("/home/claude/geometria-site/js/data/preguntes-dades.js")

COLLECTION_ID = "geometry-book-1"

EXPECTED_TOTAL = 130
EXPECTED_WITH_IMAGE = 67
EXPECTED_MULTI_IMAGE_IDS = {"q40_implicit"}
EXPECTED_CROP_IDS = {"q31", "q76", "q78", "q79", "q105", "q107", "q114"}
EXPECTED_INVERTED_IDS = {"q42"}


def es_crop_de_pagina(nom_fitxer: str) -> bool:
    """
    True si el PNG no és escala de grisos pura ('L') — senyal que és un
    retall de la pàgina renderitzada (línia fina + tipografia real del PDF
    per a etiquetes com a/b/c, C′, ∞) en lloc d'un dibuix a mà extret.
    Es calcula obrint el fitxer real, no per coincidència de nom ni per
    cap llista escrita a mà — veure canvi D a la capçalera del mòdul.
    """
    with Image.open(IMG_DIR / nom_fitxer) as im:
        return im.mode != "L"


def es_imatge_invertida(nom_fitxer: str) -> bool:
    """
    True si el PNG té traç clar sobre fons FOSC, l'invers del patró que
    segueixen totes les altres imatges del dataset (traç fosc sobre fons
    clar). Detectat descobrint q42 en una revisió visual sistemàtica de
    les 67 preguntes amb imatge (no un problema anticipat al disseny
    original) — veure canvi E a la capçalera del mòdul.

    Criteri: més de la meitat dels píxels del PNG (en escala de grisos)
    tenen valor < 128. Es va provar primer un mostreig de les 4
    cantonades (el mateix criteri que un primer intent de detectar
    aquest cas), però donava un fals positiu amb q119 (una paràbola on
    el traç normal passa a prop de dues cantonades per pura geometria
    del dibuix, sense que la imatge estigui invertida). La ràtio de
    píxels foscos sobre el total és molt més robusta: q42 en surt amb
    94% de píxels foscos, totes les altres (incloent q119) per sota
    del 5%. No hi ha zona ambigua entre els dos grups.
    """
    with Image.open(IMG_DIR / nom_fitxer) as im:
        im_l = im.convert("L") if im.mode != "L" else im
        hist = im_l.histogram()
        total = sum(hist)
        foscos = sum(hist[:128])
        return (foscos / total) > 0.5


def transform(entry: dict) -> dict:
    qid = entry["id"]
    es_implicit = "caption" in entry  # canvi A: detecció estructural, no per id

    # --- enunciat ---
    enunciat_en = entry["caption"] if es_implicit else entry["question"]

    # --- imatge: gestiona forma normal (string) i múltiple (llista) — canvi B
    #     i calcula esCrop i esInvertida per a cadascuna — canvis D i E ---
    if entry["needs_image"]:
        pagina_font = entry.get("image_source_page", entry["question_page"])
        raw_files = entry["image_file"]
        if isinstance(raw_files, list):
            imatge = {
                "fitxers": raw_files,
                "esCrop": [es_crop_de_pagina(f) for f in raw_files],
                "esInvertida": [es_imatge_invertida(f) for f in raw_files],
                "paginaFont": pagina_font,
            }
        else:
            imatge = {
                "fitxer": raw_files,
                "esCrop": es_crop_de_pagina(raw_files),
                "esInvertida": es_imatge_invertida(raw_files),
                "paginaFont": pagina_font,
            }
    else:
        imatge = None

    return {
        "id": qid,
        "collectionId": COLLECTION_ID,
        "pagina": entry["question_page"],
        "curs": entry.get("curs"),  # ja ve explícit (null) al font; es respecta tal qual
        "interaccio": entry.get("interaccio"),  # ídem
        "imatge": imatge,
        "enunciat": {
            "en": enunciat_en,
            "ca": None,
        },
        "pista": {
            "en": None,
            "ca": None,
        },
        "notaEditorial": {
            "en": None,
            "ca": None,
        },
        # Intencionadament FORA de l'esquema del §4: metadada de procés
        # d'extracció, mai renderitzada a la UI. Pot ser null (canvi C).
        "_notaExtraccio": entry.get("notes"),
    }


def main():
    with SRC.open("r", encoding="utf-8") as f:
        raw = json.load(f)

    assert (
        len(raw) == EXPECTED_TOTAL
    ), f"S'esperaven {EXPECTED_TOTAL} entrades, n'hi ha {len(raw)}"

    transformed = [transform(e) for e in raw]

    ids = [e["id"] for e in transformed]
    assert len(ids) == len(set(ids)), "Hi ha ids duplicats després de transformar"

    with_img = sum(1 for e in transformed if e["imatge"] is not None)
    assert (
        with_img == EXPECTED_WITH_IMAGE
    ), f"S'esperaven {EXPECTED_WITH_IMAGE} preguntes amb imatge, n'hi ha {with_img}"

    multi_img_ids = {
        e["id"] for e in transformed if e["imatge"] and "fitxers" in e["imatge"]
    }
    assert multi_img_ids == EXPECTED_MULTI_IMAGE_IDS, (
        f"Ids amb imatge múltiple inesperats: {multi_img_ids} "
        f"(s'esperava {EXPECTED_MULTI_IMAGE_IDS})"
    )

    # esCrop detectat automàticament (canvi D) — es contrasta contra el
    # conjunt verificat a mà (inspecció visual + creuament amb 'notes')
    # perquè un canvi silenciós en com s'exporten les imatges no passi
    # desapercebut.
    crop_ids = set()
    for e in transformed:
        if not e["imatge"]:
            continue
        if "fitxer" in e["imatge"] and e["imatge"]["esCrop"]:
            crop_ids.add(e["id"])
        if "fitxers" in e["imatge"] and any(e["imatge"]["esCrop"]):
            crop_ids.add(e["id"])
    assert crop_ids == EXPECTED_CROP_IDS, (
        f"Ids detectats com a crop de pàgina: {crop_ids} "
        f"(s'esperava {EXPECTED_CROP_IDS}) — revisa si són imatges noves "
        f"o un canvi en com s'han exportat les existents"
    )

    # esInvertida (canvi E) — descobert en una revisió visual sistemàtica,
    # no anticipat al disseny original. Es contrasta contra el conjunt
    # conegut igual que crop_ids, pel mateix motiu: que un canvi silenciós
    # en com s'exporten les imatges no passi desapercebut.
    inverted_ids = set()
    for e in transformed:
        if not e["imatge"]:
            continue
        if "fitxer" in e["imatge"] and e["imatge"]["esInvertida"]:
            inverted_ids.add(e["id"])
        if "fitxers" in e["imatge"] and any(e["imatge"]["esInvertida"]):
            inverted_ids.add(e["id"])
    assert inverted_ids == EXPECTED_INVERTED_IDS, (
        f"Ids detectats com a imatge invertida: {inverted_ids} "
        f"(s'esperava {EXPECTED_INVERTED_IDS}) — revisa si són imatges "
        f"noves o un canvi en com s'han exportat les existents"
    )

    # Cap enunciat.en pot quedar amb el placeholder tècnic sense traduir a
    # caption — comprovació de regressió directa del canvi A.
    placeholder_leftover = [
        e["id"]
        for e in transformed
        if "[No " in e["enunciat"]["en"] or "[No hi ha" in e["enunciat"]["en"]
    ]
    assert (
        not placeholder_leftover
    ), f"Placeholders tècnics sense resoldre a enunciat.en: {placeholder_leftover}"

    body = json.dumps(transformed, indent=2, ensure_ascii=False)

    header = '''/*
  PROJECTE:     Geometria — preguntes del llibre (llibre complet, p. 1-193)
  FITXER:       js/data/preguntes-dades.js
  ROL:          Font de dades de totes les preguntes. Variable global, NO
                JSON carregat amb fetch() — lliçó de cangurcat/README.md: el
                lloc ha de funcionar obrint index.html per doble clic
                (file://), on fetch() d'un .json queda bloquejat per CORS.
  ARQUITECTURA: Es carrega abans de js/ui/*.js. Qualsevol vista llegeix
                window.PREGUNTES directament; cap altre fitxer torna a
                declarar aquesta variable. NO assumeix mai un total fix:
                router.js i progres.js (§ pas 4) ja estan escrits perquè
                aquest array pugui créixer entre generacions sense tocar-los.
  DEPENDÈNCIES: Cap (dades pures, sense lògica).

  GENERAT PER:  build_preguntes_dades.py — NO editar aquest fitxer a mà.
                Per canviar contingut font, edita questions_full_book.json
                i torna a executar l'script. Traduccions (enunciat.ca,
                pista.*, notaEditorial.*) SÍ que s'editen a mà directament
                aquí un cop generat, ja que no venen del JSON font — si
                regeneres aquest fitxer, revisa que no perds traduccions
                ja escrites (v. nota "REGENERACIÓ" més avall).

  ESQUEMA (v. §4 de PROPOSTA-ARQUITECTURA.md):
    id             — estable, mai es reutilitza ni es renumera
    collectionId   — identificador d'aquest lot de preguntes;
                     permet ajuntar futures col·leccions sense refactor
    pagina         — pàgina del llibre on viu l'enunciat
    curs           — PENDENT (§6). null fins que es decideixi l'assignació
    interaccio     — PENDENT (§7). null fins que es decideixi el mode de resposta
    imatge         — objecte amb paginaFont, esCrop, esInvertida, i UNA de
                     les dues formes:
                       { fitxer: "nom.png", esCrop: bool, esInvertida: bool,
                         paginaFont }
                         — cas normal
                       { fitxers: ["a.png","b.png"], esCrop: [bool,bool],
                         esInvertida: [bool,bool], paginaFont }
                         — cas múltiple (esCrop/esInvertida en paral·lel a
                           fitxers, mateix índex = mateixa imatge)
                     o null si la pregunta no en té.
                     Comprova sempre 'fitxers' (plural) abans de 'fitxer':
                     un consumidor que només llegeixi 'fitxer' ignorarà en
                     silenci els casos múltiples en lloc de petar, així
                     que val la pena una comprovació explícita a detall.js.
                     esCrop=true → aplica la classe CSS
                     .question-entry__figure--scan (desactiva
                     mix-blend-mode: multiply, que amb aquestes imatges
                     afebleix una línia ja fina en lloc d'ajudar-la a
                     fondre's amb el paper — comprovat visualment).
                     esInvertida=true → NO ha d'aplicar mix-blend-mode:
                     multiply (produiria un requadre negre — es va veure
                     literalment així a q42 abans de detectar-ho). detall.js
                     encara no distingeix aquest cas — veure canvi E.
    enunciat       — objecte amb en i ca — en sempre ple (font original);
                     ca pot ser null: la UI ha de fer fallback a en
    pista          — objecte amb en i ca — opcional de debò: null vol dir
                     "sense pista", no "pendent de traduir"
    notaEditorial  — objecte amb en i ca — nota pensada per a qui llegeix,
                     pendent d'escriure's (buida ara; NO conté metadata
                     d'extracció)
    _notaExtraccio — ÚS INTERN. Metadada de com es va localitzar la imatge
                     dins el PDF font. Mai es renderitza a la UI. Pot ser
                     null (moltes entrades no en tenen). Prefix "_" ho marca
                     com a fora de l'esquema públic (§4).

  CASOS ESPECIALS (transparència a l'estil de repas/README.md):
    - q27_implicit (pàg. 46) i q40_implicit (pàg. 58): no tenen enunciat de
      text al llibre — la imatge ÉS la pregunta. enunciat.en és el peu de
      foto real del llibre, no un placeholder. q40_implicit, a més, és
      l'ÚNIC cas de tot el dataset amb imatge.fitxers (plural, dues
      imatges) en lloc d'imatge.fitxer.
    - Sufixos de lletra (q08a/b/c, q18a/b...): el llibre planteja diverses
      preguntes seguides al mateix punt del text.
    - Crops de pàgina en RGB (línia fina, tipografia pròpia del PDF, no
      dibuix a mà) en lloc de figura vectoritzada, per preservar etiquetes
      de text que no formen part del gràfic incrustat: q31, q76, q78, q79,
      q105, q107, q114. Detectat automàticament (mode de color del PNG,
      no una llista a mà) i exposat com a imatge.esCrop — v. canvi D.
    - q42 (pàg. 62): l'ÚNIC fitxer del dataset amb traç clar sobre fons
      FOSC en lloc del patró habitual (traç fosc sobre paper clar). Es va
      descobrir en una revisió visual sistemàtica de les 67 preguntes amb
      imatge — sense aquesta detecció, mix-blend-mode: multiply hi produeix
      un requadre negre en lloc de fondre's amb el paper. Exposat com a
      imatge.esInvertida — v. canvi E. detall.js encara NO llegeix aquest
      camp (és a dir, avui q42 encara es veu amb el problema); cal que
      un proper pas hi afegeixi el tractament CSS corresponent (per
      exemple, ometre el multiply i/o aplicar un filter: invert() abans).
    - q34 (pàg. 53): needs_image=false, però no perquè no calgui —
      l'autor demana explícitament que sigui l'alumne qui dibuixi la seva
      pròpia figura. Semànticament diferent d'una pregunta purament
      conceptual sense imatge; de moment només queda documentat a
      _notaExtraccio, sense cap camp dedicat a l'esquema.
    - q99 / q109: mateix text de pregunta, entrades independents a
      propòsit (contextos i imatges diferents al llibre).
    - q11/q12 i q14/q15: cada entrada apunta al seu propi fitxer
      d'imatge, però el contingut binari és idèntic (mateix hash MD5).

  REGENERACIÓ: si aquest fitxer es torna a generar després d'haver-hi
  escrit traduccions a mà, cal migrar-les abans (llegir el .js existent,
  fondre enunciat.ca/pista/notaEditorial per id dins de transform(), en
  lloc de sobreescriure'l directament). Aquesta versió de l'script encara
  NO ho fa — sobreescriu net — perquè encara no hi ha cap traducció escrita
  a la versió que reemplaça.
*/

window.PREGUNTES = '''

    OUT.parent.mkdir(parents=True, exist_ok=True)
    with OUT.open("w", encoding="utf-8") as f:
        f.write(header)
        f.write(body)
        f.write(";\n")

    print(f"Escrites {len(transformed)} preguntes a {OUT}")
    print(f"  amb imatge: {with_img}")
    print(f"  sense imatge: {len(transformed) - with_img}")
    print(f"  amb imatge múltiple (fitxers, plural): {sorted(multi_img_ids)}")
    print(f"  crop de pàgina (esCrop=true): {sorted(crop_ids)}")
    print(f"  invertida (esInvertida=true): {sorted(inverted_ids)}")


if __name__ == "__main__":
    main()
