/* Operador Destructuring:
 Retira informações da estrutura;
 Recurso novo no ES2015.
 */

const pessoa = {
    nome: 'Caio',
    idade: 26,
    endereco: {
        logradouro: 'QI',
        numero: 416
    }
}

// Desestruturando OBJETOS: Para extrair informações de um objeto: const {atr1, atr2} = de qual objeto 

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome:n, idade:i} = pessoa
console.log(n,i) //atribuindo variáveis para os dados descontruídos

// Posso solicitar um retorno padrão: const {atr3,atr4 = padrão } = obj
const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)


// Acessando objeto de objeto: const {obj2:{atr1_obj2}} = obj1
// Verifique se o dado aninhado existe, caso contrario resulta em erro.
const {endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
