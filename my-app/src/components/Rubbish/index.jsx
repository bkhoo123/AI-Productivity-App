import { useState } from "react";
import axios from "axios";
import { PacmanLoader } from 'react-spinners';

const RubbishChatBot = ({chatModal, setChatModal}) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#7FFFD4");

    if (loading) {
      return (
          <div className="flex flex-col justify-center items-center w-[100%] mt-[300px]">
              <div className="flex flex-col items-center justify-center w-full h-full">
                  <PacmanLoader color={color} size={100} />
                  <div className="text-2xl mt-6 font-semibold text-center">
                      Parsing through Reports
                  </div>
              </div>
          </div>
      );
  }
  

    const handleFormSubmit = (e) => {
        e.preventDefault();
        sendMessage();
    };

    const sendMessage = async () => {
        if (!input.trim()) return; // prevents empty messages

        const payload = {
            input: input,
        };
        setLoading(true);

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
            setLoading(false);
        }
    };

    const clearMessage = () => {
      setMessages([]);
    };

    return (
        <div className="p-8 w-full ">
            <div className="mb-4 overflow-y-auto flex flex-col gap-3 ">
              <div className="flex justify-between">
                <div className="text-2xl font-bold">
                  Chat with RubbishGPT
                </div>
                <button 
                  className="p-2 bg-blue-500 text-white font-semibold rounded-md"
                  onClick={() => setChatModal(!chatModal)}
                  >
                    Close
                </button>
              </div>

              <div className="border-t "/>
              <div className="font-semibold mt-2 p-2 bg-gray-100 rounded-md max-w-[60%]">
                Hi I am Rubbish GPT Chatbot. I can help you with your queries about Rubbish incidents and reports. Feel free to ask me any questions and I will do my utmost to give you the best answer I can.
              </div>
              {messages.map((message, index) => (
                <div 
                    key={index} 
                    className={`flex ${message.sender === 'RubbishGPT' ? 'justify-start' : 'justify-end'} `}
                >
                    <div className={`${message.sender === 'RubbishGPT' ? 'text-black-500 font-semibold text-md bg-gray-100 p-2 rounded-md' : 'text-white bg-indigo-500 rounded-md p-2 font-semibold text-md'} max-w-[60%]`}>
                        {message.text}
                    </div>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-grow p-3 border rounded"
                />
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="mx-2 p-3 bg-blue-500 text-white rounded font-semibold"
                    >
                        Send Message
                    </button>
                    <button
                        type="button"
                        className="mx-4 p-3 bg-blue-500 text-white rounded font-semibold"
                        onClick={clearMessage}
                    >
                        Clear Chat
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RubbishChatBot;
