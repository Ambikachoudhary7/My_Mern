// let arr = [3, 5, 8, 9, 7];
// let sum = 0;
// arr.forEach((num)=>{ // for each using arrow function
//     sum+=num;
// });
// const avg = sum/arr.length;
// console.log(avg);

// arr.forEach(function(num){ // using function
//     sum+=num; 
// });
// const avg = sum/arr.length;
// console.log(avg);
// forEach-> it implement single element of an array, object like function and print it

// for each implement using object

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
arr.forEach(student=> {
    console.log(student.marks);
});