let oracion1 = mensaje => {
    if (mensaje.length ===0){
        return "El mensaje está vacío"
    }else{
        return mensaje.join(" ")
    }
}

console.log(oracion1(["Que","lindo","dia"]))

console.log(oracion1([]))
