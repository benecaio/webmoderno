// A notação . serve para acessar membros de uma função, ou de um objeto.

console.log(typeof console)
console.log(Math.ceil(6.7))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'BOLA' método também valido.

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome //O parametro será atribuido em um atributo ficará visível (public).
    this.exec = function(){
        console.log ('Exec.....')
    }
}

const Obj2 = new Obj('Caio')
const Obj3 = new Obj('Vinicius')
console.log(Obj2)
console.log(Obj2,Obj2.nome,Obj2.exec)
console.log(Obj3,Obj3.nome)

Obj2.exec()