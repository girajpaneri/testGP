const db = require('../models/sequelize');
const bcrypt = require('bcrypt');
var status = [
    { status: 'Success', Code: "SS" },
    { status: 'Cancelled', Code: "CN" }
];

var user = { mobileNo: "9799758757", email: "giraj.paneri@gmail.com", password: "pass@word1", isDeleted: false, };

var cab = [
    { name: "Auto", mobileNo: "9799758757", currentLocation:"Udaipur", lat: "24.447150", long: "73.775783", isDeleted: false, },
    { name: "Auto", mobileNo: "9878987988", currentLocation:"Bhinder", lat: "24.495897", long: "74.192718", isDeleted: false, },
    { name: "Mini", mobileNo: "9878766666", currentLocation:"Kanor", lat: "24.427145", long: "74.269673", isDeleted: false, },
    { name: "Mini", mobileNo: "8777766666", currentLocation:"Kharsan", lat: "24.593334", long: "74.032364", isDeleted: false, },
    { name: "Mini", mobileNo: "9888877878", currentLocation:"Bhatewar", lat: "24.615497", long: "74.010721", isDeleted: false, }
];


var isDevelopment = false;

module.exports.sync = () => {
    db.sequelize
        .sync({ force: isDevelopment })
        .then(() => {
            db.userLoginInfo.findAll({ raw: true }).then((res) => {
                console.log(res);
            });
            return;
        })
        .then(() => {
            if (isDevelopment) {
                bcrypt.hash(user.password, 10)
                    .then((hash) => {
                        user.password = hash;
                        db.userLoginInfo.create(user)
                            .then(() => {
                                console.log('User Created successfully.');
                            })
                            .catch((err) => {
                                console.log(err.message);
                            })
                    })
                    .then(() => {
                        return db.cab.bulkCreate(cab);
                    })
                    .then(() => {
                        return db.status.bulkCreate(status);
                    })
            }
        })        
        

}

