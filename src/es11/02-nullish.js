//OPERADOR NULLISH COALESCING:
//El operador "nullish coalescing(??)" consiste en evaluar si una avariable es undefined o null para asignarle un valor. 

const anotheNumber=null;
const validate=anotheNumber ?? 5;
console.log(validate);

//El siguiente ejemplo se lee como: ¿"usuario.names"  es "undefined" o "null"? si es así, asignale un valor por defecto "Andres", caso contrario asigna el valor de "usuario.name"

const usuario={}
const nombre1=usuario.name?? "Andres"
console.log(nombre1)

const user={
    name:"Juan"
};
const nombre2=user.name??"Kelly"
console.log(nombre2);

//DIFERENCIA ENTRE EL OPERADOR OR Y EL NULLISH COALESCING:
//El operador OR(||) evalúa un valor falsey. Un valor falsy es aquel que es false en un contexto booleano, estos son: "0", " " (string vacío), " false", "NaN", "Undefined" o "null".
//Puede que recibas una variable con un valor "falsy" que necesites asignarle a otra variable, que no sea "null" o "undefined". Si evalúas con el operador OR, este lo cambiará, provacando un resultado erróneo.

const id = 0

const orId = id || "Sin id"
const nullishId = id ?? "Sin id"

console.log( orId ) //  'Sin id'
console.log( nullishId ) // 0
