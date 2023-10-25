/* Function arrow es una alternativa compacta a la expresiòn de function, pero es limitada y no se puede usar en todas las situaciones*/ 



//Clasical or tradictional method to call function
function square (num){
    return num*num;
}
square();

//function arrow
const square = (num)=>{
    return num*num;
}

//We can also skip the handlebars and return
const squareWithSimpleArrow=num=>num*num;

