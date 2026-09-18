import express from "express";
import mongoose from "mongoose";

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

app.post('/create-user', async (req, res) => {
    const userData = req.body;
    const createdUser = await userCollection.create(userData);
    res.send({
        "createdUser": createdUser
    })
});

app.listen(8000, () => {
    console.log("server running on http://localhost:8000");
})