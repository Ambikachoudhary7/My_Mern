let arr = [3, 5, 4, 8, 1, 6];
let larget = function(arr, number){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>number){
            process.stdout.write(arr[i]+" "); // using to print same line all elements
        }
    }
}
larget(arr, 1);