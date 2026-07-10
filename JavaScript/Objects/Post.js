// const post = {
//     username: "@Ambika",
//     content: "Coder",
//     likes: 3.5,
//     reposts: 30,
//     tag: ["@college", "@self"],
// };
// // console.log(post);
// // console.log(post["likes"]);
// // console.log(post.reposts);

// const student = {
//     1: "a",
//     2: "b",// number is converted into string in js automatically
//     null: "d",
//     true: "e" // null and true also behave like string not keyword
// };
// console.log(student)

const student = {
    name: "Ambika",
    age: 20,
    marks: 90,
    coll: "pit"
}
// console.log(student)
// student.name = "Ravi"; // update
// console.log(student)
// student.gender = "male"; // add new key in object
// console.log(student)
// delete student.gender; // delete key in object
// console.log(student) 
student.marks = [90, 89, 99]; // we can also store value in array form
console.log(student.marks);
console.log(student);
