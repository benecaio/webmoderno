// Operadores que podem ser préfixados ou pós fixados em uma variável

let num1 = 1
let num2 = 2

num1++
// Pós-fixado: incremento +1
console.log(num1)

--num1
// Pré-fixado: decremento -1
console.log(num1)

// Existem precedência nos operadores unários pré-fixados!
console.log(++num1 === num2--) // Não use se possível!
// Note que houve primeiro a adição para depois comparar com o segundo argumento!

console.log(num1 === num2)
console.log(num1, num2)
// Os operadores unários funcionaram na comparação anterior!
