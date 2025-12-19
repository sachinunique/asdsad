import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db.js";
import userroutes from './src/routes/user.route.js'
import authrouter from './src/routes/auth.route.js'
dotenv.config();
const app = express();
// 
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

connectDB();

// 

app.use('/api/user',userroutes)
app.use('/api/auth',authrouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
