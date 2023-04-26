require('colors');
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDB = require('./config/connect');
const { errorHandler } = require('./middlewares/errorMiddleware');
const port = process.env.PORT || 5000;
const app = express();
connectDB()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/dish',require('./routes/foodRoutes'))
app.use('/api/user',require('./routes/userRoutes'))

app.use(errorHandler);

app.listen(port, ()=>console.log(`server started on port: ${port.cyan}`))

