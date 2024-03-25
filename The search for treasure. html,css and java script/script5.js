const checkButton = document.getElementById('checkButton'); // Pobranie referencji do przycisku "Sprawdź"
const locationInput = document.getElementById('locationInput'); // Pobranie referencji do pola wprowadzania lokalizacji
const resultMessage = document.getElementById('resultMessage'); // Pobranie referencji do elementu wyświetlającego komunikat

// Zaktualizowana lokalizacja ukrytego skarbu
const hiddenTreasureLocation = "Cayman Islands";

// Tablica z małymi wskazówkami
const hints = [
    "This island is known for its turquoise waters and white beaches.",
    "Sea turtles can often be seen in this location.",
    "It is located in the Caribbean Sea, southwest of Cuba.",
    "The name of this place comes from the Spanish word for crocodiles."
];

checkButton.addEventListener('click', function() {
    const enteredLocation = locationInput.value.trim().toLowerCase(); // Konwertuj wpisaną lokalizację na małe litery
    
    if (enteredLocation === hiddenTreasureLocation.toLowerCase()) {
        resultMessage.textContent = "Congratulations! You have found the hidden treasure!";
        resultMessage.style.color = "green";

        window.location.href = "page6.html";
    } else {
        resultMessage.textContent = "This is not the correct location of the treasure. Try again.";
        resultMessage.style.color = "red";
        
        // Losowa wskazówka dla gracza
        const randomHint = hints[Math.floor(Math.random() * hints.length)];
        resultMessage.textContent += ` Here's a little tip: ${randomHint}`;
    }
});