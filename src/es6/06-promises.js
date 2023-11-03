//La promes es una forma de trabajar el asyncronismo. En JS existen diferentes formas de hacer asincronismo como: callbacks, promesa y async y away, este último(async y await es agregada en versiones posteriores).Las promesas venía a resolver el problema de los callbacks. U n call back no es mas que una funciòn que recibe como paràmetro otra funciòn.
//Una promesa es un objeto que representa la terminaciòn o el fracaso de una operaciòn asìncrona. Una promesa es un proxy de un valor que no necesariamente se conoce cuando se crea la promesa. Le permite asociar controladores con el valor eventual de èxito o el motivo de falla de una acciòn asìncrona. Esto permite que los mètodos asìncronos devuelvan valores como los mètodos sìncronos: en lugra de devolver la promesa inmediatamente el valor final, el mètodo asìncrono devuelve la promesa de  proporcionar el valor en algùn momento en el futuro. 
//Una promise està en uno de estos estados: Pending: estado inicial ni cumplido ni rechazado. Fulfilled: significa que la operaciòn se completò con èxito. Rejected: significa que la operaciòn fallò. 
//Una promesa pendiente puede cumplirse con un valor o rechazarse con un motivo(error), Cuando ocurre cualquiera de estas opciones, se llama a los controladores asociados en cola por el mètodo "then" de un promesa. 

//Veamos la lógica que nos da la sintaxis y veamos cómo podemos sacrale ventaja. Para esto vamos a crear una function con nuestro arriw function y dentro vamos a retornar una promesa.
const anotherFunction=()=>{
    return new Promise((resolve, reject)=>{

        if(true){
            resolve("Hey");
        }else{
            reject("ups!")
        }
    })
}
anotherFunction()
.then(response=>console.log(response))
.catch(err=>console.log(err));