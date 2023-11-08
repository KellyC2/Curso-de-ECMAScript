//MÉTODO REPLACEALL:El método "replaceAll" retorna un nuevo string, reemplazando todos los elementos por otro. 
//Este método recibe dos argumentos: 1. El patrón a reemplzar, puede ser un string o una expresión regular. y 2. El nuevo elemento, que sustituye al reemplazado.
//Este procedimeinto fue creado para solucionar el problema que tenía el método "replace", que realizaba la misma función de reemplzar elementos, pero solamente una sola vez por invocación. 

const string="JavaScript es un maravilloso lenguaje de programación"
const replaceString=string.replace("JavaScrip", "TypeScrip");
console.log(replaceString);

const msm="JavaScript es maravilloso, con JavaScript puedo crear el fututo de la web"
const replaceOneTime= msm.replace("JavaScript", "Python");
console.log(replaceOneTime);
const replaceAll=msm.replaceAll("JavaScript","Python");
console.log(replaceAll);

const replaceRegex=msm.replaceAll(/a/g, "*");
console.log(replaceRegex);
