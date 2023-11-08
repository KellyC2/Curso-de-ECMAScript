//SEPARADORES NUMÉRICOS: Los separadores numéricos ayudan a la leginilidad de cantidades con varias cifras. Se utiliza el caracter guion bajo(_) para aseparar las cifras, y no afecta la ejecución  del programa.  Lo ideal es separar cada 3 cifras para visualizar lso miles, millones, billones, etc.

// 🔽 Baja legibilidad
const numero1 = 3501548945
console.log( numero1 ) // 3501548945

// ✅ Alta legibilidad
const numero2 = 3_501_548_945
console.log( numero1 ) // 3501548945

const value=100_000_000_000;
console.log(value);