// Valor literal - Uma informação vaga, pois não sei o que significa.
console.log("Caneta");
console.log(10);
console.log(6.4);
console.log(1.5);
console.log(7.9);

// Variável - usamos para guardar informações.
// Podemos definir com as palavras reservadas var e let.
// O Javascript é CASE SENSITIVE.
 var nome = "Caneta";
 var quantidade = 10;
 let preco = 6.4;
 let imposto = 1.5;
 let precoFinal = preco + imposto;
 console.log(nome);
 console.log(quantidade);
 console.log(preco);
 console.log(imposto);
 console.log(preco + imposto);
 console.log(precoFinal);

 let marca = " Bic";
 var nome = "Caneta Bic";
 nome = "Canet123a";
 //Note que podemos mudar o conteúdo depois que a variável está definida (var).

 console.log(nome + marca);
 marca = " Bic ergonomic";
 console.log(nome + marca);

 marca = " Bic esferographic";
 console.log(nome + marca);
 //Note que podemos mudar o conteúdo depois que a variável está definida (let).


