const Sequelize  = require('sequelize')

const db = require('../db/conexao')

const Vaga= db.define('vagas',{
    nmVaga:{
        type:Sequelize.STRING
    },
    salario:{
        type:Sequelize.STRING
    },
    empresa:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    novo:{
        type:Sequelize.INTEGER
    },
    descricao:{
        type:Sequelize.STRING
    }
})

module.exports=Vaga