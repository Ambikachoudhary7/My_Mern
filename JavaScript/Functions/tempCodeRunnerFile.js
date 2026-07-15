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
let func = oddEven("odd");
func(2);