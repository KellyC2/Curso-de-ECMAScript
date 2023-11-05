//Los métodos de transformación de objetos a arrays sirven para obtener la información de las propiedades, sus valores a ambas. 

//OBTENER LOS PARES DE VALOR DE UN OBJETO EN UN ARRAY: object.entries() devuelve un array con las entries en forma [propiedades, valor] del objeto enviado como argumento.

const countries={
    MX:"México",
    CO:"Colombia",
    CL:"Chile",
    PE:"Perú",
    VZ:"Venezuela"
}

console.log(Object.entries(countries));

const usuario={
    name:"Andres",
    email:"adreselmejorcolacorador@gmail.com",
    age:23
}
console.log(Object.entries(usuario));