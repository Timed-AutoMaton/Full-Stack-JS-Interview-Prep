import mongoose from 'mongoose';

const mongoURL = "mongodb+srv://finalfantasyfantasy9_db_user:oerzP38qwRWB4zkt@cluster0.n7v7qk0.mongodb.net";

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
    console.error("MongoDB connection error: ", err);
});

db.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

// Export the database connection
export default db;