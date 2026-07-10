// function sum(a, b){
//     return a+b;
// }
// console.log(sum(3, 5));

// function sum(a, b){
//     console.log(a+b);
// }
// sum(3, 5);
// fuction maintaine ordered
// function info(name, age){
//     console.log(`${name} age is ${age}`);
// }
// info("Ambika", 78);
// info("Ambika");// it not give error it give output but in age argument it give undefinied

// return avg of three number
// function avg(a, b, c){
//     return (a+b+c)/3
// }
// console.log(avg(2 ,9 ,89));

// print  table

// function table(n){
//     for(let i=1; i<=10; i++){
//         console.log(n*i);
//     }
// }
// table(89);

// one to n sum

function sumOfN(n){
    let sum = 0;
    for(let i=0; i<=n; i++){
        sum+=i;
    }
    return sum;
}
console.log(sumOfN(45));