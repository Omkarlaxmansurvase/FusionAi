import 'dotenv/config';
import express from 'express';

const getOpenAiResponse = async (messages) => {
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
                    role:"user",content:messages
                }
            ]
        })
    }
    
    try{
        const response = await fetch("https://api.openai.com/v1/chat/completions",options);
        const data = await response.json();
        //console.log(data.choices[0].message.content);
        return (data.choices[0].message.content)   ;
    }catch(error){
        console.error("Error:",error);
    }
}