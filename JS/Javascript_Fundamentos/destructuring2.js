// Destructuring arrays:
// MUITO CUIDADO, a notação de construção de array é bem similar!
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10,7,15,18]
console.log(n1,n3,n5,n6)

const[, [, nota]] = [[, 8, 8], [9, 6, 8]] // Caso não usável mais possível.
console.log(nota)

