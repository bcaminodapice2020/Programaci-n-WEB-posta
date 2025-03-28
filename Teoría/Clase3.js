// funcion en python
// def sumar (a,b)

console.log(sumar (1,2))

// funcion expresada

function sumar (a,b) {
    return a+b;
}

// funcion declarada

console.log(10,3)

let restar = function (a,b){
    return a-b;
}

// funciones flechas
 a => a + 100
 let masDiez = b => b + 10

 function duplicar (a){
    numero = Number(a)
    numero = numero*2
    return numero
 }
/****************************** */

function dejarPasar (edad,acompaniado){
    if ( edad > 18 ||acompaniado === true){
        return ("Puede Pasar")
    }else if (acompaniado === false){
        return ("No puede pasar")
    }else{
        return ("Como te decia tu mama, aca hay un error")
    }
}
// Operador ternario
let isMember = true
"La cuota es de : " + (isMember ? "$2.00" : "$10.00");

let edad = 19
let acompaniado = true
let resultado = edad>18 && acompaniado === true ? "Puede pasar" : "No puede pasar"
console.log(resultado)

/************************************** */
// for - para
//for i in range(101)
// print i

// variable iteradora, condicion, variacion

for (let i = 0; i <101 ; i++ ){
    console.log(i)
}
 /*************** */
let x = 0
while (x<0) {
    console.log(x)
    x += 1
}

/***************** */
let NUMEROS = [1,2,3,4,5]

for (let i= 0; i < NUMEROS.lenght ; i++){
    NUMEROS[i] = NUMEROS [i] + 1
    console.log(NUMEROS[i]+1)
}

/* Buscador en el Array */

function encontrarValor (array,valor){
    for (let i=0; i < array.lenght; i ++ ){
        if (array[i]===valor){
            return i 
        }else{
            return "El valor no existe"
        }
    }
}

function duplicar (a,b){
    return a*b
}

function calculadora (num1,num2,funcion)
{return funcion(num1,num2)}

//uso una funcion de parametro

console.log(calculadora(1,2,duplicar))
let nombre = "Estebana"

for (let i = 0 ; i < (nombre.length)/2; i++){
    resultado = resultado + nombre[i] //Este
}
/****************** */
const prompt = require ('prompt-sync')();
const name = prompt ('What is your name?');
console.log('Hey there ${name}');








