//OBTENER LAS PRIOPIEDADES DE UN OBJETO EN UN ARRAY:
//Object.keys() devuelve un array con las pripiedades (keys) del objeto enviado como argumento.
const countries={
    MX:"México",
    CO:"Cplombia",
    CL:"Chile",
    PE:"Perú",
    VZ:"Venezuela"
}
console.log(Object.keys(countries));

const usuario={
    name:"Kelly",
    email:"kelly<3@gmail.com",
    age:23
}
console.log(Object.keys(usuario));
