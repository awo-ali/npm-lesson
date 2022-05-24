import "./style.scss";

// Named import - confetti -> bringing the package into our project

import confetti from "canvas-confetti";

// readthe docs/options

const confettiClick = document.getElementById("button");

const dogImage = document.getElementById("dog-image");

const newInput = document.getElementById("URL-Input")
console.log(newInput);

console.log(dogImage);
console.log(confettiClick);

const clickConfetti = () => {
    
    confetti({
        particleCount: 150
      });;
}


/*you can add an object to the function -- const confettiOptions = 
{

}*/


confettiClick.addEventListener("click", clickConfetti)
