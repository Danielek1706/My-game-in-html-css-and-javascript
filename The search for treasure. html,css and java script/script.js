// Pobierz referencję do przycisku po jego id
const StartButton = document.getElementById('start-btn');

// Dodaj nasłuchiwanie zdarzenia kliknięcia na przycisku
StartButton.addEventListener('click', function() {


    window.location.href = 'page2.html';  // Zmodyfikuj adres URL na odpowiednią ścieżkę do drugiej strony
});

