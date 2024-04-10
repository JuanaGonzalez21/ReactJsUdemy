//Expresion de clase 

//Asignar inmediatamente una clase a una constante

// Clase anonima
// const Rectangulo = class {

// }


// Declaración de clase
// Las clases declaradas con class no aplican el hosting
class Rectangulo {

}

// Hosting
// Variables definidas con var
// Funciones definidas con function
// Lleva al comienzo del archivo
console.log(Cuadrado)
function Cuadrado() {}
console.log(Cuadrado, Rectangulo); //Function - class
const r = new Rectangulo()


class Interaccion {

    propiedad = 'mi promiedad'

    //Propiedades privadas

    #privada = true;

    //Metodo que se instancia cuando llamo una clase

    //Estado por defecto
    constructor(estado = 'Hola', privada = false){
        this.estado = estado
        this.#privada = privada
    }

    hablar(){
        console.log(`Mensaje de un constructor: ${this.estado} ${this.#privada ? 'Buen día' : 'Hasta luego'}`)
    }
}   

//Para declararla instancia se llama la palabra reservada de new
const uno = new Interaccion('Hola');
console.log(uno.__proto__.hablar)
 uno.hablar();
const dos = new Interaccion('Adios');
// dos.hablar();
const vacio = new Interaccion();
// vacio.hablar();
