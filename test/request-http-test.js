import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello " + req.query.name);
});

app.listen(3000);