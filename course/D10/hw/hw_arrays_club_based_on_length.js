// // Arrays



// Create an array of array values by grouping all the words that have the same length.


const languages = ['html', 'css', 'javascript', 'react', 'node', 'postgres'];
console.log(languages.reduce((acc, word) => {
    if (!acc[word.length]) {
        acc[word.length] = [];
    }
    acc[word.length].push(word);
    return acc;
}, {}));
