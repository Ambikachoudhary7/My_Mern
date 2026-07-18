let arr = [3, 6, 2, 8, 9, 2]
const narr = arr.filter((num)=>{
    return (num%2==0);  
});
console.log(narr);