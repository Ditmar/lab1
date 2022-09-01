import express from "express";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();
const app = express();
//static content in assets pages
app.get(/src.*/, async(req, res) => {
    console.log(req.url);
    try {
        res.status(200).sendFile(process.cwd() + req.url);
    } catch (err) {
        res.status(404).send("Page don't found ")
    }
});
app.get(/assets.*/, async(req, res) => {
    console.log(req.url);
    try {
        res.status(200).sendFile(process.cwd() + req.url);
    } catch (err) {
        res.status(404).send("Page don't found ")
    }
});
//dynamic route only for example purpose
app.get('/', async (req, res) => {
    const html = await fs.readFileSync("./public/index.html");
    res.status(200).send(html.toString());
});
const port = process.env.PORT || 3000;
app.listen(3000, () => {

    console.log("App running in --> " + port);
});