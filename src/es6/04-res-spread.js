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


// -------------SPREAD OPERATOR---------------
//El operador de propagación(spread operator), como su nombre lo dice, consiste en propagar o expandir los elementos de un iterable, ya sea un array o string utilizando tres puntos(...) dentro de un array.

    //Vamos a expandir el string "HOLA" en varios elementos.
        const array1=[..."HOLA"];
        console.log(array1);//["H","O","L", "A"]

    //Vamos a expandir un array:
        const array2=[...array1];
        console.log(array2);//["H","O","L", "A"]. En este ejemolo hemos creado otro array con los valores del primero. Explicamos en otro ejemplo los cuidados a tener en cuenta. 

    //También se utiliza para objetos
        let person={name:"Oscar", age:30};
        let country="MX";
        let data={...person, country};
        console.log(data);

    //Copiando arrays con el operador de propagación:Para realizar una copia de un array, deberás tener cuidado de la referencia en memoria. Los arrays se guardan en una referencia en la memoria del computador, al crear una copia, este tendrá la misma referencia que el original. Debido a esto. si cambias algo en la copia, tambien lo harás en el original.

        //Traditional Way
        let originalArray=[1,2,3,4,5];
        let copyArray=originalArray;
        copyArray[0]=0;
        console.log(copyArray);//[ 0, 2, 3, 4, 5 ]
        console.log(originalArray);//[ 0, 2, 3, 4, 5 ]
    
        //Para evitar la modificación del array original, utilizamos el operador de propagación para crear una copia del array que utilice una referencia en memoria diferente al original. 

        //Spread operator
        let names=["Maria", "Ana","Antonia", "Mauricio"];
        let womanNames=[...names];
        womanNames[3]="Anastasia"
        console.log(names);// [ 'Maria', 'Ana', 'Antonia', 'Mauricio' ]
        console.log(womanNames);// [ 'Maria', 'Ana', 'Antonia', 'Anastasia' ]
    //Uniendo arrays y añadir elementos con el operador de propagación:Para unir dos arrays con el operador de propagación, simplemente debes separarlos por comas en un array. 
        let serie1=[1,2,3];
        let numero=4;
        let serie2=[5,6,7];
        let todoJunto=[...serie1, numero, ...serie2];
        console.log(todoJunto);//[ 1, 2, 3, 4, 5, 6, 7 ]


//-----------------REST------------------
//El rest operator es usado solo en argumentos de una función y para desestructurar. 
//El parámetro rest consiste agrupar el residuo de elementos mediante la sintaxis de tres puntos(...) seguido de una variable que contendrá los elementos en un array.
    //1. La primera forma de usar rest operator es para aceptar un número infinito de argumentos  en una función y los agrupa como un array. 
        //Ejemplo1: En este ejemplo puedes visualizar la función sumar que tiene cinco argumentos que son representados por el rest operator en la funcion.
            function sumar(...numbers){
                console.log(numbers);
            };
            sumar(1,2,3,4,5,6,7);
            //Ejemplo 2
            function hola(first, second, ...rest){
                console.log(first, second);
                console.log(...rest);
            }
            hola("lo", "ves", " desde aqui", "pertenece", "al array");
    //2. La segunda forma de usar rest operator es para agrupar los elementos residuales o restantes en un array:
        //Ejemplo: 
            const [primer, segundo, ...restante]=[1,2,3,4,5,6,7];
            console.log(restante);

    //3. la tercera forma de uso del rest operator es para agrupar propiedades restantes en un objeto.
         //Ejemplo:
            const estudiante={
                name:"Lucas",
                age: 38,
                city:"London"
            }

            const{name, ...otherValues}=estudiante;
            console.log(otherValues);//{ age: 38, city: 'London' }

//El parámetro rest agrupa el residuo de elementos y siempre debe estar en la última posición, mientras que el operador de propagación expande los elementos de un iterable en un array y no importa en que lugar esté situado. 
