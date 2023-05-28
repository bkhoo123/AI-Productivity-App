import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
  
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const { title, company, skills } = req.body;

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant assisting the user with creating a resume template."
                },
                {
                    role: "user",
                    content: "I need help creating a resume template. I will give y"
                },
                {
                    role: "assistant",
                    content: "Yes I can help you with your resume template. What is your job title, which company are you trying to work at, and what is your skill set?"
                },
                {
                    role: "user",
                    content: `I am a ${title}, I am trying to work at this ${company} and my skill set is ${skills}.`
                }
            ],
            max_tokens: 500,
            temperature: 0.5,
            n: 1,
        })

        return res.status(200).json({ message: completion.data.choices[0].message })
    } catch (error) {
        console.error("Error generating resume template:", error)
        return res.status(500).json({ message: "An error occurred while generating the resume template." })
    }
}

