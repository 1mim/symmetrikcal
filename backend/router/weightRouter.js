const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const router = express.Router();

//import weightSchema
const Weight = require('../models/weightModel');
const isAuth = require('../auth')

//getting all logs for that user:
router.get('/all', isAuth, expressAsyncHandler(async (req, res) => {
    const weightLogs = await Weight.find({ user: req.user._id });
    res.send(weightLogs);
}));

//logging new food to database
router.post('/update', isAuth, expressAsyncHandler(async (req, res) => {
    const weight = new Weight({
        weight: req.body.weight,
        date: req.body.date,
        user: req.user._id,
    });
    const loggedToDatabase = await weight.save();
    res.status(201)
        .send({ message: 'Weight updated in database', log: loggedToDatabase });
}))

module.exports = router;