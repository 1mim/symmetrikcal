const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/userModel');
const generateToken = require('../utils');
const isAuth = require('../auth');

//get all users
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    } catch (error) {
        res.status(404).json({ nouserfound: error });
    }
})

//get user by id:
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.send(user);
    } else {
        res.send(404).send({ message: 'User Not Found' });
    }
})

//create new user
router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        targetKcal: req.body.targetKcal,
        targetCarbs: req.body.targetCarbs,
        targetProtein: req.body.targetProtein,
        targetFats: req.body.targetFats,
        currentWeight: req.body.currentWeight,
        targetWeight: req.body.targetWeight,
    });
    const createdUser = await user.save();
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        targetKcal: user.targetKcal,
        targetCarbs: user.targetCarbs,
        targetProtein: user.targetProtein,
        targetFats: user.targetFats,
        currentWeight: user.currentWeight,
        targetWeight: user.targetWeight,
        token: generateToken(createdUser),

    })
})

//user login
router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({message: 'Invalid email or password'})
})

module.exports = router;

