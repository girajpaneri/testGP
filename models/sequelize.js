const path = require("path");
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join('../', 'config', 'config.json'))[env];


const sequelize = new Sequelize(config.database, config.username, config.password, config);

const userLoginInfo = sequelize.define("userLoginInfo", require('./users/userLoginInfo'));
const booking = sequelize.define("booking", require('./users/booking'));
const status = sequelize.define("status", require('./common/status'));
const source = sequelize.define("source", require('./common/source'));
const destination = sequelize.define("destination", require('./common/destination'));
const cab = sequelize.define("cab", require('./cab/cab'));

userLoginInfo.hasMany(booking, { foreignKey: 'userId' });
booking.belongsTo(userLoginInfo, { foreignKey: 'userId' });

source.hasMany(booking, { foreignKey: 'sourceId' });
booking.belongsTo(source, { foreignKey: 'sourceId' });

destination.hasMany(booking, { foreignKey: 'destinationId' });
booking.belongsTo(destination, { foreignKey: 'destinationId' });

cab.hasMany(booking, { foreignKey: 'cabId' });
booking.belongsTo(cab, { foreignKey: 'cabId' });

status.hasMany(booking, { foreignKey: 'statusId' });
booking.belongsTo(status, { foreignKey: 'statusId' });

userLoginInfo.hasMany(source, { foreignKey: 'userId' });
source.belongsTo(userLoginInfo, { foreignKey: 'userId' });

userLoginInfo.hasMany(destination, { foreignKey: 'userId' });
destination.belongsTo(userLoginInfo, { foreignKey: 'userId' });

module.exports = {
    sequelize, userLoginInfo, booking, status, source, destination, cab
}