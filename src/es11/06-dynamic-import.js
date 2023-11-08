//La expresiòn import() permite manejar mòdulos dinàmicamente, ya que la sintaxis de ECMAScrip import...from... no lo permite.
//¿CÒMO UTILIZAR IMPORTACIÒN DINÀMICA?: La importaciòn dinàmica consiste en cargar los mòdulos cuando el usuario los vaya a utilizar, y no al iniciar la aplicaciòn. Esto permte que la pàgina web sea mà ràpida, porque descarga menos recursos. 

const button=document.getElementById("btn");

button.addEventListener("click", async function(){
    const module=await import("./module.js");
    console.log(module);
    module.hello();
})


//La expresiòn import() recibe un argumento de tipo string con la ruta del mòdulo a importar y devuelve una promesa.
const ruta = "./modulo.js"

// Utilizando promesas
//import(ruta)
    // .then( modulo => {
    //     modulo.funcion1()
    //     modulo.funcion2()
    // })
    // .catch(error => console.log(error))
    
// Utilizando async/await
//async function importarModulo(rutaDelModulo) {
//     const modulo = await import(rutaDelModulo)
//     modulo.funcion1()
//     modulo.funcion2()
// }

// importarModulo(ruta)