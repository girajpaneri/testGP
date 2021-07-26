const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
const db = require('../models/sequelize');

module.exports.Login = async (req, res, next) => {
    try {
        const userData = {
            mobileNo: req.body.mobileNo,
            password: req.body.password
        }
        const response = await db.userLoginInfo.findOne({
            where: { mobileNo: userData.mobileNo, isDeleted:false }
        })
        if (!response) {
            return res.status(401).json({ message: 'Invalid mobile number' });
        }
        const passTrue = await bcrypt.compare(userData.password, response.password);
        if (!passTrue) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign( {id: response.id}, 'pass@word1', { expiresIn: 60 * 60});
        var user = {
            id: response.id,
            token: token
        };
        return res.json({ user: user });

    }
    catch (err) {
        return res.status(500).json(err.message);
    }
}
