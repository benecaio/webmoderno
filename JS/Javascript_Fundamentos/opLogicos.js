/*TABELA VERDADE:  
- Ambos V = V
V e V -> VERDADEIRO
V e F -> FALSO
F e ? -> FALSO

- Um ou outro V = V
V ou ? -> VERDADEIRO
F ou V -> VERDADEIRO
F ou F -> FALSO

- Diferentes = V
V xor V -> FALSO
V xor F -> VERDADEIRO
F xor V -> VERDADEIRO
F xor F -> FALSO

- Negação lógica = inverte
!V -> FALSO
!F -> VERDADEIRO
*/

/* Exemplo: Vou fazer 2 trabalhos: T1 na terça-feira e T2 na quinta-feira. Vou no Shopping no fim de semana: 
Se o T1 E T2 der certo, no fds vc vai -> Comprar uma TV 50 pol. E tomar sorvete: Operador E;
Se o T1 ou T2 der certo, no fds vc vai -> Comprar uma TV de 32 pol. E tomar sorvete: Operador OU exclusivo;
Se o T1 ou T2 NÃO der certo, no fds vc vai -> Ficar em casa saldável!!
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    // Note que a simbologia || = OU. Confere bit a bit. 
    const comprarTv50 = trabalho1 && trabalho2
    // Note que a simbologia && = E.
    // Operadores de curto circuito: A partir do primeiro dado, se a resposta for contrária ao preciso não verifica a outra variável.

    // const comprarTv32 = !!(trabalho1 ^ trabalho2)
    // Note que a simbologia ^ = Ou exclusivo, Confere de bit a bit
    
    const comprarTv32 = trabalho1 != trabalho2
    // Operador de diferença;
    
    const manterSaudavel = !comprarSorvete

    /* JAVASCRIPT -> Conceito chave e valor nas coleções.
    O novo recurso do JS 2015: Atribuindo chave e valor implicitamente ex: comprarTv50 = const comprarTv50.
    */
    return {comprarTv50, comprarTv32, comprarSorvete, manterSaudavel}
}
console.log("Caso 1:")
console.log(compras(true, true))

console.log("Caso 2:")
console.log(compras(true, false))

console.log("Caso 3:")
console.log(compras(false, true))

console.log("Caso 4:")
console.log(compras(false, false))