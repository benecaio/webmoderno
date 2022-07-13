// O conceito de Hoisting: Uma variável declarada como VAR, sofre hoisting sendo vista antes de ser declarada.
// Sempre dê preferência para a declaração antes do uso.
console.log ('a = ',a)
//Note que não houve valor atribuído, mas ela já existe no programa.

var a = 2
console.log ('a = ',a) 

function teste(){
    console.log('b = ',b)
    var b = 13
    console.log('b = ',b)
}

teste()

//console.log('c = ',c)

let c = 11243
console.log('c = ',c)
