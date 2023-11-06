//PROPIEDADES DE PROPAGACIÓN: Las propiedades de propagación consisten en expandir las propiedades de un objeto utilizando el SPREAD OPERATOR. Sirve para crear nuevos objetos a partir de otros.


const user={username:"gndx", age:34, country:"CO"};
const{username, ...values}=user;
console.log(username);
console.log(values);

const objetox={
    nombre:"Kelly",
    age:27,
}
const usuario={
    ...objetox,
    plataforma:"Platzi"
}
console.log(usuario);

//Crear copias de objetos utilizando las propiedades de propagación:
//Semejante a crear copias de arrays utilizando el operador  de propagación, se puede realizar copias de objetos en un solo nivel mediante las propiedades de propiedades de propagación.  De esta manera el segundo objeto tendrá uan referencia en memoria diferente al original.
const objOriginal={a:1, b:3,c:3}
const objetoVinculado=objOriginal;
const objetoCopia={...objOriginal};

console.log(objetoVinculado===objOriginal);
console.log( objetoCopia===objOriginal);

//CUIDADO CON LA COPIA EN DIFERENTES NIVELES DE PROFUNDIDAD:
//El operador de propagación sirve para craer una copia en un solo nivel de profundidad, esto quiere decir que si existen objetos o arrays dentro de un objeto a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia en la copia y en el original.
const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }

console.log(original === copia) // false
console.log(original["datos"] === copia["datos"] )// true
console.log(copia);

//La manera de solucionar esto es más compleja, tendrías que utilizar el operador de propagación para cada elemento en cada nivel de profundidad. Sin embargo, recientemente salió una forma de crear una copia profunda con "StructuredClone". Aunque es una característica muy reciente, así que revisa que navegadores tienen soporte. 
const original2 = { datos: [1, [2, 3], 4, 5] }
const copia2 = structuredClone(original2)

console.log(original2 === copia2) // false
console.log(original2["datos"] === copia2["datos"]) // false
