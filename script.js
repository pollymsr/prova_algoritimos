// script.js
function checkAnswer(questionName, correctOptionId) {
    const options = document.getElementsByName(questionName);
    const answerContainer = options[0].closest('.question-container').querySelector('.answer-container');
    let selectedOption = null;

    options.forEach(option => {
        if (option.checked) {
            selectedOption = option;
        }
    });

    if (selectedOption) {
        answerContainer.style.display = 'block';
    } else {
        alert('Por favor, selecione uma opção.');
    }
}
