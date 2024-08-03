document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
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
        const formData = new FormData(form);

        formData.forEach((value, key) => {
            const questionIndex = parseInt(key.substring(1)) - 1;
            const questionDiv = form.children[questionIndex];
            const correctAnswer = eval(questionDiv.querySelector('p').textContent.split('What is ')[1].slice(0, -1));
            if (parseInt(value) === correctAnswer) {
                score++;
            }
        });

        resultDiv.textContent = `You scored ${score} out of ${numQuestions}`;
        form.reset();
    }

    generateQuiz();
    submitBtn.addEventListener('click', checkAnswers);
});