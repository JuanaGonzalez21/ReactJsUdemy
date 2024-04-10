// Funciones

//Funciones que se declaran con la palabra reservada function
function Fn(){
    this.prop = 'propiedad'
    this.nombre = 'nombre'

    // No retorna el mensaje, retorna los prop a partir del 'this'
    // return 'Mensaje';
}

Fn.prototype.lala = function FuncionDePrototipo() {}

//Llamando con una palabra reservada NEW
const r = new Fn(); //Devuelve un objeto de la función
console.log(r)
console.log(r.__proto__)


//Arrow function

console.log(this) //Objeto Literal

const fafFn = () => { // No existe el THIS dentro de las Arrow Function
    //Tenemos un objeto
    // const obj = {}
    // obj.prop = 'propiedad'
    // console.log(obj);
    // return obj

    this.prop = 'lala'
}

const r1 =  fafFn();
console.log(this) //Objeto Literal
//Las arrow function no pueden ser llamadas con la palabra reservadas porque también funcionan como clases

console.log(r1)

// Las arrow function tienen un return implicito

const fnr = () => 2

const fnr2 = () => {
    return 2
}
console.log(fnr())
console.log(fnr2())