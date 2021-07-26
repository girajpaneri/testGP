const Sequelize = require('sequelize');
const db = require('../models/sequelize');

module.exports.bookCab = async (req, res) => {
   try {
      transaction = await db.sequelize.transaction();

      const sourceDate = {
         id: req.body.source.id == "" ? 0 : req.body.source.id,
         address: req.body.source.address,
         lat: req.body.source.lat,
         long: req.body.source.long,
         userId: req.user.id,
         isDeleted: false,
         createdAt: new Date(),
         updatedAt: new Date(),
      }
      const sour = await db.source.create(sourceDate, { transaction })

      const destinationsDate = {
         id: req.body.destination.id == "" ? 0 : req.body.destination.id,
         address: req.body.destination.address,
         lat: req.body.destination.lat,
         long: req.body.destination.long,
         userId: req.user.id,
         isDeleted: false,
         createdAt: new Date(),
         updatedAt: new Date(),
      }
      const dest = await db.destination.create(destinationsDate, { transaction })

      const bookingData = {
         id: req.body.id == "" ? 0 : req.body.id,
         cabId: req.body.cabId,
         RideFee: req.body.RideFee,
         bookingDate: new Date(),
         sourceId: sour.id,
         destinationId: dest.id,
         statusId: 1, //req.body.statusId,
         userId: req.user.id,
         isDeleted: false,
         createdAt: new Date(),
         updatedAt: new Date(),
      }

      await db.booking.create(bookingData, { transaction });

      await transaction.commit();

      return res.status(200).json({ message: 'Your booking is success' })


   } catch (err) {
      await transaction.rollback();
      return res.status(500).json(err.message);
   }
}

module.exports.getYourRides = (req, res, next) => {
   const userId=parseInt(req.params.id);
   db.booking.findAll({
      where: {
         userId: userId,
         isDeleted: false
      }
   })
      .then((rides) => {
         if (rides.length > 0) {
            return res.json(rides);
         }
         else {
            return res.status(500).json({ errors: "Record not found" });
         }

      })
      .catch((err) => {
         return res.status(500).json({ errors: err.message });
      })
}