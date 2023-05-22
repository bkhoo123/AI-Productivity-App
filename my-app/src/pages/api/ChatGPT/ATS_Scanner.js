import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
  
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const {resume} = req.body;

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are assisting the user by becoming a ATS scanner. You will be given a resume and you will need to scan the resume and give feedback on how well the resume would do in an ATS scanner."
                },
                {
                    role: "user",
                    content: "I need help with scanning a resume and giving feedback on how well the resume would do in an ATS scanner. I need you to grade it from 1-100 on how well it would do in an ATS Scanner."
                },
                {
                    role: "assistant",
                    content: "Yes I will scan your resume as a ATS scanner. Can you please send me your resume?"
                },
                {
                    role: "user",
                    content: `Here is my ${resume}`
                }
            ],
            max_tokens: 500,
            top_p: 0.1,
            n: 1,
        })

        return res.status(200).json({ message: completion.data.choices[0].message })
    } catch (error) {
        console.error("Error generating resume scan:", error)
        return res.status(500).json({ message: "An error occurred while generating the resume scan." })
    }
}