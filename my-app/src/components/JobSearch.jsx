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
import ResumeTemplate from './JobSearchComponents/ResumeTemplate';
import ResumeOptimizer from './JobSearchComponents/ResumeOptimizer';
import CoverLetterOptimizer from './JobSearchComponents/CoverLetterOptimizer';


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
    const [resume, setResume] = useState("")
    
    
    const [current, setCurrent] = useState("Resume Template")

    const handleResumeOptimizer = async (e) => {
        e.preventDefault()
        setCurrent("Resume Optimizer")
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

    const Panel = {
        "Resume Template": <ResumeTemplate toggleReview={toggleReview} setToggleReview={setToggleReview} loading={loading} setLoading={setLoading} content={content} setContent={setContent} />,
        "Resume Optimizer": <ResumeOptimizer/>,
        

    }

    return (
        <div className={`w-full ${toggleReview ? "bg-gray-600" : "bg-white"}`}>
            <NavBar title={current} setCurrent={setCurrent} />

            <div className="h-24 p-6">
                <div className="flex flex-row gap-x-4 mx-2 gap-4 flex-wrap">

                {/* <button 
                onClick={() => {
                    setToggleReview(!toggleReview)
                    setCurrent("Resume Template")
                }} 
                className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400 flex">
                    Resume Template 
                    <ToolTips 
                    description={"Engineered to have the AI help you get started with a resume template just need some information and you're good to go."} 
                    how={"Click the Resume Template Button and then a Popup should appear. In the popup its going to ask you to fill out some information to help the AI create a Resume Template"}/>
                </button> */}

                <button 
                onClick={() => setCurrent("Resume Template") }
                className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400 flex">
                    Resume Template 
                    <ToolTips 
                    description={"Engineered to have the AI help you get started with a resume template just need some information and you're good to go."} 
                    how={"Click the Resume Template Button and then a Popup should appear. In the popup its going to ask you to fill out some information to help the AI create a Resume Template"}/>
                </button>


                <button onClick={handleResumeOptimizer}  
                className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400 flex">
                    Resume Optimizer 
                    <ToolTips 
                    description={"Designed to help give helpful feedback towards your resume."} 
                    how={"Paste your Resume in the Text Editor Below. Click the Resume Optimizer and then the AI will parse through your resume and give you feedback."} /> 
                </button>

                <button className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400 flex">
                    Create Cover Letter
                    <ToolTips
                    description={"Creates a Cover Letter for you with the help of artificial intelligence."}
                    how={"Click the Create Cover Letter Button and then a Popup should appear. In the popup its going to ask you to fill out some information to help the AI create a Cover Letter"}
                    />
                </button>

                <button className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400">Cover Letter Optimizer</button>
                <button className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400">Follow Up Note</button>
                <button className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400">Thank You Note</button>
                <button className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400">Interview Simulation</button>
                <button className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400">Complete Package</button>
                <button className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold hover:bg-gray-400">Bullet Point Optimizer</button>
                <button onClick={handleATSScan} className="bg-teal-500 p-2 text-white text-sm rounded-md font-semibold flex hover:bg-gray-400">ATS Scanner <ToolTips description={""} how={""} /> </button>
                </div>
            </div>

          
             {Panel[current]}         
            
        </div>
    )
}

export default JobSearch