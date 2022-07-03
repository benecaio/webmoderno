/*
No contexto de var, as variáves têm apenas 2 escopos possíveis: 
GLOBAL ou dentro de uma função (método).
Note que os encapsulamentos {} não vão conter a sobrescrição de uma variável.
*/

var numero = 1
{
    var numero = 2
    console.log('dentro:',numero)
}

console.log('fora:',numero)