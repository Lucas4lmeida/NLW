//Import packages/library
const express = require('express')
const path = require('path')
//start Express
const server = express()
//Utilizando arquivos estáticos
server
.use(express.static('public'))

//Configurar Template Engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//Criando um caminho
.get('/', (request, response) => {
    return response.render(path.join('index.html'))
})

// Ligando o servidor
server.listen(5500 )
