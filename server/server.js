import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

//configuring middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get("/", (req, res) => {
    res.send("server");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("server runs"));
