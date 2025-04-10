function suma (a){
    if (a===1){
        return 1
    }else{
        return a + suma(a-1)
    }
}

console.log(suma(1))
console.log(suma(2))
console.log(suma(10))
