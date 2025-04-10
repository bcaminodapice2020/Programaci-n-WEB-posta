function contraseña(a){
    let tieneMayuscula = false
    let tieneNumero = false

    for(let i = 0; i<a.length;i++){
        if(a[i]>='0' && a[i]<='9'){
            tieneNumero = true
        } 
            
        if(a[i]>='A'&& a[i]<='Z'){
            tieneMayuscula = true
        }
    }   
    
    if(a.length < 8){
        return "No cumple con las condiciones"
    }

    if(tieneMayuscula && tieneNumero ){
        return a
    }else{
        "No cumple con las condiciones"
    }
}

console.log(contraseña("Abcdefe"))
console.log(contraseña("Abcdef7"))
console.log(contraseña("Abcdefg7"))

