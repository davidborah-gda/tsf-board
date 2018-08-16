const express = require('express');
const router = express.Router();//tiny lego brick


// create new Event
router.post('/api/events', async (req, res, next) => {
    const {  email, title, date, count } = req.body;
    try {
        
        res.status(201).json({
            msg: "Saved New Event",
        }); 
    } catch (error) {
        next(error);
    }
});

// get one Event by (_id) NEED to convert to email
router.get('/api/events/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        res.status(200).json({
            events: events
        });
    } catch (error) {
        next(error);
    }
});

//update one Event by id
router.put('/api/events/:id', async (req, res, next) => {
    const { id } = req.params;
    const { email, title, date, count } = req.body;
    try {
        
        res.status(200).json({
            msg: "Updated Event Successfully",
        });
    } catch (error) {
        next(error);
        
    }
});

module.exports = router;