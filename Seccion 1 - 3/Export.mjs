const array = ['M1', 'M2','M3'];
const array2 = ['D1', 'D2','D3'];
const otrosArrays = [];
// module.exports = {
//     array,
//     array2
// }


//También podemos exportan funciones

const fn1 = () => {
    console.log('Exportando desde funcion');
}

function fn2 () {
    console.log('Exportando desde funcion normal')
}
export { array2, otrosArrays, fn1 ,fn2}
export default  array

