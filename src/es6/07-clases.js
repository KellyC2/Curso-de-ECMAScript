//La clase son plantillas para crear objetos. Ellos envuelven datos con código en ese dato. Las clases crean objetos a traves del operador "new". Cada objeto tiene algunas propiedades (datos o métodos) añadidas por las clases. Las clases almacenan algunas propiedades que son usadas para interactuar con instancias. 

//Declaración d euna class
class Myclass{ 
    //Class body: dentro del cuerpo de una clase hay una gama de características disponibles:
    //1. CONSTRUCTOR:Quizá el trabajo más importante de una clase es actuar como una fábrica para objetos. Por ejemplo cuando usamos el constructor "date", esperamos que dé un nuevo objeto que represente los datos de fecha que pasamos y que luego podamos manipular con las instancias. En las clases las instancias son creadas por el constructor.
    
    constructor(){            
        //Constructor body
    }

    //2.INSTANCE FIELD:
    myField="foo";

    //3. INSTANCE METHODS:El poder de las clases es que ellos pueden ser usados como plantillas que automaticamente añaden metodos a las instancias. Por ejemplo para la instancia "fecha", tu puedes usar una gama de metodos pata obtener diferentes tipos de informacion de el valor de un solo dato. Tales como: año, mes, día de la semana, etc. 
    myMethod(){
        //myMethod body
    }

    //4.STATIC FIELD:
    static myStacticField="bar";

    //5.STATIC METHOD:
    static myStaticMethod(){
        //myStaticMethod body
    }

    //6. STATIC BLOCK:
    static{
        //static inicialization code
    }

    //Fields, methods, static fields, and static methods all have
    //"PRIVATE" FORMS: Es un identificador con el prefijo "#". El "#" es una parte muy importante del nombre
    #myPrivateField="bar";

}

//Construyendo una clase: Después que una clase ha sido declarada, puedes crear instancias de la clase con el operator "new"

const myInstance=new Myclass();
console.log(myInstance.myField);//foo
myInstance.myMethod();


//CONSTRUCTOR EXAMPLE:
class Color{
    constructor(r,g,b){
        //Assign the RGB values as a property of "this"
        this.values=[r,g,b];
    }
}//La sintaxis de constructor es exactamente igual a una función normal, lo cual significa que puedes usar otros parámetros como: "rest parameter".



//METHOD EXAMPLES:  Para nuestra clase "Color", vamos a añadir un metodo llamado "getRed", que va a retornar el valor de rojo .
class Color{
    constructor(r,g,b){
        this.values=[r,g,b];
    }
    getRed(){//METHOD EXAMPLE
        return this.values[0];
    }
}
const red=new Color(255,0,0);//INSTANCE EXAMPLE
console.log(red.getRed());

//--------------TEACHER EXAMPLE--------------------
class User{
    constructor(name, age){
        this.name=name; 
        this.age=age       
    }//constructor
    greeting(){
        return "Hello"
    } //metodo1

    speak(){
        return `${this.greeting()}  ${this.name}`;
    }//method2  
    
    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age=n;
    }

};

const gndx=new User();//Instancia1
console.log(gndx.greeting());

const bebeloper= new User();//Instancia2
console.log(bebeloper.greeting());

const david= new User("David");//Instancia 3
console.log(david.name);

const ana=new User("Ana");//Instancia4
console.log(ana.speak());

const kelly= new User("Kelly",15);
console.log(kelly.age);
console.log(kelly.uAge=27);


