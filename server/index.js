import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

import connectDB from "./config/db.js";
import { errorMiddleware, notFound } from "./middleware/errorMiddleware.js";
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";
import sellerRouter from "./routes/seller.js";
import userAuthRouter from "./routes/authRoutes/userAuth.js";
import sellerAuthRouter from "./routes/authRoutes/sellerAuth.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(errorMiddleware);
// app.use(notFound);

// Routers
app.use(sellerAuthRouter);
app.use(userAuthRouter);
app.use(userRouter);
app.use(sellerRouter);
app.use(productRouter);

app.get('/', async(req, res) => {
    res.send("hello from express")
})
app.use('/api/seller/profile/image' , async(req, res) => {
    res.send("hua")
})
const StartServer = async() => {
    try{
        connectDB(process.env.MONGO_URL)
        app.listen(8080 , () => console.log('Server has started on PORT http://localhost:8080'))
    } catch(error) {
        console.log(error)
    }
}

StartServer()