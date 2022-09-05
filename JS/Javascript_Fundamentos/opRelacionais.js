// JS é fracamente tipado, existem formas diferentes de comparação;

// Comparação usando operadores relacionais resulta em (VERDADEIRO / FALSO);

// Detalhe: comparação de valores entre tipos diferentes, ou se a comparação é necessariamente do mesmo tipo.

// Dê preferência ao === (estritamente igual) pois não ignora a diferença entre tipos.

console.log('1)', '1' == 1) // compara valores em igualdade

console.log('2)', '1' === 1) // compara valor e tipo em igualdade

console.log('3)' ,'3' != 3) // compara valores em desigualdade

console.log('4)', '3' !== 3) // compara valor e tipo em desigualdade

console.log('5', 3 < 2)
console.log('6', 3 > 2)

console.log('7', 3 <= 2)
console.log('8', 3 >= 2)

// Note que Date(0) é a data padrão (referência) do JS: 01/01/1970
const d1 = new Date(0)
const d2 = new Date(0)

// Variável de referência, estamos comparando o ENDEREÇO DE MEMÓRIA!    
console.log('9)', d1 === d2)
console.log('10', d1 == d2)

console.log('11)', d1.getTime() == d2.getTime()) 
console.log('12)', d1.getTime() === d2.getTime()) 
// note que esse método está retornando um number -> comparação entre números.

console.log('13', undefined == null)
console.log('14', undefined === null)
