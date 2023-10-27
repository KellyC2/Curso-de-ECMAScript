//Los objetos literales consiste en crear objetos a partir de variables sin repetir el nombre. 
    //Traditional way:Antes de ES6, para crear un objeto a partir de variables debìas hacerlo de la siguiente manera:
        //Ejemplo 1: datos vienen de una variable.
        const nombre="Kelly";
        const edad="25";
        const objeto={
            nombre:nombre,
            edad:edad,
        }
        console.log(objeto);

        //Ejemplo 2. Los datos vienen de argumentos de una funciòn.
        function newUser(user, age, country){
            return{
                user:user,
                age:age,
                country:country,
            };
        };
        console.log(newUser("kelly", 30, "PE"))
    //Con Objetos literales: Con los paràmetros de objeto puedes obviar la repeticiòn de nombres. JS crearà la propiedad a partir del nombre de la variable con su respectivo valor.
        
        //Ejemplo 1: con datos que provienen de un variable.
        const nom="Kelly";
        const ed=26;
        const objet={
            nom,
            ed,
        }
        console.log(objet);

        //Ejemplo 2: Con datos que provienen de argumentos de una funciòn:
        function nuevoUsuario(usuario, edad, pais){
            return {
                usuario,
                edad,
                pais,
            }
        }
        console.log(nuevoUsuario("gndx",35,"mx"));

    //El resultado es el mismo, pero sin la necesidad de repetir palabras. Puedes combinarlo con variable que su propiedad tienen un nombre diferente. 
        //ejemplo 1
        const name="Andres";
        const age=23;
        const EsteEsUnID=1
        const object={
            name,
            age,
            id:EsteEsUnID,
        }
        console.log(object);

        //ejemplo 2
        function nuevoUsuario(usuario, edad, pais, uID){
            return {
                usuario,
                edad,
                pais,
                id:uID
            }
        }
        console.log(nuevoUsuario("gndx",35,"mx",30));

