import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import chatRoutes from './routes/chat.js';

const app  = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use("/api",chatRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected");
    }
    catch(error){
        console.error("Error:",error);
    }
}

app.post("/test",async(req,res)=>{
    
})