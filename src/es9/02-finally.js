//MÉTODO FINALLY EN PROMESAS:
//El método finally para promesas consiste en ejecutar código despúes que un promesa haya ido ejecutada como resuelta o rechazada.
const myPromiseFunction=()=>{
    return new Promise((resolve, reject)=>{
        (false)
        ? resolve("Hey, lo resolví")
        :reject("ups! Algo sucedió, no pude resolverlo")
    })
};
myPromiseFunction()
.then((response)=>{console.log(response)})
.catch((error)=>{console.log(error)})
.finally(()=>{console.log("Es todo amigos")})