//Set es una nueva estructura de datos para alamacenar elementos únicos, es decir, sin elementos repetidos.
//¿como utilizar los SETS?
//Para iniciar un Set, se debe crear una instancia de su clase a partir de un iterable. Generalmente, un iterable es un array.
//¿COMO MANIPULAR LOS SETS?
//Para manipular estas estructuras de datos, exiten los siguientes métodos:
//1. Add(value): añade un nuevo valor. 2. Deelete(value):elimina un elemento que contiene el set. retorna un booleano si existía o no el valor. 3. Has(value):retorna un booleano si existe o no el valor dentro del Set. 4. Clear (value):elimina todos los valores del Set. 5. size:Retorna la cantidad de elemnetos del Set. 

const list=new Set();
list.add("item1");
list.add("item2").add("item3");
console.log(list);