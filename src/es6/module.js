const hello=()=>{
    console.log("hello");
}

export default hello;



export const add=(x,y)=>{  
    return x+y
}

const multiply=(x,y)=>{
    return x*y
}
export{multiply}

//con "as" puedes renombrar la variable, función. 