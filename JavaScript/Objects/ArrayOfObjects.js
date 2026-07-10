const classInfo = [
    // we can also create multiple object in array but it stored in index positions
    {
        name: "Ambika",
        age: 20,
        City: "Darbhanga"
    },
    {
        name: "Saurabh",
        age: 24,
        City: "Madhubani"
    },
    {
        name: "Ravi",
        age: 22,
        City: "Samastipur"
    }
];

console.log(classInfo)
console.log(classInfo[0]);
console.log(classInfo[1].City);
classInfo[1].gender = "male";
console.log(classInfo[1].gender);
// classInfo = {
//     name: "aavi",
//     age: 22, // this is not allow because object is constant
//     City: "Damastipur"
//}
// console.log(classInfo);
// classInfo[0] = {
//     name: "laksh",
//     age: 30, // this is allow in constant object because we can update and modified internaly value but not reassing reference value
//     City: "Punjab"
// };
// console.log(classInfo[0]);
// console.log(classInfo);