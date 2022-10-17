function game(){
const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    let computerGuess = Math.floor(Math.random()*100);
    let guess;
    let recursiveAsyncReadline = function () {
        readline.question('Guess the number (0-100): ' , number =>
        {
            guess = Number(number);
            if(guess <=100 && guess>= 0){
                if(guess==computerGuess){
                    console.log(`You guessed it!`);
                    return readline.close();
                }
                else if(guess<computerGuess){
                    console.log(`Too low!`);
                    recursiveAsyncReadline();
                }
                else if(guess>computerGuess){
                    console.log(`Too high!`);
                    recursiveAsyncReadline();
                }
            }
            else {
                console.log(`Invalid input! Try again...`);
                recursiveAsyncReadline();
            }
        });
    }
    recursiveAsyncReadline();
}	
game();