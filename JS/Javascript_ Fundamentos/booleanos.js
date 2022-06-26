let isAtivo = true;
console.log(isAtivo)

isAtivo = false;
console.log(isAtivo)

isAtivo = 1;
console.log(isAtivo) // Note que nesse momento se trata de um número. 

/*Transformando um valor em (VERDADEIRO/FALSO): USANDO NEGAÇÕES: ! = not. 
 * ! usado par vezes = VERDADEIRO -> Dessa forma revela se é V ou F.
 *usado ímpar vezes =  FALSO -> Dessa forma revela o contrário do que é:
 *!(valorVerdadeiro) = false    !(valorFalso) = Verdadeiro
 */

console.log(!!isAtivo) // O número 1 retorna Verdadeiro
console.log(!isAtivo) // Retornou o contrário

isAtivo = 0;
console.log(!!isAtivo) // o número 0 retorna Falso
console.log(!isAtivo) // Retornou o contrário

// Quais valores retornam TRUE e quais retornam FALSE?

console.log("Valores que retornam VERDADEIRO: ")
console.log(!!4)
console.log(!!-1)// Todos os numeros inteiros são verdadeiros.
console.log(!!' ') // Uma string qualquer (exceto o vazio)
console.log(!![]) // Um array qualquer (incluindo o vazio)
console.log(!!{}) // Um objeto qualquer (incluindo o vazio)
console.log(!!Infinity)
console.log(!!(isAtivo = 1)) // Uma atribuição que retorne verdadeiro

console.log("Valores que retornam FALSO: ")
console.log(!!0)
console.log(!!'') // Um string vazio
console.log(!!null) // Nulo
console.log(!!NaN) // Not a Number
console.log(!!undefined) // Indefinido
console.log(!!(isAtivo = 0)) //uma atribuição que retorne falso

console.log('Operações lógicas: ')   
console.log((''|| 'epa' || 0)) // Exibe o primeiro valor verdadeiro
console.log(!!(''|| 'epa' || 0)) // Exibe verdadeiro se algum for verdadeiro
