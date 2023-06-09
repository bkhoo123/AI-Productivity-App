import React, {useState} from 'react'
import { PacmanLoader } from 'react-spinners';
import axios from 'axios'
import ReactQuillBubble from '@/components/ReactQuill/ReactQuillBubble';




const ResumeFeedback = () => {
    const [loading, setLoading] = useState(false)
    const [resume, setResume] = useState("")
    const [gpt, setGPT] = useState("")
    const [color, setColor] = useState("#7FFFD4")

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <div>
                <PacmanLoader
                color={color}
                size={100}
                />
                </div>
                <div className="text-2xl">Loading ....</div>
            </div>
        )
    }

    const handleResumeFeedback = async (e) => {
        e.preventDefault()
        const payload = {
            resume: resume
        }
        setLoading(true)

        const response = await axios.post(`/api/ChatGPT/resume_optimizer`, payload)

        if (response) {
            setGPT(response.data.message.content)
            setLoading(false)
        }
    }

    return (
        <>
        <div className="m-10">
            <div onClick={handleResumeFeedback} className="flex items-center border-2 border-black hover:bg-indigo-400 w-fit hover:text-white rounded-md p-2 cursor-pointer gap-2 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><line x1="18" x2="22" y1="2" y2="6"></line><path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z"></path></svg>
              Submit Resume for Feedback
              </div>
        </div>

        <ReactQuillBubble
        height="auto"
        className="font-semibold border-none"
        placeHolder="Copy and Paste your Resume in here and the AI will give you feedback on how to improve it, press the submit button when you're ready"
        content={resume}
        setContent={setResume}
        eleClassName={"mx-10 my-8 p-8 border-teal-400 border-2 h-auto rounded-lg whitespace-pre-wrap "}
        />

        <ReactQuillBubble
        height="auto"
        className="font-semibold text-indigo-400"
        placeHolder="The Artificial Intelligence will give you feedback on your resume here"
        content={gpt}
        setContent={setGPT}
        eleClassName={"mx-10 my-8 p-8 border-teal-400 border-2 h-auto rounded-lg whitespace-pre-wrap "}
        />
        </>
    )
}

export default ResumeFeedback