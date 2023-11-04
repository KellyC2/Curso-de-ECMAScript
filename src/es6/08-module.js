import hello from "./module.js";
hello();


//Para que el código de js sea mas ordenado,legible y mantenible; ES6 introduce una forma de manejar código en archivos de manera modular. Esto involucra exportar funciones o variables de un archivo, e imprimirlas en otros archivos donde se necesite.
//COMO UTILIZAR LOS MODULOS DE ECMAScript:
//Las exportaciones de código consisten en crear funciones o variables para utilizarlas en otros archivos mediante la palabra reservada "export".
//Existen dos formas de exportar, antes de declarar la funcionalidad o entre llaves{}.
//Por ejemplo, en el archivo module.js declaramos una function para sumar(add) y multiplicar(multiply) dos valores, el cual lo exportaremos.

//QUE SON LAS IMPORTACIONES DE CÓDIGO:
//Las importaciones d e código consiste en usar funciones o variables de otros archivos mediante la palabra reservada "import", que deberán estar siempre lo más arriba del archivo y utilizando el mismo nombre que el archivo original. 
//Existen dos formas de importar: 1. antes de declarar la funcionalidad y 2. entre llaves{}.

import {multiply,add} from "./module.js";

console.log(multiply(2,6));
console.log(add(2,3));