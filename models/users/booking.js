const Sequelize =require('sequelize');

module.exports={
    RideFee:{
        type:Sequelize.DECIMAL(10,2),
        allowNull:false
    },
    bookingDate:{
        type:Sequelize.DATE,
        allowNull:false
    }, 
    isDeleted:{
        type:Sequelize.BOOLEAN,
        default:true
    }
}