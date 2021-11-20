const mongoose = require('mongoose');

const weightSchema = new mongoose.Schema({
    weight: { type: Number, required: true },
    date: { type: Date },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
}, {
    timestamps: true,
})

const Weight = mongoose.model('weight', weightSchema);

module.exports = Weight; 