const randomizer = () => {
    function divideString(stringDivide,separator) {
     return stringDivide.split(separator);
 }

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

for (let i = 0; i < winnersAmount; i++){
    randomNumbers.push(Math.floor(Math.random() * count))
}

console.log(randomNumbers)

const winnerOutput = []
let textArea = "";
for(let i = 0; i < winnersAmount; i++){

    winnerOutput.push(namesProvided[randomNumbers[i]]);
    console.log(winnerOutput[i]);
    textArea += `${winnerOutput[i]} \n`;
    
}

document.getElementById("textAreaOutput").textContent=`${textArea.replace(/\n/g, '<br/>')}`;


}

//Theme toggler
const themeToggler