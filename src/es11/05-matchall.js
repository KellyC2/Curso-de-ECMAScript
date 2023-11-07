//MÉTODO "matchAll" : El método matchAll de los strings devuelve un iterable con todas las coincidencias del string específico a partir de una expresión regular, colocada como argumento. 

const regex=/\b(Apple)+\b/g;
const fruit="Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";
for(const similitud of fruit.matchAll(regex)){
    console.log(similitud)
}