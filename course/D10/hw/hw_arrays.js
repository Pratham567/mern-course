// // Arrays


// 1. Create an array named languages and store 6 language names into it: 'html', 'css', 'javascript', 'react', 'node', 'postgres'.
// 2. console.log the length of the array.
// 3. console.log the 3rd element in the array.
// 4. delete the last element in the array.
// 5. add 'sql' at the end of the array.
// 6. remove the first element in the array.
// 7. join all the elements and return the result.
// 8. create a copy of the languages array.
// 9. sort the copy and store it in a variable sortedLanguages.
// 10. store the index of 'node' in the array.
// 11. store the index of 'react' in the array.
// 12. join all the elements of the array with a ' - ' and return the result.
// 13. return all the elements of the array in a string where each word is capitalized.


const languages = ['html', 'css', 'javascript', 'react', 'node', 'postgres'];
console.log(languages.length);
console.log(languages[2]);
languages.pop();
languages.push('sql');
languages.shift();
console.log(languages.join(' '));
const copyLanguages = [...languages];
const sortedLanguages = copyLanguages.sort();
const indexOfNode = languages.indexOf('node');
const indexOfReact = languages.indexOf('react');
console.log(languages.join(' - '));
console.log(languages.map(word => word.toUpperCase()));

// print languages array
// console.log(languages);
// print copyLanguages array
// console.log(copyLanguages);
// print sortedLanguages array
// console.log(sortedLanguages);
// print indexOfNode and indexOfReact
// console.log(indexOfNode);
// console.log(indexOfReact);
// print the result of languages.join(' - ')
// console.log(languages.join(' - '));
// print the result of languages.map(word => word.toUpperCase())
// console.log(languages.map(word => word.toUpperCase()));
