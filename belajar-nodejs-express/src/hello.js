import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send(`hello world my name is ${req.query.name}`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});