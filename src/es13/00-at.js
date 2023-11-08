
// El método at de arrays sirve para acceder a los elementos a partir del índice.

//ÍNDICES POSITIVOS Y NEGATIVOS EN ARRAYS:
//Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array. El índice 0 es la primera posición. [0,1,2,3, ...., lenght-1]
//Los índices negativos comienzan desde el -1 hasta el negativo de la longitud total del array, de derecha a izquierda. el Indice -1 es la última posición.  [-lenght, ...,  -3, -2, -1]

//¿CÓMO UTILIZAR EL MÉTODO "AT"?
//La utilidad más importante de este método es para manejar índices negativos. Algo que no se puede con la notación de corchetes. 
//array.at(índice)
const array=["one","two", "three","four","five","six"];
console.log(array[array.length-1]);
console.log(array.at(-1));
console.log(array.at(-3));
console.log(Array[-1]);