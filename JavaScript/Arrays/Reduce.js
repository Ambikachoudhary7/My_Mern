let arr = [3, 6, 2, 8, 9, 2];
const ns = arr.reduce((res, el)=>{
    return res+el;
},0);
console.log(ns);