//---------DESESTRUCTURACIÒN----------
// La desestructuracoòn(destructuring) consiste en extraer valores de arrays o propiedades de objetos en distintas variables.
//Existen dos tipos de expresiones de asignaciòn de desestructuraciòn. 1. las que trabajan con arrays y 2 las que trabajan con objetos. 

//DESESTRUCTURACIÒN DE OBJETOS:La desestructuraciòn de objetos implica extraer las propiedades de un objeto en variables mediante el mismo nombre de la propiedad del objeto con la siguiente sintaxis. 
        const objeto ={
            prop1:"valor1",
            prop2:"valor2",
            prop3:"valor3",
        }
        //desestructutaciòn
        const {prop1,prop2,prop3}=objeto
        console.log(prop1, prop2, prop3);

    //Traditional way:Antes de ES6, necesitabas acceder al objeto con la conotaciòn punto y corchetes por cada propiedad que se necesita y asignar ese valor a una variable diferente.
        var usuario={
            nombre:"Andres",
            edad: 42,
            plataforma: "Platzi"
        }
        var nombre=usuario.nombre// usuario["nombre"]
        var edad=usuario.edad//usuario["edad"]
        var plataforma=usuario.plataforma// usuario["plataforma"]
        console.log(nombre);
        console.log(edad);
        console.log(plataforma);
    //DESESTRUCTURACIÒN: Con la desestructuraciòn puedes realizar lo mismo, pero en una sola lìnea, provocando que el còdigo sea màs legible y amigable.
        //Ejemplo 1
        const usuario={
            nombre:"Kelly",
            edad:30,
            plataforma:"Platzi",
        }
        const {nombre, edad, plataforma}=usuario
        console.log(nombre)
        console.log(edad)
        console.log(plataforma)


        //Ejemplo 2:
        let user= {username:"Kelly", age:34};
        let {username, age}=user;
        console.log(username, age);
    //Cambiar el nombre de las variables con la desestructuraciòn: Si no te agrada el nombre de la propiedad del objeto, puedes cambiarlo ustilizando la siguiente sintaxis:
        const miObjeto={
            propiedad1: "valor1",
            propiedad2: "valor2",
            propiedad3:"valor3",
        }
        //Desestructuraciòn:
        const{propiedad1:newProp1, propiedad2:newProp2, propiedad3:newProp3}=miObjeto
    //Ejemplo:
        const menu={
            lunes:"lentejitas",
            martes:"Estofado",
            miercoles:"Tallarin",
            jueves:"chaufa de quinua",
            viernes:"frijoles"
        };
        const{lunes:monday, martes:tuesday, miercoles:wednesday, jueves:thursday, viernes:friday}=menu;
        console.log(monday);//lentejita    
        console.log(thursday);// chaufa de quinua
        console.log(viernes);//Uncaught referenceError
        //Ojo debes tener en cuenta que no solo cambias el nombre la propiedad sino estables las propiedades del nuevo objeto, es decir, si no consideraste cambiar el nombre de la ultima propieda y no lo digitas dentro de la desestructuraciòn, ya no se tomarà en cuenta esa propiedad. 

    //Desestructuraciòn en paràmetros de una funciòn: Si envìas un objeto como argumento en la invocaciòn  a la declaraciòn de una funciòn , puedes utilizar la desestructuraciòn en los paràmetros para obtener los valores directamente. Ten en cuenta que el nombre debe ser igual a la propiedad del objeto. 
        const cliente={nombre:"Andres", edad:23, plataforma:"Platzi"};
        function mostrarDatos({nombre, edad, plataforma}){
            console.log(nombre,edad, plataforma)
        }
        mostrarDatos(cliente);


//DESESTRUCTURACIÒN DE ARRAYS:La desestructuraciòn de arrays consiste en extraer los valores de un array en variables, utilizando la misma posiciòn del array con una sintaxis similar a la desestructuraciòn de objetos. 
        //Ejemplo1:
        const array=[1,2,3,4,5];
        //Desestructuraciòn
        const[uno,iskay, three]=array
        console.log(uno);
        console.log(iskay);
        console.log(three);

        //Ejemplo2:
        let fruits=["apple", "Banana", "grapes", "Cherry"];
        let [f1, f2, f3, f4]=fruits;
        console.log(f1,f2, fruits[2],fruits[3]);


    //Desestructuración para valores retornados de una función: Cuando una función retorna un array, puedes guardarlo en una variable. Por ende, puedes utilizar la desestructuración para utilizar por separado de manera legible.
    //Ejemplo1: En el siguiente ejemplo, la función useState retorna un array con dos elementos: un valor y otra función actualizadora.
    function useState(value){
        return [value, updateValue()]
    };
    //Sin desestructuración
    const estado=useState(3);
    const valor=estado[0];
    const actualizador=estado[1];
    //Con desestructuración
    const [value,updateValue]=useState(3);




