let para = document.createElement("p");
para.innerText = "I love coding";
document.querySelector("body").append(para);
para.classList.add("red");


let h = document.createElement("h1");
h.innerText = "i am a blue h1!";
document.querySelector("body").append(h);
h.classList.add("blue");

let d = document.createElement("div");
let h2 = document.createElement("h2");
h2.innerText = "sfbsjbfkshf"
let p = document.createElement("p");
p.innerText = "sbfjsbfkjbsafasbfjaskjfbskabfgsabfasnbfkjasbfjbasjffj"
d.append(h2);
d.append(p);
document.querySelector("body").append(d);
d.classList.add("divs");

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click here!";

document.querySelector("body").append("button");
document.querySelector("body").append("input");

input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

let h4 = document.createElement('h4');
h4.innerHTML = "<u> Doom Practice </u>";
document.querySelector("body").append(h4);

let p = document.createElement("p");
p.innerHTML = "Apna College <b> Delta </b> Practice";
document.querySelector("body").append(p);

