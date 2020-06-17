const express = require("express");
const mongoose = require('mongoose');
const calculatorRoutes = require("./routes/calculatorRoute");
const app = express();


app.use("/", calculatorRoutes);

mongoose.connect("mongodb+srv://emmaakachukwu:782009ace@cluster0-v3dg0.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(
    result => {
        console.log("Database connected");
        app.listen(process.env.PORT || 5000);
    }
).catch(
    err => console.log(err)
);