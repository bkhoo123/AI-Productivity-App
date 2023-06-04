import React, {useState} from 'react'

const InterviewPrep = () => {
    const [current, setCurrent] = useState("Technical Question Interviewer")

    const InterviewPanel = {
        
    }


    return (
        <div className="mt-10 border-t border-indigo-400 pt-8">
            <h1 className="ml-10 font-bold text-2xl" >{current}</h1>
        </div>
    )
}

export default InterviewPrep