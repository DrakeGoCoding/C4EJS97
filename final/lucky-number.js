const MAX = 10;
const MIN = 0;
const MAX_TRIES = 3;

var luckyNumber;
let inputNumber;
let countTries = 0;

let trial = document.getElementById('trial');
let inputDiv = document.getElementById('input-number');
let submitBtn = document.getElementById('submit-btn');
let alertDiv = document.getElementById('alert');

initialize();

inputDiv.onkeyup = () => {
    inputNumber = inputDiv.value;
    if (inputNumber.length === 0) {
        alertDiv.innerText = "Please enter a number!";
        alertDiv.style.color = 'red';
        alertDiv.style.display = 'block';
        submitBtn.disabled = true;
    }
    if (!isValidInput(inputNumber)) {
        alertDiv.innerText = "Please enter a valid number!";
        alertDiv.style.color = 'red';
        alertDiv.style.display = 'block';
        submitBtn.disabled = true;
    }
    else {
        alertDiv.style.display = 'none';
        submitBtn.disabled = false;
    }
}

submitBtn.onclick = () => {
    let inputString = inputDiv.value;
    inputNumber = Number(inputString);
    if (inputNumber === luckyNumber) {
        alert(`Jackpot!!!`);
        inputDiv.value = '';
        alertDiv.style.display = 'none';
        initialize();
        return;
    }
    countTries++;
    inputDiv.value = '';
    if (countTries >= MAX_TRIES) {
        alertDiv.style.display = 'none';
        alert(`You lose! Lucky number for today is ${luckyNumber}!`);
        initialize();
        return;
    }
    alertDiv.innerText = `Bad luck! You have ${MAX_TRIES - countTries} more chance(s)!`;
    alertDiv.style.color = 'red';
    alertDiv.style.display = 'block';

}

function isValidInput(input) {
    const VALID_REGEX = /^[0-9]+$/;
    return input.match(VALID_REGEX);
}

function initialize() {
    luckyNumber = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    console.log(luckyNumber);
    countTries = 0;
    isCorrect = false;
    trial.innerText = `Guess a natural number in [${MIN}, ${MAX}]`;
}