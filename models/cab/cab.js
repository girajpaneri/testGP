const Sequelize =require('sequelize');

module.exports={
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    mobileNo:{
        type:Sequelize.STRING,
        allowNull:false
    },
    currentLocation:{
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