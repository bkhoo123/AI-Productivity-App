import React, {useState} from 'react'
import ToolTips from '../../ToolTips';
import CreateCoverLetter from './CreateCoverLetter';
import CoverLetterOptimizer from './CoverLetterOptimizer';

const CoverLetter = () => {
    const [current, setCurrent] = useState("Create Cover Letter")

    const CoverPanel = {
        "Create Cover Letter": <CreateCoverLetter/>,
        "Optimize Cover Letter": <CoverLetterOptimizer/>,
    }

    return (
        <div className="mt-10 border-t border-indigo-400 pt-8" >
            <h1 className="ml-10 font-bold text-2xl">{current}</h1> 
            <div className="mt-6 ml-10 flex flex-row items-center gap-6 self-center">
                <button 
                    onClick={() => setCurrent("Create Cover Letter")}
                    className={current === "Create Cover Letter" ? "bg-gray-400 p-2 rounded-md flex font-semibold text-sm text-white" : "bg-sky-800 p-2 rounded-md flex font-semibold text-sm text-white"}>
                        Create Cover Letter
                        <ToolTips 
                        description={"Will create a cover letter for you based on the company you wish to make a cover letter for."}
                        how={""}
                        />
                </button>

                <button 
                    onClick={() => setCurrent("Optimize Cover Letter")}
                    className={current === "Optimize Cover Letter" ? "bg-gray-400 p-2 rounded-md flex font-semibold text-sm text-white" : "bg-sky-800 p-2 rounded-md flex font-semibold text-sm text-white"}>
                        Optimize Cover Letter
                        <ToolTips 
                        description={""}
                        how={""}
                        />
                </button>
            </div>

            {CoverPanel[current]}
        </div>
    )
}

export default CoverLetter