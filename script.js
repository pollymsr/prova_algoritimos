function checkAnswer(questionName, correctOptionId) {
    const questionOptions = document.getElementsByName(questionName);
    const answerContainer = questionOptions[0].closest('.question-container').querySelector('.answer-container');
    let selectedOption = null;


    questionOptions.forEach(option => {
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

function getCorrectAnswer(questionNumber) {
    const correctAnswers = {
        1: "C3, C4, C6",
        2: "2 3 4 5 6 7",
        3: "A matriz tem 8 linhas, 5 colunas e podem ser armazenados até 40 elementos;",
        4: "NÃO / E / OU",
        5: "nome1, sobrenome2, senha3",
        6: "I II III",
        7: "3 1 4 5 2",
        8: "Laços de repetição são utilizados quando é necessário efetuar a repetição de um trecho de programa um determinado número de vezes.",
        9: "2",
        10: "0"
    };

    return correctAnswers[questionNumber];
}

document.getElementById('check-all-answers').addEventListener('click', checkAllAnswers);


function checkAllAnswers() {
    for (let i = 1; i <= 10; i++) {
        const questionContainer = document.getElementById(`question-${i}`);
        const answerContainer = document.getElementById(`answer-${i}`);
        const correctAnswer = getCorrectAnswer(i);
        const selectedOption = questionContainer.querySelector(`input[name="question-${i}"]:checked`);

        if (selectedOption) {

            if (selectedOption.value === correctAnswer) {
                answerContainer.textContent = 'Resposta correta!';
                answerContainer.style.color = 'green';
            } else {
                answerContainer.textContent = 'Resposta errada.';
                answerContainer.style.color = 'red';
            }
        } else {
            answerContainer.textContent = 'Nenhuma resposta selecionada.';
            answerContainer.style.color = 'orange';
        }
    }
}