import "dotenv/config";

const getOpenAiResponse = async(message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",  // Using GPT-3.5 for free tier
            messages: [{
                role: "user",
                content: message
            }]
        })
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error?.message || 'OpenAI API request failed');
        }
        
        if (!data.choices || !data.choices[0]) {
            throw new Error('Invalid response from OpenAI');
        }
        
        return data.choices[0].message.content;
    } catch(err) {
        console.error("OpenAI API Error:", err);
        throw err; // Re-throw the error to handle it in the route
    }
}

export default getOpenAiResponse;