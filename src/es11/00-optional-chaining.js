//Cuando intentas acceder a propiedades de un objeto que no existen , JavaScript te retornará "undefined".

const user={
    gndx:{
        country:"MX"
    },
    ana:{
        country:"CO"
    }
}
console.log(user.gndx.country);

//Al acceder a una propiedad más profunda de un objeto, que previamnete fue evaluda como undefined, el programa se detendrá y mostrará un error de tipo. 
console.log(user.bebeloper.age);//TypeError: Cannot read properties of undefined (reading 'country'). Es como intentar ejecutar "undefined.facebook", lo cual es un error de tipo, debido que undefined es un primitivo, no es un objeto


//¿CÓMO UTILIZAR EL ENCADENAMIENTO OPCIONAL?
//El encadeanmiento opcional u "optional chaining(?.)" detiene la evaluación del objeto cuando el valor es "undefined" o "null" antes del (?.), retornando "undefined" sin detener el programa por un error.


const usuario={

}
console.log(usuario.redes?.facebook)

//Pero ¿porqué usaría propiedades de un objeto vacío?. Cuando realizas peticiones, el objeto no contiene la información solicitada en seguida, por ende, necesitas que el programa no colapse hast que lleguen los datos y puedas utilizarlos.
//NO ABUSES DEL ENCADENAMIENTO OPCIONAL: El encadenamiento opcional se debe utilizar únicamente cuando probablemente un valor no exista. Por ejemplo, en el objeto ususrioa que siempre existe, pero la propiedad "redes" es opcional, entonces se debería escribir usuario.redes?.Facebook  y no usuario?.redes?.facebook
//Si abusas del encadenamiento opcional y existe un error en un objeto, el programa podría "ocultarlo" por un undefined, provocando que el debugging sea más complicado.