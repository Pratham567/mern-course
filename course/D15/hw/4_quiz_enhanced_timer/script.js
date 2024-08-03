document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
    const refreshBtn = document.getElementById('refresh-btn');
    const resultDiv = document.getElementById('result');
    const timerDiv = document.getElementById('timer');
    const numQuestions = 3;
    const operations = ['+', '-', '*'];
    let timer;
    let startTime;

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
        startTimer(60); // Start the timer with 60 seconds
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
                questionDiv.style.border = '2px solid green'; // Add green border for correct answers
            } else {
                questionDiv.style.border = '2px solid red'; // Add red border for incorrect answers
            }
        });

        // Check for unanswered questions
        form.querySelectorAll('.question').forEach((questionDiv, index) => {
            const questionName = `q${index + 1}`;
            if (!formData.has(questionName)) {
                questionDiv.style.border = '2px solid red'; // Add red border for unanswered questions
            }
        });

        resultDiv.textContent = `You scored ${score} out of ${numQuestions}`;
        form.reset();
        clearInterval(timer); // Clear the timer

        // Calculate and display time taken
        const endTime = new Date();
        const timeTaken = Math.floor((endTime - startTime) / 1000);
        timerDiv.innerHTML = `<strong>Time taken: ${timeTaken} seconds</strong>`;
    }

    function startTimer(seconds) {
        let timeLeft = seconds;
        timerDiv.textContent = `Time left: ${timeLeft} seconds`;
        startTime = new Date();

        timer = setInterval(() => {
            timeLeft--;
            timerDiv.textContent = `Time left: ${timeLeft} seconds`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                alert('Time is up!');
                submitBtn.click(); // Automatically submit the form
            }
        }, 1000);
    }

    generateQuiz();
    submitBtn.addEventListener('click', checkAnswers);
    refreshBtn.addEventListener('click', generateQuiz);
});
