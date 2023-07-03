//Import packages/library
const express = require('express')
//start Express
const server = express()

//Criando um caminho
server.get('/', (request, response) => {
    return response.send('Oi direto do backend')
})

// Ligando o servidor
server.listen(5500 )
