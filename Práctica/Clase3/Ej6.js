function verdaderoFalso (a,b,c,d){
    if (a||b === true && !c||!d === false){
        return true
    }else{
        return false
    }
}

console.log(verdaderoFalso(true,false,true,false))
console.log(verdaderoFalso(true,true,false,true))
console.log(verdaderoFalso(true,false,false,false))
console.log(verdaderoFalso(false,false,false,false))
