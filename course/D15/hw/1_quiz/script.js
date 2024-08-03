document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const answers = {
        q1: '4',
        q2: '2',
        q3: '9'
    };

    let score = 0;
    const formData = new FormData(event.target);

    for (const [question, answer] of formData.entries()) {
        if (answers[question] === answer) {
            score++;
        }
    }
    console.log(score);
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You scored ${score} out of ${Object.keys(answers).length}`;
    event.target.reset();
});