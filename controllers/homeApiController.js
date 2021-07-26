const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = require('../models/sequelize');


module.exports.getNearByCabs = async (req, res, next) => {
   try {
      //current lat and long
      const cLat = req.body.cLat;
      const cLong = req.body.cLong;
      if (cLat != null && cLong != null) {

         const query = `SELECT *, ((ACOS(SIN(:cLat * PI() / 180) * 
                        SIN(cabs.lat * PI() / 180) + COS(:cLat * PI() / 180) * 
                        COS(cabs.lat * PI() / 180) * COS((:cLong - cabs.long) * PI() / 180)) * 180 / PI()) * 60 * 1.1515) 
                        as distance FROM cabs HAVING distance <= 5 ORDER BY distance ASC;`
         const records = await db.sequelize.query(query, {
            replacements: { cLat: cLat, cLong: cLong }, type: Sequelize.SELECT
         });
      
         return res.json({ cabs: records[0] });
      }
      return res.status(500).json({ errors: "Record not found." });
   }
   catch (err) {
      return res.status(500).json({ errors: err.message });
   }
}