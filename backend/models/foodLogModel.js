const mongoose = require('mongoose');

const foodlogSchema = new mongoose.Schema({
    name: { type: String, required: true },
    calories: { type: Number, required: true },
    carbs: { type: Number, required: true },
    protein: { type: Number, required: true },
    fats: { type: Number, required: true },
    servingSize: { type: Number, required: true },
    mealType: { type: String, required: true },
    date: { type: Date },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
}, {
    timestamps: true,
});

const FoodLog = mongoose.model('foodLog', foodlogSchema);

module.exports = FoodLog;