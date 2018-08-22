const express = require('express');
const router = express.Router();//tiny lego brick


// create new Event
router.post('/events', async (req, res, next) => {
    const { title, date, time } = req.body;
    try {
        const [event, created] = await Event.findOrCreate({ where: { email: email } });
        res.status(201).json({
            msg: "Saved New Event",
        }); 
    } catch (error) {
        next(error);
    }
});

module.exports = router;