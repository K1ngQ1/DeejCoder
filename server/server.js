import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("server");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("server runs"));
