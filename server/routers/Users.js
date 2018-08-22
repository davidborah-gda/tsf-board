const express = require("express");
const router = express.Router(); //tiny lego brick
const User = require("../models/user");

// create new user
router.post("/users", async (req, res, next) => {
  const { email, name, preferences, otherSuccess } = req.body;
  try {
    const [user, created] = await User.findOrCreate({ where: { email: email } });
    res.status(201).json({
      msg: "Saved New User",
      user
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
