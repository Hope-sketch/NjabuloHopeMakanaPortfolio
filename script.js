const typingText = document.getElementById("typing-text");

const words = [

    "Aspiring Software Developer",

    ".NET Developer",

    "Backend Developer",

    "Problem Solver",

    "Lifelong Learner",

    "Always Building Something"

];

let wordIndex = 0;
let letterIndex = 0;

let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent = currentWord.substring(0, letterIndex);

        letterIndex++;

        if(letterIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typingText.textContent = currentWord.substring(0, letterIndex);

        letterIndex--;

        if(letterIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);

}

typeEffect();

