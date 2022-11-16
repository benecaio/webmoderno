/*Estrutura de controle IF (SE): Se a condição (dentro) for satisfeita ou VERDADEIRA {bloco} será lido, em sequência:



OBS.: 1) Se após o IF não houver um par de chaves {}, esse if será lido apenas 1 linha respeirará esse IF! Consequentemente o restante do código será lido.
*/
function teste1(num){
    if(num>7)
    console.log('teste1: ',num)

    console.log('FINAL')
}

teste1(8)
teste1(6)


// OBS.: 2) NÃO USE PONTO E VÍRGULA (;) COM AS ESTRUTURAS DE CONTROLE.
function teste2(num){
    if(num>7)
        ;
    {
    console.log('teste2: ',num)
    }
}

teste2(8)
teste2(6)
