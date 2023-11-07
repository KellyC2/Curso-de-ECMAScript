//BIG INT, ENTEROS MUY GRANDES: El nuevo dato primitivo "bigint" permite manejar números enteros muy grandes. Existen dos formas de crear un "biginit": 1. el número entero seguido de n o mediante la función "Binginit"

const aBigNumber=15145338968465455n;
const anotherBigNumber=BigInt(15145338968465455);
console.log(aBigNumber);
console.log(anotherBigNumber);

//JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y un mínimo Number.MIN_SAFE_INTEGER.

const max = Number.MAX_SAFE_INTEGER
const min = Number.MIN_SAFE_INTEGER

console.log(max)  // 9007199254740991
console.log(min) // -9007199254740991
//Después de los límites, los cálculos muestran resultados erróneos. Los bigint ayudan a manejar operaciones de enteros fuera de los límites mencionados.

const increment = 2
const number = Number.MAX_SAFE_INTEGER + increment
const bigInt = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(increment)

console.log(number) // 9007199254740992
console.log(bigInt) // 9007199254740993n
//Se añade la misma cantidad a ambos tipos de datos, sin embargo, el tipo numérico da un resultado diferente al esperado.