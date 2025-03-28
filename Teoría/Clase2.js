//variable: espacio reservado en memoria que almacena un valor bajo una denominación

/*
C:
int edad = 10
edad = 10.1 (error)
s
Python:
edad = 10
edad = "pepe" (no hay problema)
nombre= "Estaeban"
profesor = true

*/

let edad =10
let nombre = "Esteban"
let profesor = true

/* deprecado */
var edad2 = 11 // no lo usamos, solo let

/* constante */

const apodo = "Steve"
// apodo = "otra cosa" // esto va a dar error porque apodo ya se definió en el renglon de arriba


/* array (lista) */

let numero = [1,2,3,4]
const LETRAS = ["a","b","c","d"]
const VARIADITO = [1,"asd",true]
const ARRAYMULTIPLE = [[1,2,2],[4,5,6]]

/* OBJETO */
//camelCase, snake_case, kebab-case

let mejorProfesor =
{
    nombre: "Esteban",
    apellido: "Piazza",
    edad: 32,
    profesor: true,
    alumno: false,
    cumplirAnios: function(){
    this.edad = this.edad + 1
    }

}


/* ARRAY de objetos literales */

let ayudante1 = {nombre:"Dani",Apellido:"Maredei"}
let ayudante2 = {nombre:"Franco",Apellido:"Vietyes"}
let ayudante3 = {nombre:"Sofia",Apellido:"Ronconco"}

const ALUMNOS = [ayudante1,ayudante2,ayudante3]

/* Operadores */
//Python AND - &&
console.log(1 && 2)

//Python Or - Js ||
console.log(1||2)

