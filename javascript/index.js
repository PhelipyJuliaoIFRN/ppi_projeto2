// Importa o Express para criar o servidor
const express = require('express')
// Importa o Handlebars para criar páginas HTML dinâmicas
const exphbs = require('express-handlebars')
// Cria a aplicação usando o Express
const app = express()
// Define a porta onde o servidor vai funcionar
const port = 3000
// Configura o Handlebars como mecanismo de visualização
app.engine('handlebars', exphbs.engine())
// Define o Handlebars como view engine do projeto
app.set('view engine', 'handlebars')

// Cria uma rota para a página inicial "/"
app.get('/', (req, res)=>{
    // Cria um objeto com informações do usuário
    const user = {    
        name: "Tiago",
        surname: "Barreto",
        age: 30
    }
    // Cria uma variável com um texto
    const palavra = "Jorge Luiz de Medeiros e Araujo LTDA"
    // Define se o usuário está autenticado
    const auth = true
    // Renderiza a página home e envia os dados para ela
    res.render('home', {user, palavra, auth})
})

// Inicia o servidor na porta definida
app.listen(port, ()=>{
    // Mostra uma mensagem no terminal quando o servidor iniciar
    console.log(`O servidor está rodando na porta ${port}`)
})