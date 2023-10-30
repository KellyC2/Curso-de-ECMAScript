//CLOSURE(CLAUSURA):Una clausura es una funciòn que guarda referencias del estado adyacente. En otras palabras, una clausura permite acceder al àmbito de una funciòn exterior desde una funciòn interior. En JS, las clausuras se crean cada vez que una funciòn es creada. Consideremos el siguiente ejemplo:
    function iniciar() {
        let nombre="Kelly";//la variable nombre es una variable local creada por iniciar.
        function mostrarNombre(){
            //La función mostrarNombre es una función interna, una clausura.
            alert(nombre);//Usa la variable declarada en la función externa. 
        }
        mostrarNombre();
    }
    iniciar();

    //La función iniciar() crea una variable local llamada "nombre" y una función interna llamada "mostrarNombre()". Por ser una función interna, esta solo está disponible dentro del cuerpo de "iniciar()" Notemos a su vez que "mostrarNombre()" no tiene ninguna variable propia;pero, daddo que las funciones internas tienen acceso a las variables de las funciones externas, "mpstarNombre()" puede acceder a la variable "nombre" declarada en la función "iniciar()"

    //Cómo utilizar closure para construir una alcancía:
    function cuentaDeAhorro(montoInicial=0){
        let ahorro=montoInicial;

        function nuevoAhorro(dinero){
            ahorro= ahorro+dinero
            console.log(`mi ahorro es ${ahorro}`);
        }  
        return nuevoAhorro;  
    }
    const myAhorro=cuentaDeAhorro();

    myAhorro(63)
    myAhorro(5)
    



