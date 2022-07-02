{
    {
        {
            {
                var sera = 'Será!?'
                
                console.log(sera)
            }
        }
    }
}

console.log(sera)
/* A variável var é visível dentro de um bloco de código que não seja uma função, será visível dentro e fora do bloco {} - Variável GLOBAL.
*/

function teste(){
    var local = 123
    console.log(local)
}

teste()
//console.log(local) - Note que a variável local não foi vista fora do escopo da função.

// Evite variáveis que vão para o escopo global. Sobreescrita da variável pode ser um problema na sua aplicação

// Variável var tem 2 escopos: Global ou Função.



