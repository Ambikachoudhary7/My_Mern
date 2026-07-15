function oddEven(request){
    if(request=="odd"){
       let odd = function(n){
            return !(n%2==0);
       };
       return odd;
    }else if(request=="even"){
        let even = function(n){
            return (n%2==0);
        };
        return even;
    }else{
        return "Invalid";
    }
}
console.log(oddEven("odd"));
// let func = oddEven("odd");
// console.log(func(2));
// console.log(func(3));

// calling even function
let func = oddEven("even");
console.log(func(4));
console.log(func(7));