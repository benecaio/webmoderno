/*
    Um exemplo clássico do JS. 
*/
const funcs = []

for(var i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[6]()

// no âmbito de var, i não está em escopo de função e não foi declarada fora da estrutura de loop.