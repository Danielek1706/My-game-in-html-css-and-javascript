const letters = document.querySelectorAll('.letter'); // Pobranie wszystkich bloków liter
const puzzle = document.getElementById('puzzle'); // Pobranie obszaru puzzli
const checkButton = document.getElementById('checkButton'); // Pobranie przycisku sprawdzania odpowiedzi

const correctOrder = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // Poprawna kolejność liter

// Dodanie obsługi zdarzeń dla przeciągania elementów
letters.forEach(letter => {
    letter.addEventListener('dragstart', dragStart); // Rozpoczęcie przeciągania
    letter.addEventListener('dragover', dragOver); // Poruszanie się nad obszarem docelowym
    letter.addEventListener('drop', dragDrop); // Upuszczenie elementu
});

// Funkcje obsługi zdarzeń przeciągania i upuszczania
function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id); // Ustawienie danych do przeciągania
}

function dragOver(e) {
    e.preventDefault(); // Zapobieganie domyślnemu zachowaniu
}

function dragDrop(e) {
    e.preventDefault(); // Zapobieganie domyślnemu zachowaniu
    const data = e.dataTransfer.getData('text'); // Pobranie przeciąganego elementu
    const draggedElement = document.getElementById(data); // Pobranie elementu do przeciągnięcia
    const droppedElement = e.target; // Pobranie elementu, nad którym jest upuszczany przeciągany element

    if (droppedElement.classList.contains('letter')) {
        puzzle.insertBefore(draggedElement, droppedElement); // Wstawienie przeciągniętego elementu przed upuszczonym elementem
    }
}
function openModal(){
    document.getElementById('modal').style.display = "block";
}

function closeModal(){
    document.getElementById('modal').style.display = "none";
}

// Dodanie obsługi kliknięcia przycisku sprawdzania odpowiedzi
checkButton.addEventListener('click', function () {
    const currentOrder = Array.from(document.querySelectorAll('.letter')).map(letter => letter.textContent); // Aktualna kolejność liter
    const modalMessage = document.getElementById('modal-message');
    const nextButton = document.getElementById('nextButton');
    const modal = document.getElementById('modal');

    if (arraysEqual(currentOrder, correctOrder)) { // Sprawdzenie, czy aktualna kolejność jest taka sama jak poprawna
        modalMessage.textContent = "Bravo! You have solved the puzzle.";
        nextButton.style.display = "block";
        document.getElementById('modal').style.display = "block";
    } else {
        modalMessage.textContent = "Unfortunately, incorrect order. Please try again!";
        nextButton.style.display = "none";
        document.getElementById('modal').style.display = "block";

    }
});

// Funkcja do porównywania dwóch tablic
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false; // Sprawdzenie, czy tablice mają taką samą długość
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false; // Sprawdzenie, czy każdy element jest taki sam w obu tablicach
    }
    return true; // Zwrócenie true, jeśli tablice są identyczne
}

function nextTask(){
    window.location.href = "page5.html";
}
