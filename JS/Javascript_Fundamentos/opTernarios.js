/* Os operadores ternários possuem 3 operandos:
 1ª parte) Operadores relacionais;
 2ª parte) Se verdadeiro o primeiro valor será atribuído;
 3ª parte) Se falso o segundo valor será atribuido
 O operador ternário: ?
*/
 
const resultado = nota => nota>=7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6,5))

// Note que a função arrow permite que essa expressão seja bem curta, sem um corpo e retorno!

 