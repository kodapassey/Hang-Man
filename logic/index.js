const wordInput = document.querySelector('#wordInput');
const submitWordBtn = document.querySelector('#submitWordBtn');
const inputFields = document.querySelector('#inputFields');
const guess = document.querySelector('#guess');
const key = document.querySelectorAll('.key');

import { changeImg } from "./image-logic.js";

let correct = 0;

let lives = 7;

guess.style.display = 'none';

// when button is clicked to submit word, run these 2 functions
submitWordBtn.addEventListener('click', function () {
    toggleInitialInputs();
    guessWord();
    changeImg()
});


// function that listens to all the keys on screen then loops takes value of click and sees if that letter is in the word
function guessWord() {
    // variable that takes input value of the word and makes it upper case
    const wordInputVal = wordInput.value.toUpperCase();

    // for loop that creates letter spaces depending on how many characters long the word is
    for (let i = 0; i < wordInputVal.length; i++) {
        const letter = document.createElement('h1');
        const letterDiv = document.querySelector('.letterDiv');

        letter.classList = 'letter';

        letterDiv.append(letter);
    }

    // for loop that loops over every key click, then takes which key was clicked and checks whether it's value is in the word to be guessed
    for (let i = 0; i < key.length; i++) {
        key[i].addEventListener('click', function () {

            // if you click a letter that is contained in the word
            if (wordInputVal.includes(key[i].textContent)) {
                console.log('correct!');

                const letter = document.querySelectorAll('.letter');

                // loops over word and if the index of j matches the button that was clicked, letter gets placed onto the board
                for (let j = 0; j < wordInputVal.length; j++) {
                    if (wordInputVal[j] == key[i].textContent) {
                        letter[j].textContent = key[i].textContent;
                    }
                }

                key[i].classList.add('correct');
                correct++
                if (correct == wordInputVal.length && lives >= 0) {
                    alert(`You Win! The word was: ${wordInput.value}`);
                    document.location.reload();
                }
                // if you don't click a letter that is correct
            } else {

                key[i].classList.add('incorrect');

                changeImg()

                lives--;
                if (lives == 1) {
                } else if (lives <= 0) {
                    alert(`You Lost. The word was: ${wordInput.value}`);
                    document.location.reload();
                }
            }
        });
    }
}

function toggleInitialInputs() {
    if (inputFields.style.display = 'block') {
        inputFields.style.display = 'none';
        guess.style.display = 'block'
    } else if (inputFields.style.display = 'none') {
        inputFields.style.display = 'block';
        guess.style.display = 'none'
    }
}