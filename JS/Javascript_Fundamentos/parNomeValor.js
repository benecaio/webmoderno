// Par nome/valor

// Note o contexto (escopo) em que cada variável foi criada em seu programa.

const saudacao = 'Iae aliado'   // Contexto léxico 1
// Se usasse o var ou o let haveria uma sobreescrição no valor da variável.

function exec(){
    const saudacao = "Olá!" // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de  pares nome/valor:
const cliente = {
    nome: 'Caio',
    idade: 26,
    peso: 80,
    endereco:{
        logradouro: 'QI 416',
        referencia: 'HRSAM'
    } 
}

console.log (saudacao)
console.log(exec())
console.log (cliente)