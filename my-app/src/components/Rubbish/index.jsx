import { useState } from 'react';
import axios from 'axios';

const RubbishChatBot = () => {
  const [messages, setMessages] = useState("");
  const [input, setInput] = useState('');
  const [who, setWho] = useState('user')

  const sendMessage = async (e) => {
    e.preventDefault()

    const payload = {
      input: input,
    }

    const response = await axios.post(`/api/ChatGPT/RubbishChatBot/chatbot`, payload)
    if (response) {
      setMessages(response.data.message.content)
    }
  };

  return (
    <div className="p-4 w-full">
      <div className="mb-4 overflow-y-auto h-64 border rounded">
        {messages}
      </div>
      <div className="flex">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-grow p-2 border rounded" />
        <button onClick={sendMessage} className="ml-2 p-2 bg-blue-500 text-white rounded">Send</button>
      </div>
    </div>
  );
}

export default RubbishChatBot

// Send Chat GPT the users question get the intent from it
// Give it a example object
// Middleware function to automatically filter through unnecessxary data and ask chatGPT to do this
// data set too large
