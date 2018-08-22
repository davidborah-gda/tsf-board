const express = require('express');
const router = express.Router();//tiny lego brick
const Metric = require("../models/metric");


// create new Metric
router.post('/metric', async (req, res, next) => {
    const { email, title, date, count } = req.body;
    try {
        const [metric, created] = await Metric.findOrCreate({ where: { email: email } });
        res.status(201).json({
            msg: "Saved New Admin Event"
        }); 
    } catch (error) {
        next(error);
    }
});

module.exports = router;