const express = require("express");
const app = express();
//middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send("About");
})

app.post("/create-user", (req, res) => {
    console.log(req.body);
    res.send({
        "message": `Hey ${req.body.name} your data saved successfully`
    });
})

app.listen(8000, () => {
    console.log("server running on http://localhost:8000");
});