const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

//when we want to set the value within an input value, JS will receive a string value so we will have to write a funciton that converts the value of the string to a number. This is a helper function. 

//I will keep this example here but this is the longer way of completing this function
/* function cleanInputString(str) {
    const strArray = str.split('');
    const cleanStrArray = [];
    for (let i = 0; i < strArray.length; i++) {
        if (!["+", "-", " "].includes(strArray[i])) {cleanStrArray.push(strArray[i])};
      }
    } */

//Regex example: Regular expressions are objects or tools that let us match patterns in strings in order to recognize them an manipulate them accordingly.
function cleanInputString(str){
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
    
}

function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  }
