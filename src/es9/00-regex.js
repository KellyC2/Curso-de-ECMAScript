//La siguente versión de ECMAScrip fue publicada en 2018. Las caracteríticas de ES9 o ES2018 que aprenderemos son: expresiones regulares y propiedades de propagación.
//EXPRESIONES REGULARES: Las expresiones regulares o REGEX(regular expresions) son patrones de búsqueda y manipulación de cadenas de caracteres increiblemnete potente y están presentes en todos los lenguajes de programación. 
//En javaScript se crea este patrón entre barras inclinadas(/patrón/) y se utiliza métodos para hacer cpincidir la búsqueda.

const regexData = /(\d{4})-(\d{2})-(\d{2})/ ;
const match=regexData.exec("2023-11-13");
console.table(match);

const regex = /(([0-9]{4})-([0-9]{2})-([0-9]{2}))/ ;
const matchers=regex.exec("2023-11-13");
console.table(matchers);
