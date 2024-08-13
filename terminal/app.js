// CONSTANTS
const APP_VERSION_STRING = "1.1.18";
const CODE_INPUT_FIELD_ID = 'codeInputField';
const GET_STARTED_NODE_ID = 'getStartedNodeId';
const INPUT_COMMAND_STRIP_ID = 'inputCommandStrip';
const INITIAL_SECTION_ID = 'initialSection';


// FUNCTIONS
/**
 * set background color gradient
 */
function setBackgroundColor() {
    const angle = Math.round(Math.random() * 30) + 10;
    const hue = Math.round(Math.random() * 255);
    const colorA = `HSL(${hue}, 80%, 70%)`;
    const colorB = `HSL(${hue - 255 / 2}, 80%, 70%)`;
    document.body.style.background = `linear-gradient(${angle}deg, ${colorA}, ${colorB})`;
}

/**
 * Get the last child node of a parent node
 * @param {HTMLElement} parentNode
 * @returns {Node} last child node
 */
function getLastTextChildNode(parentNode) {
    return parentNode.childNodes[parentNode.childNodes.length - 1];
}

/**
 * Set the app version in the terminal header
 * @param {String} app_version_string
 * @returns {void}
 * @description Set the app version in the terminal header
*/
function setAppVersion(app_version_string) {
    var terminalHeadVersionChild = getLastTextChildNode(document.getElementById("terminalHead"));
    var terminalHeaderString = " cat ./about.txt(v" + app_version_string + ")";
    terminalHeadVersionChild.textContent = terminalHeaderString;
}

/**
 * Get the node content which can be typed
 * @param {String} nodeId
 * @returns {HTMLElement} node content
 */
function printResultCharByChar(node, charPrintWaitTime = 140, cmd) {

    cursor.className = 'cursor blink';
    node.parentNode.appendChild(cursor);

    let itrIndex = 0;
    const i = setInterval(() => {

        if (!node || itrIndex == (node._saved.length + 1)) {
            clearInterval(i);
            return;
        }

        node.textContent = node._saved.slice(0, itrIndex);

        if (itrIndex == node._saved.length) {
            cursor.className = 'cursor blink';
            appendInputStrip(node, 1000, cmd);

        } else {
            node.parentNode.appendChild(cursor);
            cursor.className = 'cursor';
        }
        itrIndex++;

    }, charPrintWaitTime);

    console.log("Debug: ending printResultCharByChar");
}

function printResultAndAppendinputCommandStrip(node, printWaitTime, cmd = '') {
    printResultCharByChar(node, printWaitTime, cmd);
}

/**
 * Fetches the iteratable content from the given NodeId
 * @param {String} nodeId
 * @returns returns a list of a node which is to be iterated.
 */
function getTypeableNodeContent(nodeId) {
    const p = document.getElementById(nodeId);
    const node = p.childNodes[p.childNodes.length - 1];
    node._saved = cleanupData(node.textContent);
    node.textContent = '';
    return node;
}

/**
 * Cleans up the data by removing leading and trailing spaces
 * @param {String} data
 * @returns {String} cleaned up data
 */
function cleanupData(data) {
    return data.trim();
}

/**
 * Appends the input strip to the terminal
 * @param {HTMLElement} node
 * @param {Number} delay
 * @param {String} cmd
 */
function appendInputStrip(node, delay, cmd) {
    setTimeout(() => {
        cursor.className = 'cursor blink';
        inputBlock.appendChild(cursor)
        node.parentNode.appendChild(inputCommandStrip);
        inputCommandStrip.style.display = "block";
        if (cmd.includes('random')) {
            inputBlock.value = 'random';
        }
        else {
            inputBlock.value = 'help';
        }
        highlightCodeInputField();
    }, delay);
}


/**
 * Highlights the inputCommandStrip area and moves the focus of the pointer to it.
 */
function highlightCodeInputField() {
    document.getElementById(CODE_INPUT_FIELD_ID).focus();
    document.getElementById(CODE_INPUT_FIELD_ID).select();
}


/**
 * Function to interpret the inputCommand and take action
 * @param {string} cmd 
 * @returns void
 */
function executeCommand(cmd = 'help') {

    cmd = cmd.toLowerCase();
    console.log("Debug: Received command for execution: ", cmd);

    // hide old section
    initialSection.style.display = 'none';
    //display newSection
    newSection.style.display = 'block';
    newSection.textContent = cmd;
    // clear all child nodes of newSection, it will be taken care later;
    clearAllChildNodes(newSection);

    // Given the command, get the result text
    let resultText = getResultText(cmd);

    newSection.textContent = `Command: ${cmd} \nResult: ${resultText}`;

    // TODO: Complete this function
    // Update the executed command para
    // Display the result text of the executed command
    // Take the related action based on the command, if needed (Eg: open a new tab, etc)
}

function getResultText(cmd) {
    // Add a switch case to return the result text based on the command
    switch (cmd) {
        case 'hi':
            return "Hi! How are you doing";
        case 'help':
            return "Help executed";
        case 'random':
            return "Random executed";
        default:
            return "Invalid command";
    }

}

/**
 * A function that clears all the child nodes of a node.
 * @param {*} inputNode 
 * @return void
 */
function clearAllChildNodes(inputNode) {
    var child = inputNode.lastElementChild;
    while (child) {
        inputNode.removeChild(child);
        child = inputNode.lastElementChild;
    }
}


// // Initial Setup (Initialization)
// Setup cursor
const cursor = document.createElement('span');
cursor.innerHTML = '_';
cursor.className = 'cursor blink';

let inputCommandStrip = document.getElementById(INPUT_COMMAND_STRIP_ID)
let inputBlock = document.getElementById(CODE_INPUT_FIELD_ID);
const getStartedNode = getTypeableNodeContent(GET_STARTED_NODE_ID);

// Definition of a newSection, to be used repeatedly
let newSection = document.createElement('section');
newSection.id = 'newSection'
newSection.className = 'container';
newSection.display = 'none';

// Get reference to the initial section
let initialSection = document.getElementById(INITIAL_SECTION_ID);
initialSection.parentNode.appendChild(newSection);

// Add an event listener to the input block
inputBlock.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        console.log("Debug: inputBlock.value: ", inputBlock.value);
        executeCommand(inputBlock.value);
    }
});


// // Main Call starts here (Runtime)
setBackgroundColor();
setAppVersion(APP_VERSION_STRING);
setTimeout(function () {
    printResultAndAppendinputCommandStrip(getStartedNode, 50);
}, 2000);

