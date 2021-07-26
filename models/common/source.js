const Sequelize =require('sequelize');

module.exports={
    address:{
        type:Sequelize.STRING,
        allowNull:false
    }, 
    lat:{
        type:Sequelize.STRING,
        allowNull:false
    },
    long:{
        type:Sequelize.STRING,
        allowNull:false
    },
    isDeleted:{
        type:Sequelize.BOOLEAN,
        default:true
    }
}