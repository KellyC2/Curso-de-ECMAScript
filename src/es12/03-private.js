//Los métodos privados de clase consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral(#). Por defecto, las propiedades y métodos de una clase en JavScript son públicas, es decir, se puede acceder a ellos fuera de la clase.

class user{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    #speak(){
        return "hello"
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
        
    }
    get #uAge(){
        return this.age
    }
    set #uAge(n){
        this.age=n;
    }
}

const bebeloper=new user("David",15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge=20);



class Clase {
  #private(valor){
    console.log(valor)
  }
  
  public(valor){
    console.log(valor)
  }
}

const clase = new Clase()
clase.public("Hola")  // 'Hola'
clase.private("Hola") // TypeError: clase.private is not a function


