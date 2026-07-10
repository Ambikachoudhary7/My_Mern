const number = prompt("Enter max number: ");
const randoms = Math.floor(Math.random()*number)+1;
let guess = prompt("guess the number: ");
while(true){
    if(guess==quite){
        console.log("User quite");
        break;
    }
    if(guess==randoms){
        console.log("you are right! congrats!! random number was", random);
        break;
    }else if(guess>randoms){
       guess =  prompt(" hint: your guess is greater. please try again");
        break;
    }else{
        guess = prompt("hint: your guess is smaller. please try again");
    }
}