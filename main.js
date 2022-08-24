const randomizer = () => {

const divideString= (stringDivide,separator) => {
     return stringDivide.split(separator);
 };
// This function divide String with split.

const setRandomNumber = (Number, counter) =>{
  return Number.push(Math.floor(Math.random() * counter));  
};

let textInput = document.getElementById('textArea').value;

const namesProvided = divideString(textInput,"\n");
//Here we save the names placed in the website input.

console.log(namesProvided)

let count = namesProvided.length;
//A variable to count the strings in provided by the user.


/*namesProvided.forEach(name => {
    return count++;
})*/
//Changed for a single line with length.

console.log(count + ' Count with length');

let winnersAmount = 1;
//At least one winner should be picked up, this value will change according to the user choice.
const winnerOption1 = document.getElementById('oneWinner').checked;
const winnerOption2 = document.getElementById('TwoWinners').checked;
const winnerOption3 = document.getElementById('ThreeWinners').checked;

if(winnerOption1 === true){
    winnersAmount = 1;
}else if(winnerOption2 === true){
    winnersAmount = 2;
}else if(winnerOption3 === true){
    winnersAmount = 3;
}


const randomNumbers = []
//Here we'll store the 1 or 3 random numbers winners, each number will be linked to a name string.
let newRandomNumber;

for (let i = 0; i < winnersAmount; i++){
    setRandomNumber(randomNumbers, count);
    console.log(`randomNumbers: ${randomNumbers} --51 line`)
    actualRandomNumber = randomNumbers[i];

    for(let j = 0; j < randomNumbers.length-1; j++){
        console.log(`randomNumbers i: ${j} : ${randomNumbers[j]} newRandomNumber: ${actualRandomNumber}`);
        let sum;
        if(randomNumbers[j] == actualRandomNumber){
                console.log("Este numero existe");
                randomNumbers.pop();
                i--;
        }
    }
}


const winnerOutput = []
let textArea = "";
for(let i = 0; i < winnersAmount; i++){
    winnerOutput.push(namesProvided[randomNumbers[i]]);
    console.log(winnerOutput[i]);
}

//console.log(winnerOutput.toString().replace(/[ ]*,[ ]*|[ ]+/g, '<br>'));


let winnersPrint = document.querySelector('.winners-list');

winnersPrint.innerHTML = `<h3></h3>`;

winnerOutput.forEach(winner => {
    winnersPrint.innerHTML += `<h3>${winner}</h3>`
});

console.log(winnersPrint);

//document.getElementById("textAreaOutput").innerHTML=`${winnerOutput.toString().replace(/[]*,[]*|[]+/g, '')}`;

}

//Dark mode

const themToggler = document.querySelector(".theme-toggler");

themToggler.addEventListener('click', ()=>{
document.body.classList.toggle('dark-mode');

themToggler.querySelector('span:nth-child(1)').classList.toggle('active');
themToggler.querySelector('span:nth-child(1)').style.color = 'white';
themToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// Validations 

let twoWinnersCheck = document.getElementById('TwoWinners');
let threeWinnersCheck = document.getElementById('ThreeWinners');
let textAreaBox = document.getElementById('textArea');
let randomizerButton = document.getElementById('randomizer-button');
//console.log('This is my text ' + myText)

const separate = (str) => {
    console.log(`separate function str= ${str}`)
    line = ++str.match(/\n/g).length;
    console.log('This is line: ' + line)
    return line;
}


let textChecker = function() {
    let myText = document.getElementById('textArea').value;
    console.log('This is my text ' + myText);
    //console.log(typeof myText);
    separate(myText);
    if (line > 2 && line < 4) {
        twoWinnersCheck.disabled = false;
        randomizerButton.className = 'randomize';
        randomizerButton.disabled = false;
    } else if (line > 4) {
        twoWinnersCheck.disabled = false;
        threeWinnersCheck.disabled = false;
        randomizerButton.className = 'randomize';
        randomizerButton.disabled = false;
    }
    else if (line < 4 || line === null) {
        twoWinnersCheck.disabled = true;
        threeWinnersCheck.disabled = true;
        randomizerButton.className = 'disabled';
        randomizerButton.disabled = true;
    }
}

textAreaBox.addEventListener('input', textChecker);
