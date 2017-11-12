const path = require('path');
const express = require('express');
const pug = require('pug');
const multer = require('multer');
const app = express();
const fs = require('fs');

app.use(express.static("/public"));

app.set("view engine", "pug");
app.set("views", path.join(__dirname,"/views"));

let upload = multer({dest: path.join(__dirname,"/upload")})


app.post("/upload", upload.single("datas"), function(req, res, next){

    console.log(req.file);
    let file = req.file;
    let fileObj = {size: file.size, mimetype: file.mimetype, name: file.originalname}; 
    res.send(JSON.stringify(fileObj));
})
app.get("/", function(req, res, next){

    res.render("index");
})
const PORT = 3000;
const listens = function(){console.log("listens on Port: ", PORT)}
app.listen(PORT, listens);