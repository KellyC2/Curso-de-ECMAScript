//En esta clase vamos a aprender una nueva forma de asignar paràmetros por defecto y para ello aplicaremos dos ejemplos que te muestran los cambios que se han realizadoen en ECMAScript 6 y como se realizaba de forma tradicional.


//Traditional way:↓
function newUser(name,age,country){
    var name=name || "Oscar";
    var age=age || 35;
    var country=country|| "MX";
    console.log(name, age, country);
}
newUser();
newUser("Marìa", 28, "EC");

//Parametros por defecto con ECMAScript6, una forma mas amigable.
function newAdmin(name="Kelly", age=22, country="CL"){
    console.log(name, age, country);
}
newAdmin();
newAdmin("Maribel", 33, "VZ");
