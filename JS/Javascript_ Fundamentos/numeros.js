const peso1 = 1.0
const peso2 = Number('2.0')

console.log(typeof(peso2))

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Verificador de inteiro Note que 1.0 é inteiro! 1!
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Apresentar n° de casas decimais selecionadas.
console.log(media.toString()) // Apresenta em tipo string
console.log(media.toString(2)) // Apresenta em binários
console.log(typeof media)   // Note que o tipo number continua.

console.log(typeof Number) // é uma função que verifica.
console.log(typeof media) // é um tipo.

