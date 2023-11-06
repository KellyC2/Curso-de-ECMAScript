
//¿QUÉ ES EL APLANAMIENTO DE ARRAYS?
//El aplanamiento consiste en transformar un array de arrays a una sola dimensión. Los métodos flat y flatmap permiten realizar el aplanamiento.
// MÉTODO FLAT: El método flat devuelve un array donde los subarrays han sido propagados hasta una profundidad especificada. Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original. 
//Este método recibe un argumento, la profundidad del aplanamiento, este valor por defecto tiene el valor de 1. Si deseas aplanar todos los subarrays en una sola dimensión, utiliza el valor de "infinity".
const array=[1,1,2,3,4,5,[1,3,4,[1,2,2,3,5,6]]];
console.log(array.flat(2));

const array1 = [1,2,[3,4],5,6]
const result = array1.flat() 
result// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
result2// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
result3// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//FLATMAP:
//El método flatmap es una combinación de los mpetodos map y flat. Primero realiza la iteración de los elementos del array(como si fuera map),y después los aplana en un profundidad (como si fuera flat). Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.

//Este método recibe los mismo argumentos que el método map.
const myarray=[1,2,3,4,5,6]
console.log(myarray.flatMap(v=>[v,v ** 2 ]));
console.log(myarray.flatMap(num=>num ** 2));

//Este método no se podría utilizar para un arrayy que tenga mas de un nivel de profundidad, sin embargo, se pueden combinar los métodos flat y map para tener un mismo resultado.
const numbers=[1,2,3,[4,5,[6,7]]];
console.log(numbers.flat(Infinity).map(num=>num**2))

const numbers1 = [1,2, 3, 4]
numbers.map(number1 => [number * 2]) 
// [[2], [4], [6], [8]]
numbers.flatMap(number => [number *2]) 
// [2, 4, 6, 8]
