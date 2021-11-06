require('dotenv').config();
const express = require('express');
const connectDB = require('./config/mongoDB');

// routers
const userRouter = require('./router/userRouter');
const foodLogRouter = require('./router/foodLogRouter');

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/foodlogs', foodLogRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));