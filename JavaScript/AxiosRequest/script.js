// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// btn.addEventListener("click", async()=>{
//     let call = await getFact();
//     p.innerText = call;
// })
// let url = "https://catfact.ninja/fact";
// async function getFact() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch{
//         console.log("error--", e);
//         return "No fact found"
//     }
// }

// create with dog API

let url2 = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
let img = document.querySelector("#result");
btn.addEventListener("click", async()=>{
    let link = await getImage();
    img.setAttribute("src", link);
})
async function getImage() {
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }catch(e){
        console.log("error--", e);
        return "/";
    }
}