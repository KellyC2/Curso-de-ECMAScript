import { products } from "./products.js";
console.log(products);
console.log("Hey!!");

//Top level await permite utilizar la palabra reservada "await" sin estar dentro de una función asincrona cpn async. Sin embargo, unicamente se puede utilizar "await" en la parte superior del archivo de un módulo.
//¿CÓMO UTILIZAR TOP LEVEL AWAIT? Anterior a ECMAScript 13, cuando se introdujo funciones asíncronas, si utilizabas "await" fuera de async, existiría un error de sintaxis.
//Ahora, con top level await esto es posible, sin ningun error. Esto puede servir para importaciones de manera dinámica o iniciar la conexión de tus bases de datos. Siempre y cuando respetes que debes estar en la parte encima del archivo de tipo módulo.