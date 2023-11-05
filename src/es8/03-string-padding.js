//las siguientes características de ES8 o ES2017 que aprenderemos son: rellenar un string y trailing commas.
//RELLENAR UN STRING O PADING:
//El padding consiste en rellenar un string por el principio o por el final, con el carácter especificado, repetido hasta que complete la longitud máxima.Este mpetodo recibe dos argumentos: 1-La longitud máxima a rellenar, incliyendo el string inicial. 2. el estring para rellenar, por defecto, es un espcio. Si la longitud a rellenar es menor que la del string actual, entonces no agregará nada. 
//MÉTODO padStart:El método padStart completa un string con otro string en el inicio hasta tener un total de caracteres especificado. 
const myString="Hello"
console.log(myString.padStart(15,"hi"));

console.log( "abc".padStart(10,"-"))
console.log( "abc".padStart(10,"foo"))
console.log( "abc".padStart(6,"123456"))
console.log( "abc".padStart(8,"0"))
console.log( "abc".padStart(3))
console.log( "abc".padStart(10))


//MÉTODO padEnd: El método padEnd completa un string con otro string en el final hasta tener un total de caracteres especificado. 

const otroString="love you"
console.log(otroString.padEnd (15," <3"))

console.log("hola".padEnd(20," que tal <3"))
console.log("abc".padEnd(10))  //"abc       "
console.log('abc'.padEnd(10, "foo") )// "abcfoofoof"
console.log('abc'.padEnd(6, "123456") )// "abc123"
console.log('abc'.padEnd(1)) // "abc"
