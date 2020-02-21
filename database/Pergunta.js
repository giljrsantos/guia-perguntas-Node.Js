const Sequilize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define('pergunta',{
    titulo:{
        type: Sequilize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequilize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() =>{
    console.log("Tabela Criada");
});

module.exports = Pergunta;