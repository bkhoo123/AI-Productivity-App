import React, {useState} from 'react'
import NavBar from './Navbar'
import { PacmanLoader } from 'react-spinners';
import 'react-quill/dist/quill.snow.css'; 
import 'react-quill/dist/quill.bubble.css';  
import 'react-quill/dist/quill.core.css';  
import dynamic from 'next/dynamic';
import axios from 'axios'
import ToolTips from './ToolTips';
import Resume from './JobSearchComponents/Resume';
import CoverLetter from './JobSearchComponents/CoverLetter';
import CoverLetterOptimizer from './JobSearchComponents/CoverLetter/CoverLetterOptimizer';
import Notes from './JobSearchComponents/Notes';
import InterviewPrep from './JobSearchComponents/InterviewPrep';

const JobSearch = () => {
    const [content, setContent] = useState("")
    const [toggleDark, setToggleDark] = useState(false)
    const [current, setCurrent] = useState("Resume")

    

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
        "Resume": <Resume toggleDark={toggleDark} setToggleDark={setToggleDark} content={content} setContent={setContent} />,
        "Cover Letter": <CoverLetter/>,
        "Notes": <Notes/>,
        "Interview Prep": <InterviewPrep/>,

    }

    return (
        <div className={`w-full ${toggleDark ? "bg-gray-600" : "bg-white"}`}>
            {/* <NavBar title={current} setCurrent={setCurrent} /> */}

            <div className="h-8 p-6">
                <div className="flex flex-row gap-x-8 mx-2 flex-wrap">

                <button 
                onClick={() => setCurrent("Resume") }
                className={`font-semibold flex items-center ${current === "Resume" ? "border-b-2 border-indigo-400" : ""}`}>
                    Resume
                    <ToolTips 
                    description={"Resume Creation and Optimization Tools and Features"} 
                    how={"Click the Resume Button and you should see the Resume Tools appear below"}/>
                </button>


                <button  
                onClick={() => setCurrent("Cover Letter")}
                className={`font-semibold flex items-center ${current === "Cover Letter" ? "border-b-2 border-indigo-400" : ""}`}>
                    Cover Letter
                    <ToolTips 
                    description={"Cover Letter Creation and Optimization Tools and Features"} 
                    how={"Click the Cover Letter Button and you should see the Cover Letter Tools appear below"} /> 
                </button>

                <button
                onClick={() => setCurrent("Notes")} 
                className={`font-semibold flex items-center ${current === "Notes" ? "border-b-2 border-indigo-400" : ""}`}>
                    Notes to Recruiters</button>
               
                <button 
                onClick={() => setCurrent("Interview Prep")}
                className={`font-semibold flex items-center ${current === "Interview Prep" ? "border-b-2 border-indigo-400" : ""}`}>
                    Interview Prep
                </button>

                <button 
                onClick={handleATSScan} 
                className={`font-semibold flex items-center ${current === "ATS Scan" ? "border-b-2 border-indigo-400" : ""}`}>
                    ATS Scanner 
                    <ToolTips description={""} how={""} /> </button>
                </div>
            </div>

          
             {Panel[current]}         
            
        </div>
    )
}

export default JobSearch