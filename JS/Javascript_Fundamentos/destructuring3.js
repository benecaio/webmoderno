// Destructuring em funções:

function rand({min=0,max=1000}){
    const valor = Math.random()*(max - min) + min
    return Math.floor(valor)
 // note que dentro de chaves{} é o operador destructuring, vamos passar um objeto e o retorno não precisa de vir com uma notação ponto para fazer o acesso 
}

// Nessa função usamos o operador destructuring e passamos um valor padrão
const obj = {max: 100, min: 70} // Passando o objeto;
console.log(rand(obj))

console.log(rand({min: 989})) // Passando apenas o mínimo;

console.log(rand({})) // Passando um obj vazio.