import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ResumeTemplateModal = ({toggleDark, setToggleDark, GPTReply, setGPTReply, loading, setLoading}) => {
    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [skills, setSkills] = useState("")

    const handleResumeTemplate = async (e) => {
        e.preventDefault()
        const payload = {
            title,
            company,
            skills
        }
        setLoading(true)

        const response = await axios.post(`/api/ChatGPT/resume_template`, payload)

        if (response) {
            setGPTReply(response.data.message.content)
            setLoading(false)
            setToggleDark(false)
        }
    }

    return (
        <div className={toggleDark ? "absolute left-[37.5%] top-[15%] bg-blue-50 z-50 h-auto w-[40%] rounded-lg p-10" : "hidden"}>
            
            <form onSubmit={handleResumeTemplate} className="">
                <label className="flex flex-col gap-4 mb-4 text-center text-lg font-semibold">
                    Job Title
                    <input 
                    type="text" 
                    placeholder="Enter the Job Title you are applying for"
                    className="p-2 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:rounded-lg "
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    
                    />
                </label>


                <label className="flex flex-col gap-4 my-4 text-center text-lg font-semibold">
                    Company Name
                    <input 
                    type="text" 
                    placeholder="Enter the Company you are applying to"
                    className="p-2 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:rounded-lg "
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    
                    />
                </label>

                <label className="flex flex-col gap-4 my-4 text-center text-lg font-semibold ">
                    Skills
                    <input 
                    type="text" 
                    placeholder="Enter the Skills you want to highlight"
                    className="p-2 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:rounded-lg "
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    
                    />
                </label>
                <div className="flex justify-center items-center w-full gap-6 pt-4">
                <button type="submit" className="p-2 bg-indigo-400 rounded-md text-white font-semibold px-3 hover:bg-stone-400">Submit</button>
                <button type="button" onClick={() => setToggleDark(false)} className="p-2 bg-indigo-400 rounded-md text-white font-semibold px-4 hover:bg-stone-400">Close</button>
                </div>
            </form>

            
        </div>
    )
}

export default ResumeTemplateModal