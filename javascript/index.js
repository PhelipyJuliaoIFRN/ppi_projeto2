const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', ()=>{
    //depois
})

app.listen(prompt, ()=>{
    console.log(`O servidor está rodando na porta ${port}`)
})