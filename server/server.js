require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const codeRoutes = require("./routes/code");

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log( req.method, req.path);
    next();
});
//routes
app.use("/api/code", codeRoutes);

const PORT = process.env.PORT;
//connect to db
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        //server listen
        app.listen(PORT, () => {
            console.log(`connected to db & listening on ${PORT}`);
        });
    })
    .catch((error) => console.log(error));
