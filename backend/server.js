require('dotenv').config();
const express = require('express');
const connectDB = require('./config/mongoDB');

// routers
const userRouter = require('./router/userRouter');
const foodLogRouter = require('./router/foodLogRouter');
const weightRouter = require('./router/weightRouter');

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api endpoints
app.use('/user', userRouter);
app.use('/log', foodLogRouter);
app.use('/weight', weightRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
