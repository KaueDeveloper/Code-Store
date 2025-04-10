const express = require('express');
const path = require('path');
const server = express();

server.use(express.static('public'));

//Rotas das páginas do ecommerce
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'login.html'));
});

server.get('/cadastrar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'register.html'));
})

server.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'admin.html'));
})

//Rotas de arquivos JSON
server.get('/database/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'datas', 'users.JSON'));
})

server.get('/database/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'datas', 'products.JSON'));
})

server.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
});