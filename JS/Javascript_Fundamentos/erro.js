/*Tratamento de erros: TRY / CATCH / THROW / FINALLY
Utiliza-se esses artifícios para tratar possíveis erros:
*/

function tratarErrorELancar(erro){
    //throw new Error('mensagem de erro!!')
    //throw 10
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
    // Aqui faremos o lançamento com base no erro. Pode ser uma mensagem de erro, string, número, objeto...
}

function imprimirEmCaixaAlta (obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!!!!')
        // Nesse bloco de código estamos prevendo um possível erro gerando uma exceção.
    } catch (e) {
        tratarErrorELancar(e)
        // Apartir da exceção o prosseguimento será esse bloco. Trate o erro aqui ou mensagem de erro.
        // e = erro 
    } finally {
        console.log('final')
        // Aqui faremos o lançamento independente se houver erro ou não.
    }

}

const obj = {name : 'Caio Benevides'}
imprimirEmCaixaAlta(obj)

