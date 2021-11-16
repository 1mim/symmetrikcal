const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    // targetKcal: {type: Number, required: true},
    // targetCarbs: {type: Number, required: true},
    // targetProtein: {type: Number, required: true},
    // targetFats: {type: Number, required: true},
    // currentWeight: {type: Number, required: true},
    // targetWeight: {type: Number, required: true},
}, {
    timestamps: true
})

const User = mongoose.model('user', userSchema);

module.exports = User;