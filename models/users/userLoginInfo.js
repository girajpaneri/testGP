const Sequelize = require('sequelize');

module.exports={
    mobileNo:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    isDeleted:{
        type:Sequelize.BOOLEAN,
        default:false
    },
}