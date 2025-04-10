function saludar(a){
    if (a){
        return "Hola " + a
    }else{
        return "Hola, invitado"
    }
}

console.log(saludar("Pedro"))
console.log(saludar())
console.log(saludar(""))

