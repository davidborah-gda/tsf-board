const express = require('express');
const router = express.Router();//tiny lego brick



// create new Event
router.post('/admin', async (req, res, next) => {
    const {  eventTitle, date, time } = req.body;
    try {
        res.status(201).json({
            msg: "Saved New Admin Event"
        }); 
    } catch (error) {
        next(err);
    }
});

// get one AdminEvent by (_id) NEED to convert to email
router.get('/admin/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        res.status(200).json({
            msg: "stuff"
        });
    } catch (error) {
        next(err);
    }
});

//update one Admin Event by id
router.put('/admin/:id', async (req, res, next) => {
    const { id } = req.params;
    const { eventTitle, date, time } = req.body;
    try {
        
        res.status(200).json({
            msg: "Updated Admin Event Successfully",
        });
    } catch (error) {
        next(err);
        
    }
});

module.exports = router;