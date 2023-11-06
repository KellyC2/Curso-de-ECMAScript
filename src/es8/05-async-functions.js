//En ECMAScrip 2018 o ES8 fue añadida una nueva forma de manejar el asincronismo en JS mediante funciones asíncronas.

//CÓMO UTILIZAR FUNCIONES ASÍNCRONAS: La función asíncrona se crea mediante la palbra reservada "async" y retorna una promesa.
async function myAsyncFunction(){}//Declaración de async function
const myOtherAsyncFunction= async ()=>{}// expresión de async function.

//La palabra reservada await significa que espera hasta que una promesa sea resuelta y solo funciona dentro de una función asíncrona. Los bloques try/catch  sirven para manejar si la promesa ha sido resuelta  o rechazada. 

const miPromiseFunction=()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ?setTimeout(()=>resolve("Respuesta positiva, lo hice!"),2000)
        :reject(new Error("NOOO, algo ocurio, No puede atender tu solicitud"))
    })
}
const miAsyncFunction= async ()=>{
    const usingAwait= await miPromiseFunction();
    console.log(usingAwait);
    console.log("Hello");
}

console.log("before mu asyncfunction")
miAsyncFunction();
console.log("after my async function")


//EJEMPLO2:
async function fetchWeather(){
    try{
        const weatherData=await getWeatherData();
    } catch(error){
        console.log("Ups, error al obtener los datos del clima", error);
    }    
}
function getWeatherData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const weatherData={
                temperature:25,
                description:"Soleado"
            };
            resolve(weatherData);
        }, 3000);
    })
}

function displayWeather(weatherData){
    console.log("Datos del clima: ", weatherData);
}
fetchWeather();