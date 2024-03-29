import React, {useState} from 'react'
import ToolTips from '../../ToolTips';
import ResumeTemplate from './ResumeTemplate';
import ResumeFeedback from './ResumeFeedback';
import ResumeOptimization from './ResumeOptimization';

const Resume = ({toggleDark, setToggleDark, loading, setLoading}) => {
    const [current, setCurrent] = useState("Create Resume Template")
    

    const ResumePanel = {
        "Create Resume Template": <ResumeTemplate toggleDark={toggleDark} setToggleDark={setToggleDark} />,
        "Resume Feedback": <ResumeFeedback toggleDark={toggleDark} setToggleDark={setToggleDark}  />,
        "Resume Optimization": <ResumeOptimization toggleDark={toggleDark} setToggleDark={setToggleDark} />
    }
    
    return (
        <div className="mt-8 border-t border-indigo-400 pt-8">
            {/* <h1 className="ml-10 font-bold text-2xl">{current}</h1>   */}
            <div className="mt-2 ml-10 flex flex-row items-center gap-6 self-center">
                
                <button 
                    onClick={() => setCurrent("Create Resume Template")}
                    className={current === "Create Resume Template" ? "bg-gray-400 p-2 rounded-md flex font-semibold text-sm text-white" : "bg-sky-800 p-2 rounded-md flex font-semibold text-sm text-white"}>
                    Create Resume Template
                    <ToolTips
                    description={"Creates a Resume Template"}
                    how={"Click Generate Resume Template and it will ask you for some information to get started. "}
                    />
                </button>
                <button 
                    onClick={() => setCurrent("Resume Feedback")}
                    className={current === "Resume Feedback" ? "bg-gray-400 p-2 rounded-md flex font-semibold text-sm text-white" : "bg-sky-800 p-2 rounded-md flex font-semibold text-sm text-white"}>
                        Resume Feedback
                        <ToolTips 
                        description={"AI Generated Resume Feedback"}
                        how={""}
                        />
                </button>

                <button 
                    onClick={() => setCurrent("Resume Optimization")}
                    className={current === "Resume Optimization" ? "bg-gray-400 p-2 rounded-md flex font-semibold text-sm text-white" : "bg-sky-800 p-2 rounded-md flex font-semibold text-sm text-white"}>
                        Resume Optimization
                        <ToolTips 
                        description={""}
                        how={""}
                        />
                </button>
            </div>
          
          {ResumePanel[current]}   
          
        </div>
    )
}

export default Resume