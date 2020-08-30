const express = require('express')

const rota = express.Router();

const vaga = require('../Model/Vaga');

rota.get('/teste',(req,res)=>{
    res.send('funfou')
})

rota.post('/add',(req,res)=>{
    
    let{nmVaga,salario,empresa,email,novo}= req.body;

    vaga.create({
        nmVaga,salario,empresa,email,novo
    })
      .then(()=>{
          res.redirect('/')
      })
      .catch((erro)=>{
          console.log(erro)
      })

})


module.exports=rota