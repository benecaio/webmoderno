// Função sem retorno:
 function imprimirSoma (a,b){
    console.log (a+b)
}

imprimirSoma(2,3)
imprimirSoma(2) // O segundo parâmetro é undefined. Resultando em Not a Number NAN.
imprimirSoma(1,2,3,4,5) //Soma apenas os 2 primeiros como está na função.
imprimirSoma() // Os dois parâmetros é undefined. Resultando em NAN.

//Função com retorno:
function soma (a,b=0){
    // Note que há um valor padrão no parâmetro b. 
    return a+b
}

console.log(soma(2,3))