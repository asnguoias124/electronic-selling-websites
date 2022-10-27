const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const categoryRoute = require("./routes/Category");
const productRoute = require("./routes/Product");

dotenv.config();
const app = express();
// connect mongodb
mongoose.connect(process.env.MONGODB_URL, () => {
    if (mongoose.connection.readyState === 1) {
        console.log("Connected to MongoDB");
    } else {
        console.log("Error connecting to MongoDB " + mongoose.connection.readyState);
    }
})

app.use(cors());
app.use(express.json());
app.use(morgan())

//routers
app.use('/v1/category', categoryRoute);
app.use('/v1/product', productRoute);

let port = 8000;
app.listen(port, () => console.log('server is running in port ' + port));