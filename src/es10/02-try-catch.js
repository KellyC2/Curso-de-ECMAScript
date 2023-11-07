//Parmetro opcional Catch: El paràmetro opcional catch permite omitir el error si es necesario.

//con paràmetro erro por defecto
try{
    hello();
}catch(error){
    console.log(error)
}
//Con paràmetro error personalizado 
try{
    anotherFn();
}catch{
    console.log("esto es un error")
}