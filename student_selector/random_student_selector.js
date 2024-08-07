const studentArr = ['Abbas Akbar', 'Abhinav sharma', 'Abhishek Bansal ', 'Abhishek Srivastava', 'Aditya Kumar Singh ', 'Ali Sher Khan', 'Ananya Lamba', 'Anjali Debnath', 'Ankit Saini', 'Anoushka gautam', 'Ansh Kumar Gupta', 'Anshika Bhatnagar ', 'Anuj Chauhan ', 'Anurag Saini', 'Arin Saxena', 'Ashish Ansh', 'Avni saxena', 'Divyanshi Vishnoi ', 'Inayat Ullah Khan', 'Kratika Agarwal', 'Manish Kumar', 'Manit rastogi ', 'Nikita Rathore', 'Prakhar Sharma ', 'Prakriti Gupta', 'Pranjal Agarwal', 'Prince Saxena ', 'Sakshi Chauhan', 'Samarth Rastogi', 'Samra Rubab ', 'Sandeep Kumar', 'Sarthak rastogi', 'Shashank johri', 'Shashwat Tewari', 'Shivam Prajapati', 'Shivi Agarwal', 'Shrey Singhal', 'Sohil Ansari', 'Tahir Ali', 'Tahzeeb Malik ', 'Tanu Saini', 'Vishal kumar', 'Pratham Gupta'];

const exclusionList = ['Pratham Gupta', 'Sohil Ansari', 'Anurag Saini'];

const priorityList = ['Prakriti Gupta'];


// function getRandomStudent(arr, exclusionList) {
//     const availableStudents = arr.filter(student => !exclusionList.includes(student));
//     if (availableStudents.length === 0) {
//         return "No students available for selection.";
//     }
//     const randomIndex = Math.floor(Math.random() * availableStudents.length);
//     return availableStudents[randomIndex];
// }

// function printCharacterByCharacter(text, index = 0) {
//     if (index < text.length) {
//         process.stdout.write(text[index]);
//         setTimeout(() => printCharacterByCharacter(text, index + 1), 500);
//     } else {
//         console.log(); // Move to the next line after printing all characters
//     }
// }

// function displayRandomStudent(arr, exclusionList) {
//     console.log("Selecting a random student...");

//     setTimeout(() => {
//         console.log("3...");
//         setTimeout(() => {
//             console.log("2...");
//             setTimeout(() => {
//                 console.log("1...");
//                 setTimeout(() => {
//                     const randomStudent = getRandomStudent(arr, exclusionList);
//                     console.log("Randomly selected student: ");
//                     printCharacterByCharacter(randomStudent);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }

function getRandomStudentWithPriorityWeightage(arr, exclusionList, priorityList) {
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
    if (availableStudents.length === 0) {
        return "No students available for selection.";
    }

    // Select a random student
    const randomIndex = Math.floor(Math.random() * availableStudents.length);
    return availableStudents[randomIndex];
}

function printCharacterByCharacterInElement(element, text, index, callback) {
    if (index < text.length) {
        element.innerText += text[index];
        setTimeout(() => printCharacterByCharacterInElement(element, text, index + 1, callback), 200);
    } else if (callback) {
        callback();
    }
}

document
    .getElementById("select-student-btn")
    .addEventListener("click", () => {

            const studentName = getRandomStudentWithPriorityWeightage(studentArr, exclusionList, priorityList);
            console.log(`Selected student: '${studentName}'`); // Debugging line
            const studentNameElement = document.getElementById("student-name");
            const selectStudentBtn = document.getElementById("select-student-btn");
            studentNameElement.style.display = 'inline-block'; // Make visible
            studentNameElement.innerText = ''; // Clear previous text
            selectStudentBtn.disabled = true; // Disable the button
            printCharacterByCharacterInElement(studentNameElement, studentName, 0, () => {
                selectStudentBtn.disabled = false; // Re-enable the button after printing
            });

    });




// Solution numbe 2:
// getRandomStudent from normal array -> probability equal for all
// getRandomStudent from normal array -> probability double for each student

// check in priorityList -> student1 -> return student1
// else
// check in priorityList -> student2 -> return student2
// else return student1

