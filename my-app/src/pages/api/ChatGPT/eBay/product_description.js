import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const { product } = req.body;

    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system", 
                content: "You are a helpful assistant assisting the user with creating a product description for their eCommerce listing"
            },
            {
                role: "user",
                content: "I need help creating a item listing on eBay, the product is a DVD. The list of things I would like on this listing are the amount of DVD's / Discs if known. Which actors were in it. How many seasons and episodes. and anything else that a product listing would need."
            },
            {
                role: "assistant",
                content: "Yes I can help you with your eBay DVD listing. What is the name of your product?"
            },
            {
                role: "user",
                content: `The product is ${product}.`
            }
        ],
        max_tokens: 320,
        top_p: 0.1,
        n: 1,
      });

      return res.status(200).json({ message: completion.data.choices[0].message });
    } catch (error) {
      console.error("Error generating product description:", error);
      return res.status(500).json({ message: "An error occurred while generating the product description." });
    }
  };



