let country = ["Australia", "Germany", "United States of America"];
let count = function(country){
    for(let i=0; i<country.length; i++){
        for(let j = 0; j<=i.length; j++){
            count++;
        }
    }
    return count;
}
console.log(count)