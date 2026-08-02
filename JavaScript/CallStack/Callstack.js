// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//     return two()+one();
// }
// three();

let h1 = document.querySelector("h1");
function changeColor(color, delay, nextColor){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColor) nextColor();
    }, delay);
}
changeColor("red", 1000, ()=>{
    changeColor("orange", 1000, ()=>{
        changeColor("green", 1000, ()=>{
            changeColor("yellow", 1000, ()=>{
                changeColor("blue", 1000);
            });
        });
    });
});