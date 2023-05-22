import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
  
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const {title, company, skills} = req.body;

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are assisting the user by becoming a cover letter generator. You will be given a job title, company, and skills and you will need to generate a cover letter for the user."
                }
            ],
            max_tokens: 500,
            top_p: 0.1,
            n: 1,
        })

        return res.status(200).json({ message: completion.data.choices[0].message })

    } catch (error) {
        console.error("Error generating cover letter:", error)
        return res.status(500).json({ message: "An error occurred while generating the cover letter." })
    }
}