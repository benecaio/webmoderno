/*Estrutura de controle IF (SE): Se a condição (dentro) for satisfeita ou VERDADEIRA {bloco} será lido, em sequência:
*/

function soBoaNoticia (nota){
    if (nota >=7 ){
        console.log('Aprovado com nota: '+ nota)

    }
}

soBoaNoticia(8.1)
soBoaNoticia(5.9)

//Vamos agora investigar como a linguagem trata os argumentos que são booleanos:
function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})

