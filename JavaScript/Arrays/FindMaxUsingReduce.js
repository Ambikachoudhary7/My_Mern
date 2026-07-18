// let arr = [3, 6, 2, 8, 9, 2];
// let max = arr.reduce((max, el)=>{
//     if(max<el) return el;
//     else return max;
// });
// console.log(max);

// problem find minimum using function

function getMin(arr){
    let min = arr.reduce((min, el)=>{
    if(min>el) return el;
        else return min;
    });
    return min;
}
let arr = [-45,3, 6, 2, 8, 9, 2];
console.log(getMin(arr));

// check if all numbeer is multiple of 10 or not using function
// let arr = [10, 20, 30, 40, 50];
// const mul = arr.every((el)=>{
//     return el%2==0;
// });
// console.log(mul);


