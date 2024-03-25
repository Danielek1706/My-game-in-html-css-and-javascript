function openModal(){
    document.getElementById('modal').style.display = "block";
}

function closeModal(){
    document.getElementById('modal').style.display = "none";
}

function checkAnswer () {
    var answer = document.getElementById('answer').value.toLowerCase();
    var modalMessage = document.getElementById('modal-message');
    var nextButton = document.getElementById('nextButton');
    
    if (answer.toLowerCase() === "telescope" || answer.toLowerCase() === "Telescoper"){
        modalMessage.textContent = "Well done, my pirates! You may now proceed to your next task.";
        nextButton.style.display = "block";
        document.getElementById('modal').style.display = "block";
 
    } else {
        modalMessage.textContent = "Wrong answer, try again";
        nextButton.style.display = "none";
        document.getElementById('modal').style.display = "block";
    }
}

function nextTask(){
    window.location.href = "page4.html";
}

document.getElementById('arrowButton').addEventListener('click', function() {
    window.location.href = 'page2.html';
});