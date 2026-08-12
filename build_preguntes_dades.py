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

F. DOS CAMPS NOUS: dimensio ("2D"/"3D") i dificultat (1/2/3).
   Classificacio de cada pregunta en dos eixos independents:
     - dimensio: "2D" si tot el plantejament geometric viu al pla, "3D"
       si el RAONAMENT necessari passa per l'espai (encara que el
       resultat final sigui una corba o figura plana -- p.ex. una
       el·lipse com a seccio d'un con es "3D"; l'area d'una el·lipse ja
       establerta es "2D").
     - dificultat: 1 (consequencia gairebe immediata del que precedeix,
       intuitiu), 2 (una demostracio d'un sol argument net), o 3 (diversos
       passos/casos independents, o una idea genuinament nova no
       anticipada, o formalisme pesat -- trigonometria amb diverses
       variables, limits, invariants).
   Igual que esCrop/esInvertida (canvis D/E) i A DIFERENCIA de curs/
   interaccio: NO venen del JSON font (questions_full_book.json no te
   aquests camps) -- es computen en temps de build a partir d'una taula
   fixa, CLASSIFICACIO_DIMENSIO_DIFICULTAT, escrita directament en aquest
   script. Per tant sobreviuen intactes a una regeneracio, sense necessitat
   de migracio manual com enunciat.ca/pista/notaEditorial (v. nota
   REGENERACIO mes avall).
   ORIGEN I LIMITACIONS: es una primera classificacio feta pregunta a
   pregunta a partir nomes de l'enunciat, la pagina i la imatge (quan
   n'hi ha) -- SENSE el text complet del llibre. `dimensio` es bastant
   objectiva un cop fixat el criteri; `dificultat` es inevitablement mes
   subjectiva (depen de que s'hagi vist just abans al llibre) i queda
   pendent de revisio per algu que tingui el llibre sencer. La
   justificacio breu de cada classificacio es guarda a
   `_notaClassificacio` (us intern, mateix esperit que `_notaExtraccio`)
   perque aquesta revisio no hagi de refer el raonament de zero.
   Els EXPECTED_DIMENSIO_COUNTS / EXPECTED_DIFICULTAT_COUNTS son
   comprovacions de regressio (canvis D/E ho fan igual amb ids concrets):
   no impedeixen un error de classificacio, pero si que una edicio
   accidental de la taula passi desapercebuda.

G. LES GUIES DE DEMOSTRACIÓ NO VIUEN EN AQUEST FITXER.
   A partir del primer lot de guies, cada pregunta pot tenir una "escala de
   pistes" (4 nivells + comprovació + i-després + una figura de construcció).
   Aquest contingut NO s'afegeix a preguntes-dades.js: viu a part, a
   js/data/guies-dades.js, i s'uneix per id en temps d'execució
   (js/nucli/guies.js).
   MOTIU, i és el mateix que ja fa mal amb enunciat.ca/pista/notaEditorial
   (v. nota REGENERACIÓ més avall): aquest script SOBREESCRIU net. Tot el que
   sigui contingut escrit a mà i col·locat dins del registre de la pregunta es
   perd la pròxima vegada que es regeneri des del JSON d'extracció. Les guies
   són desenes de milers de caràcters escrits i revisats en lots successius;
   posar-les aquí seria garantir que un dia es destrueixin.
   Conseqüència pràctica: aquest script es pot tornar a executar sense por
   d'afectar cap guia. La comprovació de cobertura de guies (que cap guia
   apunti a un id inexistent) no es fa aquí sinó a parse_guies.py, que és qui
   genera guies-dades.js.
"""

import json
from collections import Counter
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

# CANVI F: distribució esperada de dimensio/dificultat sobre les 130
# preguntes, per detectar regressions si CLASSIFICACIO_DIMENSIO_DIFICULTAT
# es toca sense voler (mateix esperit que EXPECTED_CROP_IDS/INVERTED_IDS:
# no evita que algú s'equivoqui, però ho fa petar en comptes de passar
# desapercebut).
EXPECTED_DIMENSIO_COUNTS = {"2D": 88, "3D": 42}
EXPECTED_DIFICULTAT_COUNTS = {1: 28, 2: 70, 3: 32}


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


CLASSIFICACIO_DIMENSIO_DIFICULTAT = {
    # id: (dimensio, dificultat, nota de criteri -- v. CANVI F)
    "q01": ("2D", 1, "deducció immediata per simetria"),
    "q02": ("2D", 1, "comparació visual directa de congruència"),
    "q03": ("2D", 3, "classificació combinatòria de totes les teselacions possibles"),
    "q04": ("2D", 1, "fórmula directa de suma d'angles"),
    "q05": ("2D", 2, "cal comptar voltes/autointerseccions de l'estrella"),
    "q06": ("2D", 2, "requereix un argument, no és immediat"),
    "q07": ("2D", 2, "cas límit/extensió del anterior"),
    "q08a": ("3D", 2, "exploració oberta de poliedres simètrics"),
    "q08b": ("3D", 3, "classificació completa (arg. tipus Euler, diversos casos)"),
    "q08c": ("2D", 2, "cas triangle immediat; cas quadrilàter exigeix contraexemple"),
    "q09": ("2D", 2, "semblança via alçada sobre hipotenusa, argument clàssic"),
    "q10": ("2D", 1, "directe per congruència de triangles"),
    "q11": ("2D", 1, "directe des de la definició"),
    "q12": ("2D", 2, "cal el recíproc via triangles congruents"),
    "q13": ("2D", 1, "igual base i alçada"),
    "q14": ("2D", 1, "meitat de la caixa, directe"),
    "q15": ("2D", 2, "cal tractar el cas en què el vèrtex surt de la caixa"),
    "q16": ("2D", 2, "teorema de Varignon: base mitjana + càlcul d'àrea"),
    "q17": ("2D", 3, "dissecció general tipus Bolyai–Gerwien, construcció no trivial"),
    "q18a": ("3D", 1, "fórmula directa V=abc"),
    "q18b": ("3D", 2, "escalat cúbic, generalització moderada"),
    "q19": ("2D", 1, "aritmètica elemental"),
    "q20": ("2D", 1, "aritmètica elemental"),
    "q21": ("2D", 2, "prova d'irracionalitat + variant per la suma"),
    "q22": ("2D", 2, "relació pitagòrica amb incògnita"),
    "q23": ("2D", 2, "varies configuracions, àlgebra moderada"),
    "q24": ("2D", 2, "ternes pitagòriques"),
    "q25": ("3D", 1, "doble Pitàgores, gairebé immediat un cop es coneix el cas 2D"),
    "q26": ("2D", 1, "Pitàgores directe"),
    "q27_implicit": ("2D", 2, "tres configuracions de cercles inscrits, àlgebra moderada"),
    "q28": ("2D", 1, "conseqüència immediata de q26"),
    "q29": ("2D", 2, "diverses diagonals i àrees, moderat"),
    "q30": ("2D", 2, "extensió de q29 a un cas més"),
    "q31": ("2D", 2, "argument d'angles amb una idea principal"),
    "q32": ("2D", 3, "proporció àuria, autosemblança, equació quadràtica"),
    "q33": ("2D", 2, "segona demostració guiada per la figura donada"),
    "q34": ("2D", 1, "identitat algebraica clàssica il·lustrada"),
    "q35": ("2D", 2, "àlgebra; el cas producte exigeix una quadràtica"),
    "q36": ("2D", 2, "optimització estàndard (AM-GM)"),
    "q37": ("2D", 2, "sistema de dues equacions"),
    "q38": ("2D", 2, "equació d'autosemblança, quadràtica"),
    "q39": ("2D", 2, "combina diagonal/costat amb descomposició en triangles"),
    "q40_implicit": ("2D", 2, "dues configuracions cercle-quadrat, moderat"),
    "q41": ("2D", 2, "teorema de Tales, prova clàssica d'un pas"),
    "q42": ("2D", 2, "teorema de l'angle inscrit, argument clàssic"),
    "q43": ("2D", 3, "generalitza de 2 a 3 cercles, segments circulars"),
    "q44": ("2D", 3, "àlgebra amb diverses incògnites, tipus Descartes"),
    "q45": ("3D", 2, "desenvolupament pla del cilindre, una idea neta"),
    "q46": ("2D", 2, "argument de dilatació des del cercle"),
    "q47": ("3D", 2, "descomposició volumètrica moderada"),
    "q48": ("3D", 3, "fórmula multivariable (a,b,h), diversos passos"),
    "q49": ("3D", 2, "anàleg 3D del centre del triangle"),
    "q50": ("3D", 2, "reconeixement de patró en una seqüència d'aproximacions"),
    "q51": ("3D", 2, "desenvolupament pla del con, un sol argument net"),
    "q52": ("3D", 2, "visualització espacial, una construcció"),
    "q53": ("3D", 3, "cal construir un contraexemple genuí"),
    "q54": ("2D", 3, "cal inventar un principi nou (anàleg pla de Cavalieri)"),
    "q55": ("2D", 3, "argument de límit subtil (paradoxa de l'escaleta)"),
    "q56": ("3D", 2, "càlcul de volum moderat"),
    "q57": ("3D", 3, "multi-cas, obert, diversos sòlids"),
    "q58": ("3D", 3, "sòlid de Steinmetz, generalització a 3 cilindres"),
    "q59": ("3D", 2, "cal la fórmula del volum de l'esfera abans de comparar"),
    "q60": ("3D", 2, "argument net d'un sol pas"),
    "q61": ("3D", 2, "resultat clàssic d'Arquimedes, un argument"),
    "q62": ("3D", 3, "dues fórmules, combina resultats anteriors"),
    "q63": ("3D", 1, "conceptual i directe"),
    "q64": ("2D", 2, "raonament d'envolupant, moderat"),
    "q65": ("3D", 3, "cal una definició nova i genuïna perquè Pappus funcioni"),
    "q66": ("3D", 2, "aplicació/verificació directa de Pappus"),
    "q67": ("3D", 2, "anàleg conceptual de q65 per al perímetre"),
    "q68": ("3D", 2, "aplicació d'un sol pas de Pappus"),
    "q69": ("2D", 2, "dos càlculs relacionats (àrea i perímetre)"),
    "q70": ("2D", 1, "resultat estàndard directe"),
    "q71": ("2D", 2, "condició de tancament sobre les longituds"),
    "q72": ("2D", 2, "pregunta de síntesi moderada"),
    "q73": ("2D", 2, "cas triangle directe; cas quadrilàter exigeix contraexemple"),
    "q74": ("2D", 1, "desigualtat triangular, directe"),
    "q75": ("2D", 2, "cal construir un exemple"),
    "q76": ("2D", 2, "relació A=rs, derivació moderada"),
    "q77": ("2D", 2, "reaplicar una tècnica ja vista en un context nou"),
    "q78": ("2D", 1, "angles complementaris, directe"),
    "q79": ("2D", 3, "teorema del cosinus generalitzat, més àlgebra/trig"),
    "q80": ("2D", 2, "fórmula trigonomètrica de l'àrea, derivació estàndard"),
    "q81": ("3D", 3, "angle diedre, trig 3D, multi-cas per altres sòlids"),
    "q82": ("3D", 3, "exploració oberta de tesel·lacions de l'espai"),
    "q83": ("2D", 1, "directe des del triangle equilàter"),
    "q84": ("2D", 1, "identitat pitagòrica directa"),
    "q85": ("2D", 3, "combina proporció àuria amb trigonometria"),
    "q86": ("2D", 2, "cal construir un contraexemple/segona solució"),
    "q87": ("2D", 2, "extensió de definició + verificació"),
    "q88": ("2D", 2, "derivació trigonomètrica estàndard"),
    "q89": ("2D", 3, "teorema de Steiner–Lehmus, demostració indirecta cèlebre"),
    "q90": ("2D", 3, "derivació algebraica avançada (fórmula de Brahmagupta)"),
    "q91": ("3D", 2, "relació trigonomètrica moderada entre plans"),
    "q92": ("3D", 2, "cal considerar la dependència de la direcció"),
    "q93": ("3D", 2, "argument pitagòric net via triangles al centre"),
    "q94": ("2D", 1, "cas trivial/degenerat: els focus coincideixen al centre"),
    "q95": ("2D", 1, "prova clàssica senzilla"),
    "q96": ("2D", 2, "principi de reflexió, moderat"),
    "q97": ("2D", 2, "dues reflexions, moderat"),
    "q98": ("2D", 1, "idea conceptual directa, sense demostració"),
    "q99": ("2D", 3, "'work out the details' -- bona part de la prova es deixa al lector"),
    "q100": ("3D", 2, "dos subcasos (plans paral·lels / punt entremig)"),
    "q101": ("3D", 3, "invariància de la raó doble, idea projectiva profunda"),
    "q102": ("3D", 2, "extensió moderada de les idees projectives prèvies"),
    "q103": ("3D", 2, "cal considerar el cas del punt a l'infinit"),
    "q104": ("3D", 2, "idea del punt de fuga, un sol pas"),
    "q105": ("3D", 1, "conseqüència gairebé immediata d'afegir punts a l'infinit"),
    "q106": ("3D", 3, "descobriment obert (raó doble)"),
    "q107": ("3D", 3, "combina geometria del con amb idea projectiva"),
    "q108": ("3D", 1, "exploració observacional directa"),
    "q109": ("3D", 3, "prova de Dandelin, diversos lemes"),
    "q110": ("2D", 2, "argument analític de simetria sobre l'equació"),
    "q111": ("2D", 2, "derivació moderada des del rectangle d'asímptotes"),
    "q112": ("2D", 2, "àlgebra moderada, forma xy=c"),
    "q113": ("2D", 2, "derivació directa de c²=a²-b²"),
    "q114": ("2D", 2, "extensió moderada del raonament de q113"),
    "q115": ("2D", 2, "derivació algebraica moderada"),
    "q116": ("2D", 3, "descobriment obert d'una propietat nova"),
    "q117": ("2D", 1, "totes les paràboles són semblants, directe"),
    "q118": ("2D", 3, "exigeix una prova alternativa rigorosa, més difícil"),
    "q119": ("2D", 3, "connectar una construcció discreta amb la corba contínua"),
    "q120": ("2D", 2, "resultat clàssic net, un argument principal"),
    "q121": ("2D", 3, "resultat d'Arquimedes, exhaustió/límits"),
    "q122": ("2D", 1, "conceptual i directe"),
    "q123": ("3D", 3, "cal 'desenrotllar' l'hèlix, idea genuïnament nova"),
    "q124": ("2D", 3, "condició sobre la raó de radis, idea nova"),
    "q125": ("2D", 1, "cas degenerat directe (es converteix en cercle)"),
    "q126": ("3D", 2, "generalització conceptual oberta"),
    "q127": ("2D", 3, "traçar l'astroide, calen parametrització i idea nova"),
}


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

    # --- dimensio / dificultat: CANVI F. A diferència de curs/interaccio
    #     (que passen tal qual des del JSON font), aquests dos camps NO
    #     vénen de questions_full_book.json -- es calculen a temps de build
    #     a partir d'una taula fixa (CLASSIFICACIO_DIMENSIO_DIFICULTAT),
    #     igual d'esperit que esCrop/esInvertida (canvis D/E): la font de
    #     veritat viu al codi d'aquest script, no al JSON d'extracció, així
    #     que sobreviu intacta si es regenera el fitxer. KeyError explícit
    #     si algun dia apareix un id nou sense classificar -- millor petar
    #     aquí que servir null en silenci.
    dimensio, dificultat, nota_classificacio = CLASSIFICACIO_DIMENSIO_DIFICULTAT[qid]

    return {
        "id": qid,
        "collectionId": COLLECTION_ID,
        "pagina": entry["question_page"],
        "curs": entry.get("curs"),  # ja ve explícit (null) al font; es respecta tal qual
        "interaccio": entry.get("interaccio"),  # ídem
        "dimensio": dimensio,  # "2D" | "3D" -- v. CANVI F
        "dificultat": dificultat,  # 1 | 2 | 3 -- v. CANVI F
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
        # ÚS INTERN, com _notaExtraccio -- mai a la UI. Justificació breu
        # del criteri aplicat a dimensio/dificultat (v. CANVI F), perquè
        # una futura revisió humana de la classificació no hagi de refer
        # el raonament de zero.
        "_notaClassificacio": nota_classificacio,
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

    # CANVI F — cobertura: cap id del lot actual pot quedar sense
    # classificar, i CLASSIFICACIO_DIMENSIO_DIFICULTAT no pot arrossegar
    # ids d'un lot antic que ja no existeixen (es desincronitzaria en
    # silenci, el mateix risc que motiva canvi A). Comparació simètrica en
    # comptes de confiar només en el KeyError de transform(): un KeyError
    # aturaria el build igualment, però aquest assert dona la llista
    # completa de discrepàncies d'un sol cop.
    ids_classificats = set(CLASSIFICACIO_DIMENSIO_DIFICULTAT.keys())
    ids_actuals = set(ids)
    assert ids_classificats == ids_actuals, (
        f"Ids sense classificar: {ids_actuals - ids_classificats} / "
        f"Ids classificats però ja no presents al lot: "
        f"{ids_classificats - ids_actuals}"
    )

    # CANVI F — distribució: comprovació de regressió perquè una edició
    # accidental de la taula (o un futur lot amb barreja de preguntes
    # noves i velles) no canviï silenciosament el balanç 2D/3D o de
    # dificultat. Mateix esperit que EXPECTED_CROP_IDS/INVERTED_IDS.
    dimensio_counts = Counter(e["dimensio"] for e in transformed)
    assert dict(dimensio_counts) == EXPECTED_DIMENSIO_COUNTS, (
        f"Distribució de dimensio: {dict(dimensio_counts)} "
        f"(s'esperava {EXPECTED_DIMENSIO_COUNTS})"
    )
    dificultat_counts = Counter(e["dificultat"] for e in transformed)
    assert dict(dificultat_counts) == EXPECTED_DIFICULTAT_COUNTS, (
        f"Distribució de dificultat: {dict(dificultat_counts)} "
        f"(s'esperava {EXPECTED_DIFICULTAT_COUNTS})"
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
    dimensio       — "2D" | "3D" — v. canvi F. NO ve del JSON font: es
                     calcula en temps de build des d'una taula fixa
                     escrita a l'script (com esCrop/esInvertida), no del
                     PDF d'extracció. Primera classificació pendent de
                     revisió (v. _notaClassificacio i canvi F).
    dificultat     — 1 | 2 | 3 — v. canvi F. Mateix origen i mateixa
                     reserva que dimensio: primera passada, pendent que
                     algú amb el llibre sencer la revisi.
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
    _notaClassificacio — ÚS INTERN, com _notaExtraccio. Justificació breu
                     (uns quants mots) del criteri aplicat a dimensio/
                     dificultat per a aquesta pregunta concreta — v. canvi F.

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
    - dimensio/dificultat (v. canvi F): classificació de les 130 preguntes
      feta pregunta a pregunta sense el text complet del llibre (només
      enunciat + pàgina + imatge, quan n'hi ha). "2D" vol dir que tot el
      plantejament geomètric viu al pla; "3D" que el raonament necessari
      passa per l'espai encara que el resultat final sigui una figura
      plana (p.ex. una el·lipse com a secció d'un con és "3D"). Dos casos
      on el criteri no és evident només amb l'enunciat i s'ha decidit per
      la posició al llibre: q94 (focus d'un cercle com a el·lipse
      degenerada, classificat 2D tot i venir just després del lema de
      tangents a l'esfera) i q65/q67 (definir el centroide "perquè Pappus
      funcioni", classificat 3D pel motiu — el volum de revolució — encara
      que "centroide" en si sigui un concepte 2D). Pendent de revisió per
      algú amb el llibre sencer — v. `_notaClassificacio` per pregunta.

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
    print(f"  dimensio: {dict(dimensio_counts)}")
    print(f"  dificultat: {dict(dificultat_counts)}")


if __name__ == "__main__":
    main()
