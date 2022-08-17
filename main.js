const namesProvided = [];
//Here we save the names placed in the website input

let count = 0;
//A variable to count the strings in provided by the user.

namesProvided.forEach(name => {
    return count++;
})
//we add 1 to the count for each name in the array.

const winnersAmount = 1;
//At least one winner should be picked up, this value will change according to the user choice.


const randomNumbers = []
//Here we'll store the 1 or 3 random numbers winners, each number will be linked to a name string.

for (let i = 0; i < winnersAmount; i++){
    let randomNumber = Math.floor(Math.random * count+1)}