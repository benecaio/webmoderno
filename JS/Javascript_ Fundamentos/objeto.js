// Objetos em JS são os coleções chave(atributo) - valor

const prod1 = {} 
// Símbolo de objeto {} -> forma literal de criar um objeto. Note que ele está vazio.
console.log (prod1)

// Vamos criar os pares chave-valor dinamicamente:
prod1.nome = 'Smartphone Iphone 12'
prod1.preço = 5740.50
prod1['Desconto à vista'] = 0.43 // Forma de escrever com espaço - evite

console.log(prod1)

const prod2 = {
    nome : 'Casaco Corta-vento',
    preço : 125.90,
    obj: {
        cor1 : 'Vermelho',
            disponivel :  true 
        },
    obj2: {    
        cor2 : 'Preto',
            disponivel : false
        }
}

console.log(prod2)

// O formato de objeto não é JSON (Java Script Object NOTATION -> formato de texto).