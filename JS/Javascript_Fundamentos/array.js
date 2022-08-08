/* Array em JS: - VETOR (1D) ou MATRIZ (2D ou +)
 * Agrupamento de multiplos valores em uma única estrutura, com acesso fácil em um único 
 * identificador. Elementos com índice a partir do 0.
 * Array heterogêneo, ou  seja, de tamanho não fixo, pode aumentar ao longo do programa (flexível).
 * Seus valores podem ser de tipos diferentes a cada índice.
 * OBS.: O tipo de array em JS é OBJETO!!!!  
 */

const valores = [7.7, 1.2, 4.6, 9.3]

console.log(valores[0],valores[3]) //Exibindo posições 0 e 3
console.log(valores[4]) // A posição não existe = indefinido

valores[4]= 19.3 // Atribuindo valor para uma  posição nova
console.log(valores)

valores[0] = false // Redefinindo valor para uma posição
console.log(valores)

valores.push ({id: 3}, null, 'Caio') // Adicionando posições nessa ordem
console.log(valores)

console.log(valores.pop()) // Removendo última posição. Note que o array ficou sem essa posição
console.log(valores)

delete valores [0] // Removendo o valor da posição informada. Note que o array tem o mesmo tamanho.
console.log(valores)
valores [0] = 44

delete valores [6]
console.log(valores)


console.log(typeof valores) // O tipo array = object!