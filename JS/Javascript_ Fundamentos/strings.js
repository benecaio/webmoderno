/* String é um conjunto de caracteres enunciados por áspas duplas: " ", áspas simples: ' ' ou
 *crase: ` ` .
 *
 *Algumas funções que manipulam diretamente as Strings:                                      
 */
const escola = "Universidade de Brasília"
const nickname = "B3n3"

console.log(escola.charAt(4)) //Retorna caractere na posição desejada - Começando do 0!
console.log(escola.charAt(29)) // Retorna nulo pois não há essa posição na string.
console.log(nickname.charCodeAt(3)) // Retorna valor da tabela unicode do caractere "3"
console.log(nickname.indexOf("3")) //Se o caractere existir na variavel, exibirá a posição da primeira aparição na string.

console.log(escola.substring(1)) //A partir do índice até o fim (o 0 conta)
console.log(escola.substring(0,5)) /* (a,b) A partir do índice a e até o índice b 
(b não incluso). */

console.log('Estudo na '.concat(escola) .concat(' - DF')) /* Concatenação com literal
usando o .concat(). */

console.log('Estudo na ' + escola + " !") /*  Concatenação usando o + . No contexto de string 
 ele irá concatenar e no contexto de number ele vai somar! */

console.log(nickname.replace(3, "e")) // Substituição do caractere 3 por e.

console.log('Caio,Hugo,Rodrigo,Vinicius'.split(',')) /* Conversão de estrutura string
separada por vírgula em array particionando o array pela vígula*/

console.log('Caio.Hugo.Rodrigo.Vinicius'.split('.'))


