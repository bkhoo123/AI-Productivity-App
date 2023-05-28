import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
  
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const {resume, model} = req.body;

    try {
        const completion = await openai.createCompletion({
            model: model,
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant assisting the user with optimization of their resume."
                },
                {
                    role: "user",
                    content: "I need help with optimizing my resume. Can you make my resume sound better and become more optimized."
                },
                {
                    role: "assistant",
                    content: "Yes I can help you with your resume optimization. Can you please send me your resume?"
                },
                {
                    role: "user",
                    content: `Yes this is my resume: ${resume}`
                }
            ],
            max_tokens: 1000,
            temperature: 0.5,
            n: 1,
        })
    } catch (error) {
        console.error("Error generating resume optimization:", error)
        return res.status(500).json({ message: "An error occurred while generating the resume optimizations." })
    }

}
