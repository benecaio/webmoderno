/*
No contexto de let, as variáves têm apenas escopos possíveis: 
A variável é visível apenas no bloco que se encontra.
Note que se uma variável let for chamada e ela não existir nesse escopo haverá uma procura no escopo (bloco) que o abrange.

A variável let verifica no bloco inteiro se a variável existe. Não podendo ser acessada antes da sua inicialização.
*/

let numero = 10
let numero2 = 20

console.log('numero =', numero, 'numero2 =', numero2)
{
    console.log('dentro:',numero)
    let numero2 = 30
    console.log('dentro:',numero2)
}

console.log('fora:',numero2)