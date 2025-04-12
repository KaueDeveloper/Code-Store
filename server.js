const express = require('express');
const path = require('path');
const server = express();
const jsonfile = require('jsonfile');

//Requisição para cadastrar novo usuário
server.get("/newuser", (req, res) => {
    const id = req.query.id;
    const name = req.query.name;
    const lastname = req.query.lastname;
    const email = req.query.email;
    const password = req.query.password;
    const users = path.join(__dirname, 'datas', 'users.JSON');

    const newUser = {
        "id": id,
        "nome": name,
        "sobrenome": lastname,
        "email": email,
        "senha": password, 
        "dadosPessoais": {
        "telefone": "",
        "endereco": "",
        "cpf": ""
      }
    }

    jsonfile.readFile(users, (err, data) => {
        data.usuarios.push(newUser)

        jsonfile.writeFile(users, data, { spaces: 2}, () => {});
    });

    res.send()
})

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