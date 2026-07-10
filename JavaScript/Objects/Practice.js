// const student = [
//      {name: "Ambika",
//         age: 20, address: "Panchobh", college: "Pit",
//         marks:[90, 89, 78, 99],
//      },
//      {
//         name: "Saurabh", age: 34, address:"Darbhanga", college: "Pis",
//         marks: [98, 90, 87, 67],
//      },
//      {name: "Ravi", age: 23, address: "Samastipur", college: "Piet",
//         marks:[99, 89, 58, 99],
//      },
//      {
//         name: "Ankur", age: 33, address: "Patna", college: "Pas",
//         marks: [78, 100, 87, 67],
//      },
// ];
//console.log(student);
//console.log(student[0]);

// for each loop
// let arr = student.forEach((nums)=>{
//     console.log(nums);
// });
// console.log(arr);

// map using array-> it work all element of an arrays as a function and returnn value;

// let arr = [2, 4, 6, 7, 9, 6];
// let ans = arr.map((nums)=> {
//     return nums*2;
// });
// console.log(ans);

// reduce()-> it reduce  entire array into single value
 let arr = [2, 4, 6, 7, 9, 6];
 let ans = arr.reduce((acc, curr)=>{
    return acc+curr;
 }, 0);
 console.log(ans);
