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

//user login
router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
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
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({message: 'Invalid email or password'})
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

//updating user info
router.put('/update', isAuth, async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.targetKcal = req.body.targetKcal || user.targetKcal;
        user.targetCarbs = req.body.targetCarbs || user.targetCarbs;
        user.targetProtein = req.body.targetProtein || user.targetProtein;
        user.targetFats = req.body.targetFats || user.targetFats;
        user.currentWeight = req.body.currentWeight || user.currentWeight;
        user.targetWeight = req.body.targetWeight || user.targetWeight;
        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password, 8);
        }
        const updatedUser = await user.save();
        res.send({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            targetKcal: updatedUser.targetKcal,
            targetCarbs: updatedUser.targetCarbs,
            targetProtein: updatedUser.targetProtein,
            targetFats: updatedUser.targetFats,
            currentWeight: updatedUser.currentWeight,
            targetWeight: updatedUser.targetWeight,
            token: generateToken(updatedUser), 
        })
    }
})

module.exports = router;

