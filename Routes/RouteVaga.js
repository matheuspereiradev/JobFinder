const express = require('express')

const rota = express.Router();

const vaga = require('../Model/Vaga');

rota.get('/teste',(req,res)=>{
    res.send('funfou')
})

rota.post('/add',(req,res)=>{
    
    let{nmVaga,salario,empresa,email,novo,descricao}= req.body;

    vaga.create({
        nmVaga,salario,empresa,email,novo,descricao
    })
      .then(()=>{
          res.redirect('/')
      })
      .catch((erro)=>{
          console.log(erro)
      })

})


module.exports=rota