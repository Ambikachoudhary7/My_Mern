let arr = [5, 4, 7, 8, 9];
const avg = ((arr)=>{
    let sum = 0;
    // for(let i=0; i<arr.length; i++){
    //     sum+=arr[i];
    //     count++;
    // }
    // use for each loop
    for(let number of arr){
        sum+=number;
    }
    return  sum/arr.length;
});
console.log(avg(arr));