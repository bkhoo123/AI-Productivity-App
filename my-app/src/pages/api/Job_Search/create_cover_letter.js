import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
  
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const {title, company, skills, resume} = req.body;

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are assisting the user by becoming a cover letter generator. You will be given the resume of the user and the company they are trying to apply to. You are going to create a personalized cover letter for the position."
                },
                {
                    role: "user",
                    content: `I need help creating a personalized cover letter for the company based on my resume, I will give you my resume. 
                    I want you to create a cover letter that is personalized to the company and position. 
                    I want you to connect my resume with the job description and if I'm lacking any skills I want you to explain that I will bridge the gap on any part of the job description that I am lacking.`
                },
                {
                    role: "assistant",
                    content: "Yes I can help you with your cover letter. Can you please send me your resume?"
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