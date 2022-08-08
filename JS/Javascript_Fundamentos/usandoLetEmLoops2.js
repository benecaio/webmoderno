/*
    Um exemplo clássico do JS. 
*/
const funcs = []

for(let i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[6]()

// No âmbito de var, i não está em escopo de função e não foi declarada fora da estrutura de loop.
// Responde o valor final de i no array.