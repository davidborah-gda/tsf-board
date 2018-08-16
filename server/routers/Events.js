const express = require('express');
const router = express.Router();//tiny lego brick
const Event = require('./models/event');


// create new Event
router.post('/api/events', async (req, res, next) => {
    const {  email, title, date, count } = req.body;
    try {
        const user = new Event({ email, title, date, count });
        await user.save();
        res.status(201).json({
            msg: "Saved New Event",
            user
        }); 
    } catch (error) {
        next(err);
    }
});

// get one Event by (_id) NEED to convert to email
router.get('/api/events/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const users = await Event.find({ _id: id });
        res.status(200).json({
            events: events
        });
    } catch (error) {
        next(err);
    }
});

//update one Event by id
router.put('/api/events/:id', async (req, res, next) => {
    const { id } = req.params;
    const { email, title, date, count } = req.body;
    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, { email, title, date, count }, { new: true });
        res.status(200).json({
            msg: "Updated Event Successfully",
            event: updatedEvent
        });
    } catch (error) {
        next(err);
        
    }
});

module.exports = router;