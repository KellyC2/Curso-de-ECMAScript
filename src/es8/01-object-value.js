//OBTENER LOS VALORES DE LAS PROPIEDADES DE UN OBJETOS EN UN ARRAY:
// object.values() devuelve un array con los valores de cada propiedad del objeto enviado como argumento.

const countries={
    MX:"México",
    CO:"Colombia",
    CL:"Chile",
    PE:"Perú",
    VZ:"Venexuela"
}
console.log(Object.values(countries));

const usuario={
    name:"Kelly",
    correo:"lamejor@correo.com",
    age:27
}
console.log(Object.values(usuario));
