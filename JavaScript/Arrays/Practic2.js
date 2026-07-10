const fav = "Avatar";
let guess = prompt("Enter your favorite movie: ");
while(fav!=guess && guess != "quite"){
    console.log("Wrong");
    guess = prompt(" ");
}