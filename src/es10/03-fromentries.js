//¿CÒMO TRANSFORMAR UN ARRAY DE ARRAYS EN UN OBJETO?
//El mètodo "Object.fromEntries" devuelve un objeto a partir de un arra donde sus elementos son las entries en forma [propieda,valor].
//Se considera la operaciòn inversa de "Object.entries()".

const arrayEntries=[
    ["name","Andres"],
    ["email","andrescorreo.com"],
    ["age",23]
]
const usuario=Object.fromEntries(arrayEntries)
console.log(usuario)


//vamos a obtner objetos de array de arrays.
const entries=new Map([["name","Oscar"],["age",34]]);
console.log(entries);
console.log(Object.fromEntries(entries));