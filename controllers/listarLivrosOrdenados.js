const livros = require('../database')
const read= require('readline-sync')

const listarLivrosOrdenados = () =>{
    const opcaoInicial = read.question('Deseja ordenar livros por quantidade de páginas? S/N').toUpperCase()

    if (opcaoInicial === 'S') {
     const livrosOrdenados = livros.sort((a, b) => a.paginas-b.paginas)
    console.table(livrosOrdenados)   
    } else { console.log('Ok, fica pra próxima')}
} 

module.exports = listarLivrosOrdenados