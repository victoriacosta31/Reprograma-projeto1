const livros = require('../database')
const read= require('readline-sync')

const listarLivrosNaoLidos = () =>{
    const opcaoInicial = read.question('Deseja buscar os livros nao lidos? S/N').toUpperCase()

    if (opcaoInicial === 'S') {
        const livrosNaoLidos = livros.filter((livro) =>livro.leu === false)
        console.table(livrosNaoLidos)
    } else { console.log('Ok, fica pra próxima')}

}

module.exports =listarLivrosNaoLidos