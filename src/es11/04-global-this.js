//OBJETO GLOBAL PARA CUALQUIER PLATAFORMA:
//El motor de JS. aquel que compila tu archivo y lo convierte en código que entiende el computador. al iniciar la compilación crea un pbjeto global. El objeto global proporciona funciones y variables propias e integradas en el lenguaje o el entorno. Dependiendo la plataforma, este objeto global tendrá un nombre diferente. 
//En el navegador el objeto global es "window",  para Node.js es "global", y así para cada entorno. Sin embargo, en Node.js no podrás acceder a "wondow", ni en el navegador podrás acceder a "global".
//Para estandarizar el objeto global se creó "globalThis" un objeto compatible para cualquier plataforma.

// Ejecuta el siguiente código y observa que muestra
console.log(window)
console.log(globalThis)

// En el navegador
window === globalThis // true

// En Node.js
global === globalThis // true


console.log(global === globalThis);