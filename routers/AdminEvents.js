const express = require('express');
const router = express.Router();//tiny lego brick
const adminEvent = require('./models/admin');


// create new Event
router.post('/api/admin', async (req, res, next) => {
    const {  eventTitle, date, time } = req.body;
    try {
        const adminEvent = new AdminEvent({ eventTitle, date, time });
        await adminEvent.save();
        res.status(201).json({
            msg: "Saved New Admin Event",
            user
        }); 
    } catch (error) {
        next(err);
    }
});

// get one AdminEvent by (_id) NEED to convert to email
router.get('/api/admin/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const adminEvent = await AdminEvent.find({ _id: id });
        res.status(200).json({
            adminEvents: adminEvents
        });
    } catch (error) {
        next(err);
    }
});

//update one Admin Event by id
router.put('/api/admin/:id', async (req, res, next) => {
    const { id } = req.params;
    const { eventTitle, date, time } = req.body;
    try {
        const updatedAdminEvent = await AdminEvent.findByIdAndUpdate(id, { eventTitle, date, time }, { new: true });
        res.status(200).json({
            msg: "Updated Admin Event Successfully",
            adminEvent: updatedAdminEvent
        });
    } catch (error) {
        next(err);
        
    }
});

module.exports = router;