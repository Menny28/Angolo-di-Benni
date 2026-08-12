# Angolo di Benni — sito demo

Sito vetrina dimostrativo per un negozio di abbigliamento fittizio ("Angolo di Benni"), creato come esempio di portfolio per proporre siti web ad attività locali. Il catalogo usa foto reali caricate dal cliente.

## Come usarlo su GitHub Pages

1. Crea un repository (es. `angolo-di-benni`) su GitHub.
2. Carica **sia** `index.html` **sia** la cartella `images/` nella root del repository (mantenendo la stessa struttura).
3. Vai su **Settings → Pages**, seleziona il branch principale e la cartella `/root`.
4. Il sito sarà pubblicato su `https://tuonome.github.io/angolo-di-benni/`.

## Struttura

- `index.html` — tutto il sito (HTML + CSS + JS in un unico file)
- `images/` — le 15 foto prodotto caricate

## Funzionalità incluse

- Header con effetto scroll e menu mobile a tutto schermo
- Rail di tessuti animata (elemento distintivo)
- **Catalogo con 15 prodotti reali** (vestiti, pantaloni, scarpe, accessori), filtrabile per **categoria** e per **colore**
- **Scheda prodotto** (si apre cliccando su un pezzo): descrizione, materiale, note di vestibilità, taglie disponibili, link alla guida taglie
- **Guida alle taglie** con tabelle separate per vestiti, pantaloni, scarpe e cinture
- **Sezione Outfit**: 5 abbinamenti già pronti costruiti con i prodotti del catalogo, con prezzo totale del look
- Pulsante "preferiti" su ogni prodotto
- **Contatti sempre visibili**: pulsanti flottanti WhatsApp e Chiamata in basso a destra su tutte le pagine
- Sezione Contatti con indirizzo, orari, telefono, email e mappa incorporata
- **"Carrello" come richiesta, non acquisto online**: il cliente sceglie i pezzi con la taglia, poi invia la richiesta via **WhatsApp** o **email** (si apre già con messaggio precompilato con i prodotti scelti). Il negozio risponde sulla disponibilità e fissa il ritiro/pagamento in negozio.
- Carosello recensioni automatico
- Form newsletter con messaggio di conferma
- Animazioni di comparsa allo scroll
- Design completamente responsive

## Contatti demo usati nel sito

- Telefono / WhatsApp: 366 548 8260
- Email: tommymene04@gmail.com
- Indirizzo: Via P. Sterzi 41, Nogara (VR)

## Nota sul flusso "carrello"

Il sito non gestisce pagamenti online: raccoglie solo i prodotti scelti (con taglia) e genera un messaggio pronto da inviare su WhatsApp o via email al negozio. Non serve alcun servizio esterno (Formspree, ecc.) perché sfrutta i link `wa.me` e `mailto:`, che aprono direttamente l'app di messaggistica o il client email del cliente.

## Prossimi passi possibili

- Aggiungere più foto per prodotto (es. dettaglio, indossato)
- Collegare un vero form con servizio email (Formspree/EmailJS) se si preferisce non passare dal client di posta del cliente
- Aggiungere una sezione "disponibilità in tempo reale" gestita dal negozio
- Valutare in futuro un vero sistema di pagamento online
