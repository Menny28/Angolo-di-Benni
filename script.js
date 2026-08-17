/* =========================================================
   ANGOLO DI BENNI — script condiviso da tutte le pagine
   Ogni blocco di rendering controlla prima che l'elemento
   di destinazione esista in quella pagina, così lo stesso
   file funziona ovunque senza errori.
   ========================================================= */

/* ---------------- DATA: catalogo prodotti ---------------- */
const products = [
  {id:'borsetta-nera', name:'Borsetta Nera', category:'accessori', color:'nero', colorHex:'#12151c', price:149, img:'images/borsetta_nera.jpg',
    desc:'Borsetta a spalla in pelle liscia, con chiusura girevole dorata e manico regolabile. Perfetta per il giorno e per la sera.',
    material:'Pelle bovina liscia, ferramenta dorata', fit:'Capienza media: entrano portafoglio, chiavi e smartphone. Tracolla regolabile 40–65 cm.',
    sizes:['Taglia unica']},
  {id:'bracciale-argento', name:'Bracciale Argento', category:'accessori', color:'argento', colorHex:'#c9c9c9', price:89, img:'images/bracciale_argento.jpg',
    desc:'Bracciale a catena con cinque charm a quadrifoglio in madreperla, chiusura a moschettone.',
    material:'Argento 925, madreperla naturale', fit:'Lunghezza 18 cm, con anellini di regolazione da 1,5 cm.',
    sizes:['Taglia unica']},
  {id:'cintura-bordeaux', name:'Cintura Effetto Cocco', category:'accessori', color:'bordeaux', colorHex:'#5c1f2e', price:95, img:'images/cintura_squamata_rossa.jpg', badge:'Nuovo',
    desc:'Cintura in pelle stampa cocco con fibbia maxi dorata, rifinita a mano.',
    material:'Pelle stampata, fibbia in metallo dorato', fit:'Veste in vita o leggermente sui fianchi. Cinque fori di regolazione.',
    sizes:['80','85','90','95']},
  {id:'jeans-stelle', name:'Jeans a Stella', category:'pantaloni', color:'denim', colorHex:'#5c7a94', price:99, img:'images/jeans_largo_stelle.jpg',
    desc:'Jeans a gamba larga con applicazioni a stella sfilacciate sulle cosce, vita alta.',
    material:'100% cotone denim', fit:'Vestibilità ampia e comoda: prendere la propria taglia abituale. Lunghezza importante, ideale con sneaker o tacco.',
    sizes:['38','40','42','44','46']},
  {id:'orecchini-oro', name:'Orecchini a Cerchio', category:'accessori', color:'oro', colorHex:'#c9a24b', price:59, img:'images/orecchini_oro.jpg',
    desc:'Orecchini a cerchio ampio, superficie liscia e lucida, chiusura a farfalla.',
    material:'Placcatura oro 18k su ottone', fit:'Diametro 3,5 cm, leggeri: adatti anche all\'uso quotidiano.',
    sizes:['Taglia unica']},
  {id:'pantalone-nero', name:'Pantalone Elegante Nero', category:'pantaloni', color:'nero', colorHex:'#12151c', price:159, img:'images/pantalone_elegante_nero.jpg',
    desc:'Pantalone sartoriale a vita alta con doppia pince e gamba ampia, in tessuto fluido.',
    material:'97% lana, 3% elastan', fit:'Vestibilità comoda sul fianco, gamba dritta e ampia. Prendere la propria taglia abituale.',
    sizes:['38','40','42','44','46']},
  {id:'pantalone-panna', name:'Pantalone Panna', category:'pantaloni', color:'panna', colorHex:'#e8ddc8', price:139, img:'images/pantalone_panna_elegante.jpg',
    desc:'Pantalone a palazzo color panna, vita alta e pince frontali, chiusura con gancio a vista.',
    material:'Misto viscosa, mano morbida', fit:'Stessa vestibilità del modello nero: ampio sulla gamba, prendere la propria taglia.',
    sizes:['38','40','42','44']},
  {id:'sneaker-bianche', name:'Sneaker Bianche', category:'scarpe', color:'bianco', colorHex:'#f6f2e8', price:179, img:'images/scarpe_ginnastica_bianche.jpg', badge:'Bestseller',
    desc:'Sneaker in pelle con suola maxi e dettaglio a contrasto sul tallone.',
    material:'Pelle liscia, suola in gomma', fit:'Vestono leggermente grandi: si consiglia mezza taglia in meno rispetto al solito.',
    sizes:['36','37','38','39','40','41']},
  {id:'tacchi-slingback', name:'Décolleté Slingback', category:'scarpe', color:'nero', colorHex:'#12151c', price:129, img:'images/tacchi_a_punta_neri.jpg',
    desc:'Décolleté slingback in vernice nera, punta a mandorla e tacco sottile 8 cm.',
    material:'Vernice sintetica, suola in cuoio', fit:'Vestibilità regolare, cinturino posteriore regolabile per una calzata più sicura.',
    sizes:['36','37','38','39','40']},
  {id:'tacchi-spillo', name:'Décolleté Tacco a Spillo', category:'scarpe', color:'nero', colorHex:'#12151c', price:189, img:'images/tacchi_suola_rossa.jpg',
    desc:'Décolleté in vernice nera con punta affilata e tacco a spillo 10 cm, suola a contrasto.',
    material:'Vernice, suola in cuoio verniciato', fit:'Calzata precisa e aderente: se hai un piede stretto va bene la tua taglia, altrimenti mezza taglia in più.',
    sizes:['36','37','38','39','40']},
  {id:'vestito-bianco', name:'Vestito Bianco Estivo', category:'vestiti', color:'bianco', colorHex:'#f6f2e8', price:89, img:'images/vestito_bianco.jpg',
    desc:'Abito lungo con spalline sottili, dettagli in pizzo a balze e coulisse sul davanti.',
    material:'Cotone leggero', fit:'Vestibilità morbida e svasata, adatta anche a chi preferisce non fasciare il punto vita.',
    sizes:['XS','S','M','L']},
  {id:'vestito-blu', name:'Vestito Blu Notte', category:'vestiti', color:'blu', colorHex:'#1c2b45', price:69, img:'images/vestito_blu.jpg',
    desc:'Mini abito con scollo all\'americana, corpetto arricciato e gonna a balze sovrapposte.',
    material:'Jersey costine, elasticizzato', fit:'Fascia il corpo su busto e vita, gonna svolazzante. Vestibilità regolare.',
    sizes:['XS','S','M','L']},
  {id:'vestito-bordeaux', name:'Vestito Bordeaux Corsetto', category:'vestiti', color:'bordeaux', colorHex:'#5c1f2e', price:149, img:'images/vestito_bordeaux_.jpg', badge:'Nuovo',
    desc:'Abito corto in stile bustier, spalle scoperte e drappeggio laterale con strascico removibile.',
    material:'Raso stretch', fit:'Vestibilità aderente e strutturata, stecche interne al corpetto. Consigliata la propria taglia.',
    sizes:['XS','S','M','L']},
  {id:'vestito-floreale', name:'Vestito Floreale con Spacco', category:'vestiti', color:'panna', colorHex:'#e8ddc8', price:99, img:'images/vestito_corsetto.jpg',
    desc:'Abito lungo a fiori con maniche a palloncino, corpetto arricciato e spacco laterale.',
    material:'Popeline di cotone', fit:'Vestibilità morbida in vita, gonna ampia. Fedele alla taglia.',
    sizes:['XS','S','M','L']},
  {id:'vestito-pois', name:'Vestito Pois', category:'vestiti', color:'bianco', colorHex:'#f6f2e8', price:75, img:'images/vestito_pois_bianco.jpg',
    desc:'Mini abito a pois con scollo profondo all\'americana e gonna a doppia balza.',
    material:'Popeline elasticizzato', fit:'Vestibilità aderente su busto, gonna svasata a balze. Consigliata la propria taglia.',
    sizes:['XS','S','M','L']},

  {id:'sneaker-fashion', name:'Sneaker Fashion', category:'scarpe', color:'bianco', colorHex:'#f6f2e8', price:59, img:'images/sneaker_bianche_fashion.jpg',
    desc:'Sneaker basse con suola alta a due strati e dettagli a righe a contrasto, chiusura con lacci.',
    material:'Ecopelle, suola in gomma', fit:'Vestibilità regolare, suola alta che allunga la gamba. Prendere la propria taglia.',
    sizes:['36','37','38','39','40']},
  {id:'borsa-secchiello-nera', name:'Borsa a Secchiello', category:'accessori', color:'nero', colorHex:'#12151c', price:225, img:'images/borsa_secchiello_nera.jpg', badge:'Nuovo',
    desc:'Borsa a secchiello in pelle con manico rigido, coulisse e bottone a pressione, tracolla removibile.',
    material:'Pelle grainata, ferramenta dorata', fit:'Capienza generosa, ideale come borsa da giorno. Tracolla regolabile.',
    sizes:['Taglia unica']},
  {id:'borsa-intrecciata-marrone', name:'Borsa Intrecciata Cognac', category:'accessori', color:'marrone', colorHex:'#8a5a34', price:265, img:'images/borsa_intrecciata_marrone.jpg', badge:'Nuovo',
    desc:'Borsa a spalla in pelle intrecciata a mano, forma morbida e manico ampio.',
    material:'Pelle intrecciata (stile woven)', fit:'Si porta a spalla o a mano, capienza media-alta, forma destrutturata.',
    sizes:['Taglia unica']},
  {id:'bracciale-fiori-oro', name:'Bracciale Fiori', category:'accessori', color:'oro', colorHex:'#c9a24b', price:69, img:'images/bracciale_fiori_oro.jpg',
    desc:'Bracciale a catena con tre fiori tridimensionali, chiusura a moschettone e catenella di regolazione.',
    material:'Acciaio placcato oro', fit:'Lunghezza regolabile 16-19 cm circa.',
    sizes:['Taglia unica']},
  {id:'occhiali-neri-ovali', name:'Occhiali da Sole Ovali', category:'accessori', color:'nero', colorHex:'#12151c', price:159, img:'images/occhiali_neri_ovali.jpg',
    desc:'Occhiali da sole a montatura ovale, lenti scure e dettaglio logo sull\'asta.',
    material:'Acetato, lenti con protezione UV400', fit:'Montatura media, adatta alla maggior parte dei visi.',
    sizes:['Taglia unica']},
  {id:'tacchi-leopardati', name:'Décolleté Slingback Animalier', category:'scarpe', color:'leopardo', colorHex:'#8a6a3a', price:139, img:'images/tacchi_leopardati.jpg', badge:'Nuovo',
    desc:'Décolleté slingback in raso stampa leopardo, punta a mandorla e tacco a spillo 11 cm.',
    material:'Raso stampato, suola in cuoio', fit:'Calzata precisa, cinturino posteriore regolabile con fibbia.',
    sizes:['36','37','38','39','40']},
  {id:'orologio-oro', name:'Orologio Classico', category:'accessori', color:'oro', colorHex:'#c9a24b', price:189, img:'images/orologio_oro.jpg',
    desc:'Orologio con cassa ovale, quadrante champagne e cinturino a maglia in metallo dorato.',
    material:'Acciaio placcato oro', fit:'Cinturino regolabile con maglie removibili, cassa piccola ed elegante.',
    sizes:['Taglia unica']},
  {id:'bracciale-nodo-oro', name:'Bracciale Rigido Nodo', category:'accessori', color:'oro', colorHex:'#c9a24b', price:55, img:'images/bracciale_nodo_oro.jpg',
    desc:'Bracciale rigido con dettaglio a nodo centrale, apertura a scatto.',
    material:'Metallo placcato oro', fit:'Rigido, apertura regolabile, adatto a polsi sottili e medi.',
    sizes:['Taglia unica']},
  {id:'occhiali-tartarugati', name:'Occhiali da Sole Havana', category:'accessori', color:'tartaruga', colorHex:'#8a5a20', price:89, img:'images/occhiali_tartarugati.jpg',
    desc:'Occhiali da sole squadrati stile aviator, montatura tartarugata e lenti verdi.',
    material:'Acetato, lenti con protezione UV400', fit:'Montatura importante, adatta a chi ama uno stile deciso.',
    sizes:['Taglia unica']},
  {id:'borsa-bowling-nera', name:'Borsa Bowling Borchiata', category:'accessori', color:'nero', colorHex:'#12151c', price:195, img:'images/borsa_bowling_nera.jpg',
    desc:'Borsa a mano stile bowling in pelle vissuta, borchie e nappine, doppio manico.',
    material:'Pelle vissuta, ferramenta anticata', fit:'Capienza media, si porta a mano o al gomito.',
    sizes:['Taglia unica']},
  {id:'borsa-intrecciata-bordeaux', name:'Borsa Intrecciata Bordeaux', category:'accessori', color:'bordeaux', colorHex:'#5c1f2e', price:175, img:'images/borsa_intrecciata_bordeaux.jpg',
    desc:'Borsa a spalla intrecciata con zip, manico corto e moschettoni dorati.',
    material:'Pelle intrecciata (stile woven)', fit:'Si porta a spalla, capienza piccola-media, ideale per la sera.',
    sizes:['Taglia unica']},
  {id:'mocassino-borgogna', name:'Mocassino Borgogna', category:'scarpe', color:'bordeaux', colorHex:'#5c1f2e', price:119, img:'images/mocassino_borgogna.jpg',
    desc:'Mocassino in pelle verniciata con morsetto dorato sul collo del piede.',
    material:'Pelle verniciata, suola in cuoio', fit:'Vestibilità regolare, si consiglia la propria taglia abituale.',
    sizes:['36','37','38','39','40']},
  {id:'portachiavi-charm', name:'Portachiavi Charm', category:'accessori', color:'multicolore', colorHex:'#7a2e2e', price:19, img:'images/portachiavi_charm.jpg',
    desc:'Portachiavi con charm a ciliegia, stella e boccia da biliardo numero 8, anello apribile.',
    material:'Metallo placcato oro, resina', fit:'Si aggancia a borse e chiavi, lunghezza circa 12 cm.',
    sizes:['Taglia unica']},
  {id:'stivaletto-cuoio', name:'Stivaletto Tacco Cuoio', category:'scarpe', color:'cuoio', colorHex:'#6b4226', price:149, img:'images/stivaletto_tacco_cuoio.jpg',
    desc:'Stivaletto in pelle con dettaglio a stampa cocco, cinturino con fibbia dorata e tacco largo.',
    material:'Pelle liscia e stampa cocco, tacco rivestito', fit:'Vestibilità regolare, tacco stabile 9 cm, comodo per tutto il giorno.',
    sizes:['36','37','38','39','40']},
  {id:'orecchini-fiore-rosso', name:'Orecchini Fiore Rosso', category:'accessori', color:'rosso', colorHex:'#7a2e2e', price:35, img:'images/orecchini_fiore_rosso.jpg',
    desc:'Orecchini a bottone a forma di fiore smaltato, con centro dorato.',
    material:'Metallo placcato oro, smalto', fit:'Leggeri, chiusura a farfalla, diametro circa 2,5 cm.',
    sizes:['Taglia unica']},
  {id:'tote-suede-tortora', name:'Tote Bag Piccola', category:'accessori', color:'tortora', colorHex:'#8a8270', price:155, img:'images/tote_suede_tortora.jpg',
    desc:'Tote bag piccola in suede con doppio manico e tracolla removibile, chiusura con coulisse.',
    material:'Camoscio (suede)', fit:'Capienza piccola-media, forma morbida che si adatta al contenuto.',
    sizes:['Taglia unica']},
  {id:'stivaletto-beige', name:'Stivaletto Platform Beige', category:'scarpe', color:'beige', colorHex:'#a99677', price:129, img:'images/stivaletto_beige_scamosciato.jpg',
    desc:'Stivaletto in camoscio con arricciatura sulla caviglia, suola platform e tacco largo.',
    material:'Camoscio, suola in gomma scolpita', fit:'Vestibilità comoda, tacco stabile 9 cm con plateau, buono anche per camminare a lungo.',
    sizes:['36','37','38','39','40']},

  {id:'top-halter-bianco', name:'Top Halter Incrociato', category:'top', color:'bianco', colorHex:'#f6f2e8', price:39, img:'images/top_halter_bianco.jpg',
    desc:'Top corto con scollo halter incrociato sul davanti e schiena scoperta, tessuto morbido drappeggiato.',
    material:'Jersey elasticizzato', fit:'Vestibilità aderente, si allaccia dietro al collo. Fascia il punto vita.',
    sizes:['XS','S','M','L']},
  {id:'top-spalle-nero', name:'Top Spalle Scoperte', category:'top', color:'nero', colorHex:'#12151c', price:45, img:'images/top_spalle_scoperte_nero.jpg',
    desc:'Top con scollo a bandeau arricciato e maniche a fascia sulle spalle, silhouette morbida.',
    material:'Jersey viscosa', fit:'Vestibilità aderente, arricciature sul busto. Consigliata la propria taglia.',
    sizes:['XS','S','M','L']},
  {id:'top-bandeau-bianco', name:'Top Bandeau', category:'top', color:'bianco', colorHex:'#f6f2e8', price:25, img:'images/top_bandeau_bianco.jpg',
    desc:'Top fascia senza spalline con arricciatura sul fondo, base per look estivi o da abbinare a blazer.',
    material:'Jersey di cotone elasticizzato', fit:'Vestibilità aderente, senza sostegno strutturato. Prendere la propria taglia.',
    sizes:['XS','S','M','L']},
  {id:'tshirt-bordeaux', name:'T-Shirt Basic Bordeaux', category:'top', color:'bordeaux', colorHex:'#7a2e2e', price:29, img:'images/tshirt_bordeaux.jpg',
    desc:'T-shirt girocollo a manica corta in cotone, taglio slim e lunghezza regular.',
    material:'100% cotone', fit:'Vestibilità aderente, taglia normalmente sulla propria taglia.',
    sizes:['XS','S','M','L','XL']},
  {id:'tshirt-anello-nera', name:'T-Shirt con Anello', category:'top', color:'nero', colorHex:'#12151c', price:65, img:'images/tshirt_anello_nera.jpg', badge:'Nuovo',
    desc:'T-shirt oversize in cotone con arricciatura e anello metallico sul fondo, si può portare annodata o libera.',
    material:'Cotone pesante', fit:'Vestibilità oversize sul busto, si stringe in vita con l\'anello. Taglia unica di fatto ampia.',
    sizes:['S/M','M/L']},
  {id:'top-giglio-rosa', name:'Top Fiore Asimmetrico', category:'top', color:'rosa', colorHex:'#d46a8a', price:42, img:'images/top_giglio_rosa.jpg',
    desc:'Top corto con scollo asimmetrico arricciato e stampa floreale a grande fiore, un solo lato scoperto.',
    material:'Jersey elasticizzato', fit:'Vestibilità aderente, scollo obliquo che lascia una spalla scoperta.',
    sizes:['XS','S','M','L']},

  {id:'gonna-raso-verde', name:'Gonna Lunga in Raso', category:'gonne', color:'verde', colorHex:'#6b6b2a', price:145, img:'images/gonna_raso_verde.jpg', badge:'Nuovo',
    desc:'Gonna lunga in raso lucido con cintura in tessuto e apertura laterale a drappeggio.',
    material:'Raso di viscosa', fit:'Vestibilità fluida, taglio a portafoglio regolabile in vita con la cintura.',
    sizes:['38','40','42','44']},
  {id:'gonna-mini-marrone', name:'Mini Gonna a Portafoglio', category:'gonne', color:'marrone', colorHex:'#4a3226', price:69, img:'images/gonna_mini_marrone_anello.jpg',
    desc:'Mini gonna a portafoglio con arricciatura centrale e fibbia ad anello dorata.',
    material:'Crêpe elasticizzato', fit:'Vestibilità regolare, apertura laterale, vita elasticizzata sul retro.',
    sizes:['XS','S','M','L']},
  {id:'gonna-ecopelle-nera', name:'Mini Gonna in Ecopelle', category:'gonne', color:'nero', colorHex:'#12151c', price:59, img:'images/gonna_mini_ecopelle_nera.jpg',
    desc:'Mini gonna in ecopelle con arricciature laterali e spacco frontale.',
    material:'Ecopelle', fit:'Vestibilità aderente e fasciante, disponibile anche in taglie comode.',
    sizes:['XS','S','M','L','XL']},
  {id:'gonna-lunga-nera', name:'Gonna Lunga con Cintura', category:'gonne', color:'nero', colorHex:'#12151c', price:79, img:'images/gonna_lunga_nera_cintura.jpg',
    desc:'Gonna lunga a matita con spacco laterale, arricciatura sul fianco e cintura in vita inclusa.',
    material:'Tessuto crêpe', fit:'Vestibilità aderente, taglio a goccia. Look ufficio o serale a seconda degli abbinamenti.',
    sizes:['38','40','42','44']},
  {id:'gonna-drappeggiata-nera', name:'Mini Gonna Drappeggiata', category:'gonne', color:'nero', colorHex:'#12151c', price:75, img:'images/gonna_drappeggiata_nera.jpg',
    desc:'Mini gonna arricciata con lungo strascico laterale drappeggiato, effetto lucido.',
    material:'Jersey lucido elasticizzato', fit:'Vestibilità aderente, lo strascico si può portare libero o annodato.',
    sizes:['XS','S','M','L']},

  {id:'pantalone-cammello', name:'Pantalone Ampio Cammello', category:'pantaloni', color:'cammello', colorHex:'#c9a06a', price:135, img:'images/pantalone_cammello_ampio.jpg',
    desc:'Pantalone a gamba ampia con doppia pince, vita alta e tessuto fluido in misto lana.',
    material:'Popeline di lana e seta', fit:'Vestibilità comoda, gamba dritta e ampia, cade morbido. Prendere la propria taglia.',
    sizes:['38','40','42','44','46']},
  {id:'pantalone-gessato', name:'Pantalone Gessato Fascia', category:'pantaloni', color:'grigio', colorHex:'#5a5a5a', price:99, img:'images/pantalone_gessato_grigio.jpg',
    desc:'Pantalone gessato a gamba larga con fascia in vita a fiocco, chiusura con laccetto.',
    material:'Tessuto gessato leggero', fit:'Vestibilità ampia, vita alta regolabile grazie alla fascia annodata.',
    sizes:['38','40','42','44']},
  {id:'pantalone-rosa', name:'Pantalone Rosa a Palazzo', category:'pantaloni', color:'rosa', colorHex:'#f0c8d0', price:89, img:'images/pantalone_rosa_palazzo.jpg',
    desc:'Pantalone a palazzo con doppia pince, vita alta e gamba svasata.',
    material:'Tessuto crêpe', fit:'Vestibilità ampia sulla gamba, fascia bene in vita. Prendere la propria taglia.',
    sizes:['38','40','42','44']},

  {id:'vestito-fiori-fucsia', name:'Mini Abito Fiori Fucsia', category:'vestiti', color:'bianco', colorHex:'#f6f2e8', price:55, img:'images/vestito_fiori_bianco_fucsia.jpg',
    desc:'Mini abito senza spalline con stampa a grandi fiori fucsia, corpetto arricciato e legaccio dietro al collo.',
    material:'Jersey elasticizzato', fit:'Vestibilità aderente, corpetto drappeggiato che fascia il punto vita.',
    sizes:['XS','S','M','L']},
  {id:'vestito-fiori-azzurro', name:'Mini Abito Fiori Azzurro', category:'vestiti', color:'blu', colorHex:'#5b7fa6', price:65, img:'images/vestito_fiori_azzurro.jpg',
    desc:'Mini abito a fiori con corpetto a balconcino, bottoni gioiello e maniche a palloncino arricciate.',
    material:'Popeline di cotone', fit:'Vestibilità aderente sul busto, gonna leggermente svasata. Fedele alla taglia.',
    sizes:['XS','S','M','L']},
  {id:'vestito-leopardato', name:'Abito Lungo Leopardato', category:'vestiti', color:'leopardo', colorHex:'#8a6a3a', price:119, img:'images/vestito_leopardato_lungo.jpg', badge:'Nuovo',
    desc:'Abito lungo aderente stampa leopardo con scollo halter e lacci dietro al collo, spacco sul fondo.',
    material:'Jersey elasticizzato', fit:'Vestibilità aderente e fasciante su tutta la silhouette, fondo a sirena.',
    sizes:['XS','S','M','L']},
];


/* ---------------- DATA: outfit ---------------- */
const outfits = [
  {name:'Sera in città', occasion:'Cena o evento', items:['vestito-bordeaux','tacchi-spillo','borsetta-nera','orecchini-oro']},
  {name:'Weekend casual', occasion:'Tempo libero', items:['jeans-stelle','sneaker-bianche','bracciale-argento']},
  {name:'Ufficio impeccabile', occasion:'Lavoro', items:['pantalone-nero','tacchi-slingback','cintura-bordeaux','orecchini-oro']},
  {name:"Pomeriggio d'estate", occasion:'Giorno', items:['vestito-bianco','sneaker-bianche','bracciale-argento']},
  {name:'Cena romantica', occasion:'Serata', items:['vestito-blu','tacchi-slingback','orecchini-oro']},
  {name:'Ufficio in cognac', occasion:'Lavoro', items:['pantalone-panna','mocassino-borgogna','borsa-intrecciata-marrone','orologio-oro']},
  {name:'Sera leopardata', occasion:'Serata', items:['vestito-bordeaux','tacchi-leopardati','borsa-secchiello-nera','orecchini-fiore-rosso']},
  {name:'Weekend en plein air', occasion:'Tempo libero', items:['jeans-stelle','stivaletto-beige','tote-suede-tortora','bracciale-nodo-oro']},
  {name:'Serata in raso', occasion:'Cena o evento', items:['gonna-raso-verde','top-bandeau-bianco','tacchi-spillo','bracciale-fiori-oro']},
  {name:'Ufficio in gessato', occasion:'Lavoro', items:['pantalone-gessato','top-spalle-nero','mocassino-borgogna','orologio-oro']},
  {name:'Sera anni 2000', occasion:'Serata', items:['gonna-drappeggiata-nera','top-halter-bianco','tacchi-slingback','occhiali-neri-ovali']},
];

/* ---------------- DATA: guida taglie ---------------- */
const sizeGuides = {
  vestiti: {label:'Vestiti', head:['Taglia','IT','Busto (cm)','Vita (cm)','Fianchi (cm)'],
    rows:[['XS','38-40','82-85','62-65','88-91'],['S','40-42','86-89','66-69','92-95'],['M','42-44','90-93','70-73','96-99'],['L','44-46','94-97','74-77','100-103']]},
  top: {label:'Top', head:['Taglia','IT','Busto (cm)'],
    rows:[['XS','38-40','82-85'],['S','40-42','86-89'],['M','42-44','90-93'],['L','44-46','94-97']]},
  gonne: {label:'Gonne', head:['Taglia','IT','Vita (cm)','Fianchi (cm)'],
    rows:[['38','38','64-67','90-93'],['40','40','68-71','94-97'],['42','42','72-75','98-101'],['44','44','76-79','102-105']]},
  pantaloni: {label:'Pantaloni', head:['Taglia','Vita (cm)','Fianchi (cm)'],
    rows:[['38','64-67','90-93'],['40','68-71','94-97'],['42','72-75','98-101'],['44','76-79','102-105'],['46','80-83','106-109']]},
  scarpe: {label:'Scarpe', head:['Taglia EU','Lunghezza piede (cm)'],
    rows:[['36','22.5'],['37','23.2'],['38','23.8'],['39','24.5'],['40','25.2'],['41','25.9']]},
  accessori: {label:'Cinture', head:['Taglia (cm)','Vita (cm)'],
    rows:[['80','72-76'],['85','77-81'],['90','82-86'],['95','87-91']]},
};

/* ---------------- DATA: recensioni ---------------- */
const reviews = [
  {q:'Entrata per un regalo, uscita con tre pezzi per me. Il personale sa davvero consigliare.', a:'Laura M.'},
  {q:'La qualità dei materiali si sente al tatto. Un negozio che non ha fretta di venderti qualcosa.', a:'Davide R.'},
  {q:'Ho scritto su WhatsApp per chiedere la disponibilità di un vestito: risposta in giornata.', a:'Chiara P.'},
];

/* ---------------- PROMO -20% ---------------- */
// Per la demo la promo è sempre "attiva questa settimana": niente data fissa,
// così il sito mostra sempre uno sconto in corso, a prescindere da quando lo si presenta.
const PROMO_ACTIVE = true;
const PROMO_PERCENT = 20;
const promoIsLive = PROMO_ACTIVE;
function discountedPrice(base){ return Math.round(base * (1 - PROMO_PERCENT/100)); }
function priceHTML(base){
  if(!promoIsLive) return `<span class="p-price">€${base}</span>`;
  return `<span class="p-price"><span class="price-old">€${base}</span> <span class="price-new">€${discountedPrice(base)}</span></span>`;
}
function priceForCart(base){ return promoIsLive ? discountedPrice(base) : base; }
const topbarPromoEl = document.getElementById('topbarPromo');
const promoBannerEl = document.getElementById('promoBanner');
if(promoIsLive){
  if(topbarPromoEl) topbarPromoEl.textContent = `🎉 -${PROMO_PERCENT}% su tutta la collezione — valido questa settimana`;
  if(promoBannerEl) promoBannerEl.innerHTML = `Sconto del <b>-${PROMO_PERCENT}%</b> su tutta la collezione, valido questa settimana — prezzi già aggiornati su ogni prodotto`;
} else {
  if(topbarPromoEl) topbarPromoEl.remove();
  if(promoBannerEl) promoBannerEl.remove();
}

/* ---------------- RENDER: rail tessuti (solo home) ---------------- */
const railTrack = document.getElementById('railTrack');
if(railTrack){
  const railData = ['Pelle liscia','Raso stretch','Denim','Popeline di cotone','Vernice','Lana e viscosa'];
  const railColors = ['#7a2e2e','#b08d57','#5c7a94','#e8ddc8','#12151c','#c9a24b'];
  [...railData, ...railData].forEach((t,i)=>{
    const el = document.createElement('div');
    el.className = 'swatch';
    el.innerHTML = `<span class="swatch-dot" style="background:${railColors[i % 6]}"></span>${t}`;
    railTrack.appendChild(el);
  });
}

/* ---------------- PRODUCT CARD (riutilizzata da collezione e altrove) ---------------- */
function productCardHTML(p){
  return `
    <div class="product-card" data-id="${p.id}" data-color="${p.color}">
      <div class="p-image">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="p-badge">${p.badge}</span>` : ''}
        <button class="wish-btn" aria-label="Preferiti"><svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.4 2.4 5 6 5c2 0 3.5 1.1 4.3 2.6C11.1 6.1 12.6 5 14.6 5c3.6 0 5.5 3.4 4 6.7C19.5 16.4 12 21 12 21z"/></svg></button>
      </div>
      <div class="p-info">
        <span class="p-cat">${p.category} &middot; ${p.color}</span>
        <div class="p-name">${p.name}</div>
        <div class="p-row"><span class="p-price-wrap">${priceHTML(p.price)}</span><span class="p-view">Vedi dettagli</span></div>
      </div>
    </div>`;
}

/* ---------------- RENDER: accordion categorie (solo collezione.html) ---------------- */
const catAccordion = document.getElementById('catAccordion');
if(catAccordion){
  const categories = [{v:'vestiti', l:'Vestiti'},{v:'top', l:'Top'},{v:'gonne', l:'Gonne'},{v:'pantaloni', l:'Pantaloni'},{v:'scarpe', l:'Scarpe'},{v:'accessori', l:'Accessori'}];
  categories.forEach(cat=>{
    const items = products.filter(p=> p.category === cat.v);
    if(items.length === 0) return;
    const colorList = [];
    items.forEach(p=>{ if(!colorList.find(c=>c.v===p.color)) colorList.push({v:p.color, hex:p.colorHex}); });

    const tile = document.createElement('div');
    tile.className = 'cat-tile';
    tile.dataset.cat = cat.v;
    tile.innerHTML = `
      <div class="cat-head">
        <img class="cat-cover" src="${items[0].img}" alt="${cat.l}" loading="lazy">
        <div class="cat-head-text">
          <span class="cat-name">${cat.l}</span>
          <span class="cat-count">${items.length} pezzi</span>
        </div>
        <span class="cat-chevron">+</span>
      </div>
      <div class="cat-body">
        <div class="cat-body-inner">
          <div class="cat-color-filters">
            <button class="color-dot active" data-color="tutti" title="Tutti i colori" style="background:conic-gradient(from 0deg, #7a2e2e, #b08d57, #1c2b45, #12151c, #f6f2e8, #7a2e2e);"></button>
            ${colorList.map(c=>`<button class="color-dot" data-color="${c.v}" title="${c.v.charAt(0).toUpperCase()+c.v.slice(1)}" style="background:${c.hex};${(c.v==='bianco'||c.v==='panna')?'border:2px solid var(--line-dark);':''}"></button>`).join('')}
          </div>
          <div class="product-grid">${items.map(productCardHTML).join('')}</div>
        </div>
      </div>`;
    catAccordion.appendChild(tile);
  });

  catAccordion.addEventListener('click', e=>{
    const head = e.target.closest('.cat-head');
    if(head){ head.closest('.cat-tile').classList.toggle('open'); return; }
    const dot = e.target.closest('.color-dot');
    if(dot){
      const tile = dot.closest('.cat-tile');
      tile.querySelectorAll('.color-dot').forEach(d=> d.classList.remove('active'));
      dot.classList.add('active');
      const color = dot.dataset.color;
      tile.querySelectorAll('.product-card').forEach(card=>{
        card.hidden = !(color === 'tutti' || card.dataset.color === color);
      });
      return;
    }
    const wish = e.target.closest('.wish-btn');
    if(wish){ e.stopPropagation(); wish.classList.toggle('active'); if(wish.classList.contains('active')) showToast('Aggiunto ai preferiti'); return; }
    const card = e.target.closest('.product-card');
    if(card) openModal(card.dataset.id);
  });
}

/* ---------------- RENDER: outfit (solo outfit.html) ---------------- */
const outfitGrid = document.getElementById('outfitGrid');
if(outfitGrid){
  outfits.forEach(o=>{
    const items = o.items.map(id=> products.find(p=>p.id===id));
    const total = items.reduce((s,p)=> s + priceForCart(p.price), 0);
    const totalOriginal = items.reduce((s,p)=> s + p.price, 0);
    const card = document.createElement('div');
    card.className = 'outfit-card';
    card.innerHTML = `
      <div class="outfit-imgs">${items.map(p=>`<img src="${p.img}" alt="${p.name}" data-id="${p.id}" title="${p.name} — vedi dettagli">`).join('')}</div>
      <div class="outfit-occasion">${o.occasion}</div>
      <div class="outfit-name">${o.name}</div>
      <div class="outfit-items">${items.map(p=>p.name).join(' &middot; ')}</div>
      <div class="outfit-total">Totale look &middot; ${promoIsLive ? `<span class="price-old">€${totalOriginal.toFixed(0)}</span> <span class="price-new">€${total.toFixed(0)}</span>` : `€${total.toFixed(0)}`}</div>`;
    outfitGrid.appendChild(card);
  });
  outfitGrid.addEventListener('click', e=>{
    const img = e.target.closest('.outfit-imgs img');
    if(!img) return;
    openModal(img.dataset.id);
  });
}

/* ---------------- RENDER: guida taglie (solo collezione.html) ---------------- */
const guideTabsEl = document.getElementById('guideTabs');
const guideTablesEl = document.getElementById('guideTables');
if(guideTabsEl && guideTablesEl){
  Object.keys(sizeGuides).forEach((key,i)=>{
    const g = sizeGuides[key];
    const tab = document.createElement('button');
    tab.className = 'filter-btn' + (i===0 ? ' active' : '');
    tab.dataset.guide = key; tab.textContent = g.label;
    tab.style.color = 'var(--ivory)'; tab.style.borderColor = 'var(--line)';
    guideTabsEl.appendChild(tab);

    const table = document.createElement('table');
    table.className = 'guide-table' + (i===0 ? ' active' : '');
    table.dataset.guide = key;
    table.innerHTML = `<thead><tr>${g.head.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${g.rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>`;
    guideTablesEl.appendChild(table);
  });
  guideTabsEl.addEventListener('click', e=>{
    const t = e.target.closest('[data-guide]'); if(!t) return;
    guideTabsEl.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
    t.classList.add('active');
    guideTablesEl.querySelectorAll('.guide-table').forEach(tb=> tb.classList.toggle('active', tb.dataset.guide === t.dataset.guide));
  });
}

/* ---------------- PRODUCT MODAL (collezione.html e outfit.html) ---------------- */
const productModal = document.getElementById('productModal');
let modalProduct = null, modalSize = null;
function openModal(id){
  if(!productModal) return;
  const p = products.find(x=>x.id===id);
  if(!p) return;
  modalProduct = p; modalSize = null;
  document.getElementById('modalImg').src = p.img;
  document.getElementById('modalImg').alt = p.name;
  document.getElementById('modalCat').textContent = p.category + ' — ' + p.color;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalPrice').innerHTML = priceHTML(p.price);
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalMaterial').textContent = p.material;
  document.getElementById('modalFit').textContent = p.fit;
  document.getElementById('modalTags').innerHTML = `<span class="tag">${p.category}</span><span class="tag">${p.color}</span>`;
  const sizesEl = document.getElementById('modalSizes');
  sizesEl.innerHTML = '';
  p.sizes.forEach(s=>{
    const b = document.createElement('button');
    b.className = 'size-opt'; b.textContent = s; b.dataset.size = s;
    if(p.sizes.length === 1){ b.classList.add('selected'); modalSize = s; }
    sizesEl.appendChild(b);
  });
  productModal.classList.add('open'); document.getElementById('overlay').classList.add('open');
}
function closeModal(){
  if(!productModal) return;
  productModal.classList.remove('open');
  if(!document.getElementById('cartDrawer').classList.contains('open')) document.getElementById('overlay').classList.remove('open');
}
if(productModal){
  document.getElementById('modalSizes').addEventListener('click', e=>{
    const b = e.target.closest('.size-opt'); if(!b) return;
    document.querySelectorAll('.size-opt').forEach(x=>x.classList.remove('selected'));
    b.classList.add('selected'); modalSize = b.dataset.size;
  });
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalAdd').addEventListener('click', ()=>{
    if(!modalSize){ showToast('Scegli prima una taglia'); return; }
    addToCart({name:modalProduct.name, price:priceForCart(modalProduct.price), size:modalSize, color:modalProduct.color});
    showToast(`${modalProduct.name} (tg. ${modalSize}) aggiunto alla richiesta`);
    closeModal();
  });
}

/* ---------------- RENDER: recensioni (solo chi-siamo.html) ---------------- */
const slidesWrap = document.getElementById('reviewSlides');
const dotsWrap = document.getElementById('reviewDots');
if(slidesWrap && dotsWrap){
  reviews.forEach((r,i)=>{
    const s = document.createElement('div');
    s.className = 'review-slide' + (i===0 ? ' active' : '');
    s.innerHTML = `<div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><blockquote>&ldquo;${r.q}&rdquo;</blockquote><cite>${r.a}</cite>`;
    slidesWrap.appendChild(s);
    const d = document.createElement('div');
    d.className = 'rdot' + (i===0 ? ' active' : '');
    d.addEventListener('click', ()=> showReview(i));
    dotsWrap.appendChild(d);
  });
  let reviewIdx = 0;
  function showReview(i){
    document.querySelectorAll('.review-slide').forEach((s,j)=>s.classList.toggle('active', j===i));
    document.querySelectorAll('.rdot').forEach((d,j)=>d.classList.toggle('active', j===i));
    reviewIdx = i;
  }
  setInterval(()=> showReview((reviewIdx+1) % reviews.length), 5500);
}

/* ---------------- HEADER scroll (tutte le pagine) ---------------- */
const header = document.getElementById('siteHeader');
if(header) window.addEventListener('scroll', ()=> header.classList.toggle('scrolled', window.scrollY > 40));

/* ---------------- MOBILE NAV (tutte le pagine) ---------------- */
const mobileNav = document.getElementById('mobileNav');
if(mobileNav){
  document.getElementById('burgerBtn').addEventListener('click', ()=> mobileNav.classList.add('open'));
  document.getElementById('mobileClose').addEventListener('click', ()=> mobileNav.classList.remove('open'));
  mobileNav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> mobileNav.classList.remove('open')));
}

/* ---------------- CONTATTI: link whatsapp/telefono (tutte le pagine) ---------------- */
const SHOP_PHONE = '393665488260';
const SHOP_EMAIL = 'tommymene04@gmail.com';
const waFloat = document.getElementById('waFloat');
if(waFloat) waFloat.href = `https://wa.me/${SHOP_PHONE}`;
document.querySelectorAll('.wa-link').forEach(a=> a.href = `https://wa.me/${SHOP_PHONE}`);

/* ---------------- CART / RICHIESTA (tutte le pagine, persistente tra pagine) ---------------- */
let cart = [];
try { cart = JSON.parse(localStorage.getItem('adb_cart') || '[]'); } catch(e){ cart = []; }

const cartDrawer = document.getElementById('cartDrawer');
const overlay = document.getElementById('overlay');
const cartItemsEl = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');

function saveCart(){ try { localStorage.setItem('adb_cart', JSON.stringify(cart)); } catch(e){} }
function addToCart(item){ cart.push(item); saveCart(); renderCart(); }

if(cartDrawer){
  document.getElementById('cartOpen').addEventListener('click', ()=>{ cartDrawer.classList.add('open'); overlay.classList.add('open'); });
  document.getElementById('cartClose').addEventListener('click', closeCart);
  overlay.addEventListener('click', ()=>{ closeCart(); closeModal(); });
}
function closeCart(){
  if(!cartDrawer) return;
  cartDrawer.classList.remove('open');
  if(!productModal || !productModal.classList.contains('open')) overlay.classList.remove('open');
}

function renderCart(){
  if(!cartCountEl) return;
  cartCountEl.textContent = cart.length;
  if(!cartItemsEl) return;
  if(cart.length === 0){ cartItemsEl.innerHTML = '<p class="cart-empty">Non hai ancora scelto nessun pezzo.</p>'; return; }
  cartItemsEl.innerHTML = cart.map((it,i)=>`
    <div class="cart-item">
      <span>${it.name}<br><span style="opacity:.6; font-family:var(--mono); font-size:11px;">${it.color} &middot; taglia ${it.size}</span></span>
      <span style="display:flex; gap:12px; align-items:center;">€${it.price}<span class="rm" data-i="${i}">rimuovi</span></span>
    </div>`).join('');
  const cartTotal = cart.reduce((s,it)=> s + it.price, 0);
  cartItemsEl.insertAdjacentHTML('beforeend', `<div class="cart-total-row">Totale richiesta &middot; €${cartTotal}${promoIsLive ? ' <span class="promo-tag">-20% già applicato</span>' : ''}</div>`);
}
if(cartItemsEl){
  cartItemsEl.addEventListener('click', e=>{
    const rm = e.target.closest('.rm'); if(!rm) return;
    cart.splice(parseInt(rm.dataset.i), 1); saveCart(); renderCart();
  });
}
renderCart();

function buildMessage(){
  const nameField = document.getElementById('rName');
  const name = (nameField && nameField.value.trim()) || 'un cliente del sito';
  let lines = [`Ciao, sono ${name}. Vorrei sapere se questi pezzi sono disponibili:`, ''];
  cart.forEach(it=> lines.push(`- ${it.name} (${it.color}, taglia ${it.size}) — ${it.price}`));
  lines.push('', 'Fatemi sapere quando posso passare in negozio. Grazie!');
  return lines.join('\n');
}
const sendWaBtn = document.getElementById('sendWa');
if(sendWaBtn){
  sendWaBtn.addEventListener('click', e=>{
    e.preventDefault();
    if(cart.length === 0){ showToast('Aggiungi almeno un pezzo alla richiesta'); return; }
    window.open(`https://wa.me/${SHOP_PHONE}?text=${encodeURIComponent(buildMessage())}`, '_blank');
  });
}
const sendMailBtn = document.getElementById('sendMail');
if(sendMailBtn){
  sendMailBtn.addEventListener('click', e=>{
    e.preventDefault();
    if(cart.length === 0){ showToast('Aggiungi almeno un pezzo alla richiesta'); return; }
    const subject = 'Richiesta disponibilità — Angolo di Benni';
    window.location.href = `mailto:${SHOP_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage())}`;
  });
}

/* ---------------- TOAST (tutte le pagine) ---------------- */
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(()=> t.classList.remove('show'), 2400);
}

/* ---------------- NAV: evidenzia pagina corrente ---------------- */
(function highlightActiveNav(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main-nav a, .mobile-nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });
})();
