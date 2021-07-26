const Sequelize =require('sequelize');

module.exports={
    status:{
        type:Sequelize.STRING,
        allowNull:false
    }, 
    isDeleted:{
        type:Sequelize.BOOLEAN,
        default:true
    }
}