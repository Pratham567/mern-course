document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
    const refreshBtn = document.getElementById('refresh-btn');
    const resultDiv = document.getElementById('result');
    const numQuestions = 3;
    const operations = ['+', '-', '*'];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function generateQuestion() {
        const num1 = getRandomInt(100);
        const num2 = getRandomInt(100);
        const operation = operations[getRandomInt(operations.length)];
        const question = `${num1} ${operation} ${num2}`;
        const answer = eval(question);
        return { question, answer };
    }

    function generateQuiz() {
        form.innerHTML = ''; // Clear existing questions
        for (let i = 1; i <= numQuestions; i++) {
            const { question, answer } = generateQuestion();
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.innerHTML = `
                <p>${i}. What is ${question}?</p>
                <label><input type="radio" name="q${i}" value="${answer - 1}" required> ${answer - 1}</label>
                <label><input type="radio" name="q${i}" value="${answer}" required> ${answer}</label>
                <label><input type="radio" name="q${i}" value="${answer + 1}" required> ${answer + 1}</label>
            `;
            form.appendChild(questionDiv);
        }
    }

    function checkAnswers(event) {
        event.preventDefault();
        let score = 0;
        let allAnswered = true;
        const formData = new FormData(form);
    
        form.querySelectorAll('.question').forEach((questionDiv, index) => {
            const questionName = `q${index + 1}`;
            const selectedAnswer = formData.get(questionName);
            const correctAnswer = eval(questionDiv.querySelector('p').textContent.split('What is ')[1].slice(0, -1));
            const warningMessage = questionDiv.querySelector('.warning-message');
    
            if (selectedAnswer === null) {
                questionDiv.style.border = '2px solid red'; // Add red border to unanswered question
                if (!warningMessage) {
                    const warning = document.createElement('span');
                    warning.classList.add('warning-message');
                    warning.style.color = 'red';
                    warning.textContent = ' Please select an answer.';
                    questionDiv.appendChild(warning);
                }
                allAnswered = false;
            } else {
                questionDiv.style.border = ''; // Reset border
                if (warningMessage) {
                    warningMessage.remove(); // Remove warning message if answer is selected
                }
                if (parseInt(selectedAnswer) === correctAnswer) {
                    score++;
                }
            }
        });
    
        if (allAnswered) {
            resultDiv.textContent = `You scored ${score} out of ${numQuestions}`;
        } else {
            resultDiv.textContent = 'Please answer all questions.';
        }
    }

    generateQuiz();
    submitBtn.addEventListener('click', checkAnswers);
    refreshBtn.addEventListener('click', generateQuiz);
});