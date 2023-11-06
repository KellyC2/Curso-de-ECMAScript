//Los generadores asíncronos son semejantes a los generadores que ya conoces, pero combinando sintaxis de promesas.
async function* myFunctionGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve (3);
}

const other=myFunctionGenerator();
other.next().then(response=>{console.log(response.value)});
other. next().then(response=>console.log(response.value));
other.next(). then(response=>console.log(response.value));
other.next().finally(()=>console.log("Eso es todo amigos"));
console.log("Hello. soy el último llamado");

//ejemplo2:
async function arrayOfNames(array){
    for await(let value of array){
        console.log(value);
    }
}
const names=arrayOfNames(["Oscar", "David", "Ana"]);
console.log("After");