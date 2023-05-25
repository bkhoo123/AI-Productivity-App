import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
  
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const {resume} = req.body;

    try {
        const completion = await openai.createChatCompletion({
            // model: "gpt-3.5-turbo",
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: "You are assisting the user by giving them feedback on their resume, you don't need to optimize their resume but rather give them tips, feedback, improved sentences, and areas of improvement."
                },
                // {
                //     role: "user",
                //     content: "I need help with improving my resume. I want you to optimize my bullet points only if they aren't good and if they aren't good I want the optimized suggestion to be put on the bottom under a optimized section with where the bullet point came from. If the bullet point is already mostly optimized you can skip over it. I also want you to give me feedback on the overall resume as well as suggestions on how to improve it. Can you also give me a rating from 1-10 of how good the resume currently is?"
                // },
                {
                    role: "user",
                    content: `I need help with making improvements to my resume. The format should be in the following order and I would like you to section off each part with a ## header: 
                    1. I want feedback and suggestions on each section of my resume. 
                    2. Based on my resume where are areas I could optimize for the ATS scanner?
                    3. I would like my bullet points optimized and utilizing the skills / technologies if you see room for improvement, but if its already mostly optimized you can skip over them.   
                    4. Based on the given job in the resume give me a few skill suggestions that you think I should add to my resume.
                    5. If you could rewrite the resume how would you rewrite it and why?
                    6. Give me a rating from 1-10 of how likely my resume would pass the ATS Scanner.
                    `
                },
                {
                    role: "assistant",
                    content: "Yes I can help you with your resume. Can you please send me your resume?"
                },
                {
                    role: "user",
                    content: `Here is my ${resume}`
                }
            ],
            max_tokens: 1000,
            top_p: 0.1,
            n: 1,
        })

        return res.status(200).json({ message: completion.data.choices[0].message })
    } catch (error) {
        console.error("Error generating resume optimization:", error)
        return res.status(500).json({ message: "An error occurred while generating the resume optimization." })
    }
}