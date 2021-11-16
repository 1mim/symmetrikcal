const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const router = express.Router();

//import foodlogSchema
const FoodLog = require('../models/foodLogModel');
const isAuth = require('../auth')

//getting all logs for that user:
router.get('/list', isAuth, expressAsyncHandler(async (req, res) => {
    const logs = await FoodLog.find({ user: req.user._id });
    res.send(logs);
}));

//logging new food to database
router.post('/add', isAuth, expressAsyncHandler(async (req, res) => {
    const log = new FoodLog({
        name: req.body.name,
        calories: req.body.calories,
        carbs: req.body.carbs,
        protein: req.body.protein,
        fats: req.body.fats,
        servingSize: req.body.servingSize,
        mealType: req.body.mealType,
        date: req.body.date,
        user: req.user._id,
    });
    const loggedToDatabase = await log.save();
    res.status(201)
        .send({ message: 'Food logged to database', log: loggedToDatabase });
}))

//getting the specific food log
router.get('/:id', isAuth, expressAsyncHandler(async (req, res) => {
    const log = await FoodLog.findById(req.params.id);
    if (log) {
        res.send(log);
    } else {
        res.status(404).send({ message: 'Log not found' });
    }
}));


module.exports = router;