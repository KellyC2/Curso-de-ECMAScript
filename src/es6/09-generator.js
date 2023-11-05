//Los generadores son funciones especiales que pueden pausar su ejecución, luegos volver al punto dónde se quedaron, recorriendo su scope y seguir retornando valores. 

//Estos se utilizan para guardar la totalidad de los datos infinitos, a traves de una funci´n matemática a valores futuros. De esta menra ocupan poca memoria, con respecto a si creamos un array u objeto.
//COMO UTILIZAR GENERADORES:
//la sintaxis de los generaodres somprende los siguiente: 1. La palabra reservada fucntion con el asterisco al final(function*). 2. la palabra reservada "yield" que hace referencia al valor retornado cada vez que se invoque, recordando el valor ant.erior. 3. Crear una variable a partir de una función generadora.4. El método "next()" devuelve un objeto que contiene una propiedad "value" con cada valor de "yield"; y otra propiedad "done" con el valor "true" o "false" si el generador ha terminado.
//Si el generador se lo invoca y ha retornado todos sus valores de "yield", entonces devolverá el objeto con las propiedades "value" con "undefined" y un "done" con true.








//El asterisco"*" despues de la aplabra function es lo que identifica a una función generadora
function* iterate(array){
    for(let value of array){
        yield value;//Cumple un función similiar a return pero solo es usado en la una función generadora. Lo usamos para retornar el value
    }
}
const cualquierNombre=iterate(["Oscar", "Ana", "María","Susana"]);//Aqui estamos generando una instancia pasando a "iterate" con el arreglo de strings que hemos construido. 
console.log(cualquierNombre.next().value);//
console.log(cualquierNombre.next().value);
console.log(cualquierNombre.next().value);
console.log(cualquierNombre.next().value);
console.log(cualquierNombre.next().value);
console.log(cualquierNombre.next().value);
console.log(cualquierNombre.next().value);