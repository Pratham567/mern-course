const studentArr = ['Abbas Akbar', 'Abhinav sharma', 'Abhishek Bansal ', 'Abhishek Srivastava', 'Aditya Kumar Singh ', 'Ali Sher Khan', 'Ananya Lamba', 'Anjali Debnath', 'Ankit Saini', 'Anoushka gautam', 'Ansh Kumar Gupta', 'Anshika Bhatnagar ', 'Anuj Chauhan ', 'Anurag Saini', 'Arin Saxena', 'Ashish Ansh', 'Avni saxena', 'Divyanshi Vishnoi ', 'Inayat Ullah Khan', 'Kratika Agarwal', 'Manish Kumar', 'Manit rastogi ', 'Nikita Rathore', 'Prakhar Sharma ', 'Prakriti Gupta', 'Pranjal Agarwal', 'Prince Saxena ', 'Sakshi Chauhan', 'Samarth Rastogi', 'Samra Rubab ', 'Sandeep Kumar', 'Sarthak rastogi', 'Shashank johri', 'Shashwat Tewari', 'Shivam Prajapati', 'Shivi Agarwal', 'Shrey Singhal', 'Sohil Ansari', 'Tahir Ali', 'Tahzeeb Malik ', 'Tanu Saini', 'Vishal kumar', 'Pratham Gupta'];

const exclusionList = ['Pratham Gupta', 'Sohil Ansari', 'Anurag Saini', 'Prakriti Gupta', 'Shrey Singhal', 'Divyanshi Vishnoi', 'Vishal kumar', 'Anjali Debnath'];

const priorityList = [];

const typingSpeed = 100;

function getRandomStudentsWithPriorityWeightage(arr, exclusionList, priorityList, count) {
    if (!Array.isArray(priorityList)) {
        throw new TypeError("priorityList must be an array");
    }

    // Create a new array with priority students doubled
    let extendedArr = [...arr];
    priorityList.forEach(student => {
        if (arr.includes(student)) {
            extendedArr.push(student);
        }
    });

    // Filter out the exclusion list
    const availableStudents = extendedArr.filter(student => !exclusionList.includes(student));
    if (availableStudents.length < count) {
        return "Not enough students available for selection.";
    }

    // Select random students
    const selectedStudents = [];
    while (selectedStudents.length < count) {
        const randomIndex = Math.floor(Math.random() * availableStudents.length);
        const student = availableStudents[randomIndex];
        if (!selectedStudents.includes(student)) {
            selectedStudents.push(student);
        }
    }

    return selectedStudents;
}

function printCharacterByCharacterInElement(element, text, index, callback) {
    if (index < text.length) {
        element.innerText += text[index];
        setTimeout(() => printCharacterByCharacterInElement(element, text, index + 1, callback), typingSpeed);
    } else if (callback) {
        callback();
    }
}

document.getElementById('select-student-btn').addEventListener('click', function() {
    const button = this;
    button.disabled = true; // Disable the button

    const studentCountInput = document.getElementById('student-count');
    const studentCount = parseInt(studentCountInput.value, 10);

    if (isNaN(studentCount) || studentCount <= 0) {
        alert('Please enter a valid number of students.');
        button.disabled = false;
        return;
    }

    const selectedStudents = getRandomStudentsWithPriorityWeightage(studentArr, exclusionList, priorityList, studentCount);
    const studentNamesElement = document.getElementById('student-names');
    if (Array.isArray(selectedStudents)) {
        studentNamesElement.innerText = ''; // Clear previous text
        // Append the Selected students in a new string separated by new line
        const studentsNames = selectedStudents.join('\n');
        printCharacterByCharacterInElement(studentNamesElement, studentsNames, 0, () => {
            button.disabled = false; // Enable the button after printing
        });
    } else {
        studentNamesElement.innerText = selectedStudents; // Display error message
        button.disabled = false; // Enable the button if there's an error
    }
    studentNamesElement.style.display = 'block';
});

