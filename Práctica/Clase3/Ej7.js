function factorial(a){
    if(a===0 || a===1){
        return 1
    }else{
        return a*factorial(a-1)
    }
}


console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))
console.log(factorial(7))
