import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app  = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.post("/test",async(req,res)=>{
    const options= {
        method: "POST",
        headers :{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o",
            messages:[
                {
                    role:"user",content:req.body.message
                }
            ]
        })
    }
    
    try{
        const response = await fetch("https://api.openai.com/v1/chat/completions",options);
        const data = await response.json();
        //console.log(data.choices[0].message.content);
        res.send(data.choices[0].message.content)   ;
    }catch(error){
        console.error("Error:",error);
    }
})