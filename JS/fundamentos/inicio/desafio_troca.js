/*
 *  O objetivo é fazer os valores serem trocados  
 *  quando os valores de a e b forem exibidos.
 *  depois da troca a = 94 e b = 7;
 */
let a = 7;
let b = 94;
let troca;

troca = a;
a = b;
b = troca;

console.log(a);
console.log(b);

// Um recurso do Javascript para a troca: 

[a,b] = [b,a]

console.log(a);
console.log(b);