// let arr = [3, 6, 2, 8, 9, 2]
// const nearr = arr.map((el)=>{
//     return el*2;
// });
// console.log(nearr)

let students = [
    {
        name: "Ambika",
        marks: 95,
    },
    {
        name: "saurabh",
        marks: 94,
    },
    {
        name : "Arpita",
        marks: 90,
    }
];

const avg = students.map((el)=>{
    return el.marks/10;
});
console.log(avg);