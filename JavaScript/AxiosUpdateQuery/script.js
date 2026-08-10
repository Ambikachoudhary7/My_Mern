const btn = document.querySelector("button");
let url = "http://hipolabs.com";
let btn = 
let country = "nepal";
async function Countary() {
    try{
        let res = await axios.get(url+country);
        console.log(res);
    }catch(e){
        console.log("error--", e);
    }
}