//import for .env support
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const codeRoutes = require("./routes/code");
const userRoutes = require("./routes/user");

//express app
const app = express();

//middleware initialization
app.use(express.json());

//test to see in console when and where requests are sent
    // app.use((req, res, next) => {
    //     console.log(req.method, req.path);
    //     next();
    // });

//routes
app.use("/api/code", codeRoutes);
app.use("/api/user", userRoutes);

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
