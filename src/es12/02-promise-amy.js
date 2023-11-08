//Promise.any() es otra forma de manejar varias promesas, que retonará la primera promesa que sea resuelta y rebotará si todas las promesas son rechazadas.

const promise1= new Promise((positivo, negativo)=>negativo("Nel, no se pudo"));
const promise2= new Promise((Allillan, Manan)=>Allillan("Allipuni"));
const promise3=new Promise((loResolviste, noPudiste)=>loResolviste("LO LOGRASTE"));
Promise. any([promise1, promise2, promise3])
.then(answer=>console.log(answer))

// Promise.allSettled([promise1, promise2, promise3])
// .then(respuesta=>console.log(respuesta))


