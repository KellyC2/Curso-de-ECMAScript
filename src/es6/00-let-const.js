/* Variables: Forma de asignar valor. Exiten varias reglas al usar esta palabra reservada*/



var lastName="David"; /*Declarar y asignar*/
lastName="Kelly"; /*Reasignar*/
console.log(lastName);


let fruit="apple"; /*Declarar y asignar*/
fruit="kiwi" /*Reasignar*/
console.log(fruit);


const animal="dog"; /*Declarar y asignar*/
animal="cat"; /*Reasignar*/
console.log(animal); /*Si corremos este bloque de código nos mostrará un error  porque una variable con const no puede ser reasignada. */

/*ENTENDIENDO LAS PARTICULARIDADES DE CADA TIPO DE VARIABBLE*/
const fruits= ()=>{
    if(true){
        var fruit1="apple";// function scope
        let fruit2="kiwi";//block scope
        const fruit3="banana";//block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();
