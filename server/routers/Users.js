const express = require("express");
const router = express.Router(); //tiny lego brick
const User = require("../models/user");

// create new user
router.post("/users", async (req, res, next) => {
  const { email, name, calls, DM_name, DM_email, meetings, proposals, sales, social, other, Rename_other } = req.body;
  try {
    const [user, created] = await User.findOrCreate({ where: { email: email , name: name, calls: calls, DM_name: DM_name, DM_email: DM_email, meetings: meetings, proposals: proposals, sales: sales, social: social, other: other, Rename_other: Rename_other } });
    res.status(201).json({
      msg: "Saved New User",
      user
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
