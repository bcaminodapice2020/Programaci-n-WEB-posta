function temperatura (gradosCelsius){
    if (gradosCelsius < 15){
        return "Hace frio"
    }else if (gradosCelsius > 15 && gradosCelsius < 25){
        return "Templado"
    }else{
        return "Hace calor"
    }
}

console.log(temperatura(45))
console.log(temperatura(20))
console.log(temperatura(10))
