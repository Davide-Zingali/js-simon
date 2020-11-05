// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// alert

// array random
var arrayRandom = [];

// numeri Random
while (arrayRandom.length < 5) {
    var numeriRan = Math.floor(Math.random() * 50) + 1;

    if (arrayRandom.includes(numeriRan)) {
        console.log('numero doppio trovato');
    } else {
        arrayRandom.push(numeriRan);
    }
}

// output allert array random
var inputUtente = alert('Memorizza i 5 numeri per inserirli dopo: ' + arrayRandom);








// NOTE:
// - venerdì non avrete ex e potrete quindi volendo migliorare Simon, quindi a maggior ragione partite semplici di log e prompt, poi incrementate semmai;
// - sempre su ex Simon, aggiungere il controllo almeno per non far inserire più volte lo stesso num da utente e non generare numeri doppioni da indovinare;
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzae il programma.
// * Pensate bene ai tempi di esecuzione per non perdervi e quindi quando una cosa deve essere eseguita e quindi dove va messa logicamente.