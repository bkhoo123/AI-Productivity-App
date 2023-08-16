import { useState } from "react";
import axios from "axios";

const RubbishChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [who, setWho] = useState("user");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim()) return; // prevents empty messages

    const payload = {
      input: input,
    };

    const response = await axios.post(
      `/api/ChatGPT/RubbishChatBot/chatbot`,
      payload
    );
    if (response) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'User', text: input },
        { sender: 'RubbishGPT', text: response.data.message.content },
      ]);
      setInput('');
    }
  };

  return (
    <div className="p-8 w-full">
      <div className="mb-4 overflow-y-auto h-[50%] border-2 border-sky-400 rounded-md">
      {messages.map((message, index) => (
          <div key={index} className={`p-2 ${message.sender === 'RubbishGPT' ? 'text-blue-500 font-bold text-md' : 'text-green-500 font-bold text-md'}`}>
            {message.sender}: {message.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
      </div>
      <div className="p-6">
        <button
          onClick={sendMessage}
          className="mx-2 p-3 bg-blue-500 text-white rounded font-semibold"
        >
          Send Message
        </button>
        <button
          className="mx-4 p-3 bg-blue-500 text-white rounded font-semibold"
        >
          Clear Chat
        </button>
      </div>
    </div>
  );
};

export default RubbishChatBot;

// Send Chat GPT the users question get the intent from it
// Give it a example object
// Middleware function to automatically filter through unnecessxary data and ask chatGPT to do this
// data set too large
