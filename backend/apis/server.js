import express from "express";
import mongoose from "mongoose";

//connect with mongodb cluster
(async () => {
    const connectionInstance = await mongoose.connect("mongodb+srv://finalfantasyfantasy9_db_user:rzxIwO65lu7uW90d@cluster0.n7v7qk0.mongodb.net/");
    console.log(connectionInstance.connection.host);
})();

//data definition
const userSchema = mongoose.Schema({
    name: String,
    age: Number,
})

// create collection
const userCollection = mongoose.model('user', userSchema);

const app = express();

//middleware
app.use(express.json());

// create api
app.post("/create-user", async (req, res) => {
    const userData = req.body;
    const createdUser = await userCollection.create(userData);
    res.send({
        "createdUser": createdUser
    })
});

// read all documents api
app.get("/get-all-users", async (req, res) => {
    const users = await userCollection.find();
    res.send(users);
})

//read single document
app.get("/get-single-user", async (req, res) => {
    const user = await userCollection.findOne({
        name: req.body.name
    });
    res.send(user);
})

app.put("/update-user", async (req, res) => {
    console.log(req.query);
    const updatedUSer = await userCollection.findByIdAndUpdate(req.query, req.body, {new:true});
    res.send({
        updatedUSer,
    })
})

app.delete("/delete-user", async (req, res) => {
    const deletedUser = await userCollection.findByIdAndDelete(req.query);
    res.send({
        deletedUser,
    })
})


app.listen(8000, () => {
    console.log("server running on http://localhost:8000");
})