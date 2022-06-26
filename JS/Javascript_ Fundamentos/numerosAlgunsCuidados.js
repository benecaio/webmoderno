console.log(7/0.000000000001)
console.log(7/0) // Limites -> infinito. Existe um tipo chamado infinito.

console.log("10"/2)
/* String/ numero -> pega o conteúdo interno e verifica se pode ser convertido 
 * para string. Se sim a operação continua.
 */
console.log("10,2"/2) //NaN- Not a Number. Não pode operar não numéricos.
console.log("10.2"/2)

console.log('3' + 2) // Note que a operação faz sentido para uma string, logo irá concatenar !!!
console.log('3' - 2) // Note que a operação não faz sentido para uma string, logo irá operar !!!

console.log("Show!"*2) //NaN.
console.log(0.1 + 0.7) /* Veja a imprecisão devido uma especificação de pontos flutuantes
aplicada em JS. */


/* console.log(10.toString) .toString não deve ser usado com uma atribuição literal. 
 */
console.log((10.36766).toFixed(2)) // Já o .toFixed aceita atribuição literal.