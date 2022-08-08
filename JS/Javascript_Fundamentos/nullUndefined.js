/*Diferença entre atribuição por referência e por atribuição:
 *Referência = Variável armazena o endereço que aponta onde (local da memória) que está aquela informação.
 *Atribuição = Variável armazena o valor que está no local de memória (tipos primitivos da linguagem).
 */

let valor //Variável declarada mas não inicializada. Não entra no caso de not defined, pois essa não declarada.
console.log(valor)

valor = null
console.log(valor) //Ausência de valor ou vazia.
//console.log(valor.toString()) // Valor possui atribuição nula, logo não é possivel executar.

const produto = {}
console.log(produto)
console.log(produto.preco)  //Note que produto é definido, apenas o preco que não -> undefined.

produto.preco = 50
console.log(produto)

produto.preco = undefined //NÃO FAÇA ISSO. Deixe apenas o programa setar esse tipo de informação da variável.
console.log(produto)

delete produto.preco
console.log(produto.preco)

produto.preco = null // Use esse tipo para uma informação que ainda não existe mas será usada.
console.log(produto)

console.log(!!produto.preco)    //produto.preço é definido? FALSE