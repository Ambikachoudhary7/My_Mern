// const square = (n)=>{
//     return n*n;
// }
// console.log(square(4));

// shortest way to create arrow fuction 
// const square = (n) => (n*n);
// console.log(square(5));

let id = setInterval(() =>{
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("you will be exits y clearInterval");
}, 10000);