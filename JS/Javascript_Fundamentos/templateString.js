// Template String é um jeito muito bom pra trabalhar com manipulação de string de maneira fácil.
// De forma prática e simples podemos montar strings cada vez mais robustas.
    
const nome = 'Rafaela'
const sobrenome = 'Gusmão'

// Note o a quantidade de trabalho que temos pra concatenar:
console.log(nome.concat(' ').concat(sobrenome))
const concatenacao = ' Olá ' + nome + ' ' + sobrenome + '!'

// Outro problema é que se não estiver na mesma linha será acusada uma exceção.

// Variáveis:
const template = `
    Olá
    ${nome}!`

// Vamos exibir ambos métodos para ver as diferenças:
console.log(concatenacao ,template)


// Expressões:
console.log(`1 + 1 = ${1+1}`)

// Variáveis e Expressões:
let a = 2
let b = 3 
console.log(`Soma de variaveis: a + b = ${a+b}`)

//Funções, metodos e etc:
const up = texto => texto.toUpperCase()
console.log(`Cuidado: ${up('cão bravo')}`)
