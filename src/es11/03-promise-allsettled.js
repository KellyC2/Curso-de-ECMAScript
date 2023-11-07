//En alguna situación  necesitarás manejar varias promesas y obtener sus resultados . ¿cómo? Utilizando los métodos "Promise.all" y "Promise.allSettled".
//PROMISE.ALL: El método "Promise.all" sirve para manejar varias promesas al mismo tiempo. Recibe como argumento un array de promesas. 



const promise1= new Promise((resolve, reject)=>{reject("Reject")});
const promise2=new Promise ((resolve,reject)=>resolve("RESOLVE"));
const promise3=new Promise((resolve, reject)=>{resolve("resolve2")});

Promise.all([promise1,promise2,promise3]).then((respuesta)=>{console.log(respuesta)}).catch(error=>console.log(error));
//EL problema  es que "Promise.all" se resolverá, sí y solo si todas las promesas fueron resueltas. Si al menos una promesa es rechazda, "Promise.all" será rechazada.

//PROMISE.ALLSETTLED: "Promise.allSettled()" permite manejar varias promesas, que devolverá un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada.

Promise.allSettled([promise1, promise2, promise3]).then(response=>console.log(response));
//Deberías usar "Promise.allSettled" en lugar de "Promise.all" ? No, porque ambos son muy útiles dependiendo cómo quieras menejar tus promesas.