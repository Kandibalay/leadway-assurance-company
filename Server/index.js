import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.config.js';
import productRoute from './routes/productRoute.js';




dotenv.config();
 

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT ;

app.get("/", (req, res)=> {
    return res.send("welcome to leadway Assurance")
    })
  app.use("/api/products", productRoute);

    app.listen(PORT, () => {
        connectDB();
        console.log(`server is running on port ${PORT}`);
    })

