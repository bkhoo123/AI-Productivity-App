import React, {useState} from 'react'
import ToolTips from '@/components/ToolTips'
import ThankYouNote from './ThankYouNote'
import FollowUpNote from './FollowUpNote'

const Notes = () => {
    const [current, setCurrent] = useState("Thank You Note")

    const NotesPanel = {
        "Thank You Note": <ThankYouNote />,
        "Follow Up Note": <FollowUpNote />
    }

    return (
        <div className="mt-10 border-t border-indigo-400 pt-8">
            <h1 className="ml-10 font-bold text-2xl">{current}</h1> 
                <div className="mt-6 ml-10 flex flex-row items-center gap-6 self-center">
                    <button 
                        onClick={() => setCurrent("Thank You Note")}
                        className={current === "Thank You Note" ? "bg-gray-400 p-2 rounded-md flex font-semibold text-sm text-white" : "bg-sky-800 p-2 rounded-md flex font-semibold text-sm text-white"}>
                            Thank You Note
                            <ToolTips 
                            description={"Creates a Thank You Note to the Recruiter after your interview."}
                            how={"Click this button and it will create a thank you note to the recruiter based on company name."}
                            />
                    </button>

                    <button 
                        onClick={() => setCurrent("Follow Up Note")}
                        className={current === "Follow Up Note" ? "bg-gray-400 p-2 rounded-md flex font-semibold text-sm text-white" : "bg-sky-800 p-2 rounded-md flex font-semibold text-sm text-white"}>
                            Follow Up Note 
                            <ToolTips 
                            description={""}
                            how={""}
                            />
                    </button>
                </div>

                {NotesPanel[current]}
        </div>
    )
}

export default Notes