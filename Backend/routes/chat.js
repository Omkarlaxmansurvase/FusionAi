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

// test
router.post("/test",async(req,res)=>{
    try{
        const thread = new Thread({
            threadId:"Test Thread 2",
            title:"tsting thread 2",
        });
        const response = await thread.save();
        res.send(response);
    }
    catch(error){
        console.error("Error:",error);
        res.status(500).json({error:"Internal server error"})
    }
})



// getting all threads
router.get("/thread", async(req,res)=>{
    try{
        const threads = await Thread.find({}).sort({updatedAt:-1});
        // most recent data on top
        res.status(200).json(threads);  // Send the response back to client
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: "Internal server error" });  // Send error response
    }
})

router.get("/thread/:threadId",async(req,res)=>{
    const {threadId}=req.params;

    try{
        const thread = await Thread.findOne({threadId});
        if(!thread){
            res.status(404).json({error:"Thread not found"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"failed to fetch the chat"})
    }
})

router.delete("/thread/:threadId",async(req,res)=>{
    const {threadId}=req.params;
    try{
        const deletedThread = await Thread.findOneAndDelete({threadId});
        if(!deletedThread){
            return res.status(404).json({error:"Thread not found"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"failed to delete the chat"})
    }
})


export default router;