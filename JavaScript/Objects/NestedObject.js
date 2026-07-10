const classInfo = {
    // nested object is working like chain
    Ambika:{
        name: "Ambika",
        age: 20,
        City: "Darbhanga"
    },
    Saurabh:{
        name: "Saurabh",
        age: 24,
        City: "Madhubani"
    },
    Ravi:{
        name: "Ravi",
        age: 22,
        City: "Samastipur"
    }
};
console.log(classInfo)
console.log(classInfo.Ambika)
console.log(classInfo.Ambika.City) // it working on chain