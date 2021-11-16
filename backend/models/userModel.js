const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true },
    targetKcal: {type: Number, required: true, default: 0},
    targetCarbs: {type: Number, required: true, default: 0},
    targetProtein: {type: Number, required: true, default: 0},
    targetFats: {type: Number, required: true, default: 0},
    currentWeight: {type: Number, required: true, default: 0},
    targetWeight: {type: Number, required: true, default: 0},
}, {
    timestamps: true
})

const User = mongoose.model('user', userSchema);

module.exports = User;