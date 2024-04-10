import mongoose from "mongoose";
import "dotenv/config.js"

export default function connectDB(url) {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err))
}
