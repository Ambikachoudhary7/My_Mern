let dice = prompt("Enter Dice size: ");
const randoms = Math.floor(Math.random()*dice)+1;
let guess = prompt("Guess number: ");
while(true){
    if(guess==quit){
        console.log("User quit");
    }
    if(guess==randoms){
        console.log("congrats!!", randoms)
    }else if(guess)
}