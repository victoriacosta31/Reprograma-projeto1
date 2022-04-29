const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarRecomendados = require('./controllers/listarRecomendados')
const listarLivrosNaolidos = require('./controllers/listarLivrosNaoLidos')

const resposta = read.question(`
=========== Menu ==============

1 - CATEGORIA: Buscar Livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar Livros recomendados
4 - LISTA DE DESEJOS: Busca livros nao lidos

5 - SAIR

Digite um numero[1-5]:
`)

console.log(resposta)

// Quando a pessoa escolher a opção 1, eu quero que o js chame
//a função que vai estar no meu arquivo controllers/buscarLivros
switch (resposta){
    case '1':
        buscarLivros()
      // chamar a funcao buscarLivros
        break
    case '2':
        listarLivrosOrdenados()
     // chamar a funcao listarLivrosOrdenados
        break
    case '3':
        listarRecomendados()
    // chamar a funcao listarRecomendados    
        break
    case '4':    
        listarLivrosNaolidos()
    // chamar a funcao listarLivrosNaoLidos
        break        
     default:
         console.log('Fim do algoritmo')
         break    
}    



