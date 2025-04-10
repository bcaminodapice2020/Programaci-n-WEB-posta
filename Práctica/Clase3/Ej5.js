function horario(formato24){
    if (formato24<12){
        return "Son las " + formato24 + "hs, Buenos días"
    }else if (formato24>12 && formato24<18){
        return "Son las " + formato24 + "hs, Buenas tardes"
    }else{
        return "Son las " + formato24 + "hs, Buenas noches"
    }
}

console.log(horario(10))
console.log(horario(15))
console.log(horario(21))

