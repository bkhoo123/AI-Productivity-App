import React, {useState} from 'react'
import NavBar from './Navbar'
import ResumeTemplateModal from './Modals/ResumeTemplateModal'
import { PacmanLoader } from 'react-spinners';
import 'react-quill/dist/quill.snow.css'; 
import 'react-quill/dist/quill.bubble.css';  
import 'react-quill/dist/quill.core.css';  
import dynamic from 'next/dynamic';
import axios from 'axios'
import ToolTips from './ToolTips';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


const QuillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean'],
    ],
}

const QuillFormats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

const JobSearch = () => {
    const [content, setContent] = useState("")
    const [toggleReview, setToggleReview] = useState(false)
    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState("#7FFFD4")
    const [quillInstance, setQuillInstance] = useState(null);


    // const quillEditor = quillRef.current.getEditor();
    // console.log(quillEditor)
    
    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <div>
                <PacmanLoader
                color={color}
                size={110}
                />
                </div>
                <div className="text-2xl">Loading ....</div>
            </div>
        
        )
    }
    
    const copyContent = () => {
        if (quillInstance) {
            const text = quillInstance.getText();
            navigator.clipboard.writeText(text);
        }
    };

    const handleResumeOptimizer = async (e) => {
        e.preventDefault()
        const payload = {
            resume: content
        }
        setLoading(true)

        const response = await axios.post(`/api/ChatGPT/resume_optimizer`, payload)

        if (response) {
            setContent(response.data.message.content)
            setLoading(false)
        }
    }

    const handleATSScan = async (e) => {
        e.preventDefault()
        const payload = {
            resume: content
        }    

        setLoading(true)

        const response = await axios.post(`/api/ChatGPT/ATS_Scanner`, payload)

        if (response) {
            setContent(response.data.message.content)
            setLoading(false)
        }
    }

    return (
        <div className={`w-full ${toggleReview ? "bg-gray-600" : "bg-white"}`}>
            <NavBar />

            <div className="h-24 p-6">
                <div className="flex flex-row gap-x-4 mx-2 gap-4 flex-wrap">
                <button onClick={() => setToggleReview(!toggleReview)} className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400 flex">Resume Template <ToolTips description={"Engineered to have the AI help you get started with a resume template just need some information and you're good to go."} how={"Click the Resume Template Button and then a Popup should appear. In the popup its going to ask you to fill out some information to help the AI create a Resume Template"} /></button>
                <button onClick={handleResumeOptimizer}  className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400 flex">Resume Optimizer <ToolTips description={"Designed to help give helpful feedback towards your resume."} how={"Paste your Resume in the Text Editor Below. Click the Resume Optimizer and then the AI will parse through your resume and give you feedback."}  /> </button>
                <button className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400">Create Cover Letter</button>
                <button className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400">Cover Letter Optimizer</button>
                <button className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400">Follow Up Note</button>
                <button className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400">Thank You Note</button>
                <button className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400">Interview Simulation</button>
                <button className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400">Complete Package</button>
                <button className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400">Bullet Point Optimizer</button>
                <button onClick={handleATSScan} className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold flex hover:bg-gray-400">ATS Scanner <ToolTips description={""} how={""} /> </button>
                </div>
            </div>

            <div className="mt-8 mx-10 p-8 whitespace-pre-wrap border-2 rounded-md h-auto border-purple-300">
            <button onClick={copyContent} className="hover:bg-rose-200 p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg></button>
                <ReactQuill 
                    theme="bubble"
                    placeholder="This is a Rich Text Editor you can put your Resume here or you can take notes. You can also copy whatever is on here by clicking the Copy Icon."
                    value={content}
                    onChange={(content, delta, source, editor) => {
                        setContent(content);
                        setQuillInstance(editor);
                    }}
                    modules={QuillModules}
                    formats={QuillFormats}
                    // preserveWhitespace={true}
                />
                
            </div>

            <ResumeTemplateModal toggleReview={toggleReview} setToggleReview={setToggleReview} GPTReply={content} setGPTReply={setContent} loading={loading} setLoading={setLoading} />
        </div>
    )
}

export default JobSearch