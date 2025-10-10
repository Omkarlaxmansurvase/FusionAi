import express from "express";
import Thread from "../models/Thread.js";

const router = express.Router();

// test
router.post("/test",async(req,res)=>{
    try{
        const thread = new Thread({
            threadId:"Test Thread",
            title:"tsting thread",
        });
        const response = await thread.save();
        res.send(response);
    }
    catch(error){
        console.error("Error:",error);
        res.status(500).json({error:"Internal server error"})
    }
})

export default router;