// const express = require('express');
// kind of like the first point of entry into the website/project
// in package.json, we added a line called "type": "module"
// this is basically for using import statement
import express from 'express';
import cors from "cors";
import todoRoutes from "./routes/todo.js";

const app = express(); //instance of express application

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => { //"/" = home page of website
//     //req, res = request response
//     res.send("Hello World");
// });

app.use("/todos", todoRoutes);

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});