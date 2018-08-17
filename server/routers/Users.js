const express = require('express');
const router = express.Router();//tiny lego brick


// create new user
router.post('/users', async (req, res, next) => {
    const { email, name, preferences, otherSuccess } = req.body;
    try {
        res.status(201).json({
            msg: "Saved New User",
            user
        }); 
    } catch (error) {
        next(err);
    }
});

// get one user by (_id) NEED to convert to email
router.get('/users/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        
        res.status(200).json({
            users: users
        });
    } catch (error) {
        next(err);
    }
});

//update one user by id
router.put('/users/:id', async (req, res, next) => {
    const { id } = req.params;
    const { email, name, preferences, otherSuccess } = req.body;
    try {
        
        res.status(200).json({
            msg: "Updated User Successfully",
            user: updatedUser
        });
    } catch (error) {
        next(err);
        
    }
});

module.exports = router;