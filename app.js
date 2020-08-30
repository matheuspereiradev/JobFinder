const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.listen(3000, function(){
    console.log('express esta rodando na porta:'+3000)
})

app.use(bodyParser.urlencoded({extended:false}));

const db = require('./db/conexao')
//db
db
    .authenticate()
    .then(()=>{
        console.log('conectou ao banco')
    })
    .catch(err=>{
        console.log(err)
    })

//routes
app.get('/',(req, res)=>{
    res.send('funcionou alteradooooo 4')
})

//esse arquivo se for alterado nao aparece para aparecer tem q reinicar o servidor para resolver isso é criado
//"scripts": {
//    "dev": "nodemon app.js"
//  }

//e executa ao inves de node app.js executa assim npm run dev

//chamando as rotas da vaga
app.use('/vaga',require('./Routes/RouteVaga'))