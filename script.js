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

const jellyfish = document.getElementById("jellyfish");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let jellyX = mouseX;
let jellyY = mouseY;

document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

});

function swim() {

    jellyX += (mouseX - jellyX) * 0.05;
    jellyY += (mouseY - jellyY) * 0.05;

    jellyfish.style.left = jellyX + "px";
    jellyfish.style.top = jellyY + "px";

    requestAnimationFrame(swim);

}

swim();

function createBubble(){

    const bubble = document.createElement("div");

    bubble.classList.add("bubble");

    bubble.style.left = (jellyX + 20) + "px";

    bubble.style.top = (jellyY + 40) + "px";

    document.body.appendChild(bubble);

    setTimeout(() => {

        bubble.remove();

    },2000);

    

}

setInterval(createBubble,250);