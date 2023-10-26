//Template literals: Nos va a permitir concatenar strings de una forma amigable y nos permite jugar con las variables y elementos y generando de esta forma una estructura  ventajosa. 


let hello = "Hello";
let world = "World";

//Traditional way
let epicPhrase = hello + " " + world + "!";
console.log(epicPhrase);

//Template literals
let epicPhrase2= `${hello} ${world}?`;
console.log(epicPhrase2);

//Otra de las ventajas que se ha añadido en ECMAScript 6 son las multilíneas, Multi-line strings, Es la forma de hacer saltos de línea que están asignadas dentro de un string.

//Traditional way
let lorem ="Esto es un estring \n " + "Esto es otra línea";

//Multilines
let lorem2= `Esta es una frase épica
Y esta es la continuación de la frase épica.`;

console.log(lorem);
console.log(lorem2);