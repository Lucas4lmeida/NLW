//Import packages/library
const express = require('express')
const path = require('path')
const pages = require('./pages.js')
//start Express
const server = express()
//Utilizando arquivos estáticos
server
.use(express.static('public'))

//Configurar Template Engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//Criando rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)

// Ligando o servidor
.listen(5500)
