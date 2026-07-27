// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     btn.style.color = "red";
//     btn.style.backgroundColor = "blue";
// });

// let input = document.querySelector("input");
// let h1 = document.querySelector("h1");
// input.addEventListener("input", function(){
//     input.value = input.value.replace(/[^a-zA-Z]/g, "");
//     console.log(input.value);
//     h1.innerText = input.value;
// });

// let h2 = document.querySelector("h2");
// h2.addEventListener("mouseout", function(){
//     console.log("Mouse Out");
// });

// let input2 = document.querySelector("input");
// input2.addEventListener("keypress", function(e){
//     console.log("Key Pressed", e.key);
// });

// window.addEventListener("scroll", function(){
//     console.log("Scrolling");
// });


// window.addEventListener("load", function(){
//     console.log("Website loaded");
// });


// bubling Event
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelector("li");

div.addEventListener("click", function(){
    console.log("click on div");
});

ul.addEventListener("click", function(event){
    event.stopImmediatePropagation();
    console.log("click on ul");
});
for(lis of li){
    lis.addEventListener("click", function(){
        console.log("click on lis");
    });
}
