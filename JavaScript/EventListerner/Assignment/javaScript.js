let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    btn.style.color = "red";
    btn.style.backgroundColor = "blue";
});

let input = document.querySelector("input");
let h1 = document.querySelector("h1");
input.addEventListener("input", function(){
    input.value = input.value.replace(/[^a-zA-Z]/g, "");
    console.log(input.value);
    h1.innerText = input.value;
})