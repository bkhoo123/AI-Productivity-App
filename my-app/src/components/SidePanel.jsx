import React, {useState, useEffect} from 'react'
import ToolTips from './ToolTips'

const SidePanel = ({activePanel, setActivePanel}) => {
    const [current, setCurrent] = useState("JobSearch")

    // useEffect(() => {
    //     setCurrent("JobSearch")
    // }, [])

    
    return (
        <div className="w-[25%] border-r h-screen bg-slate-50 pt-5">
            <div className="flex items-center ml-5">
            <div className="text-center font-bold text-2xl">WunderAI</div>
            </div>

            <div className="flex justify-start flex-col mt-4">

                <div onClick={() => {setActivePanel("JobSearch"); setCurrent("JobSearch")}} className={`text-slate-600 font-bold w-full p-4 cursor-pointer ${current === "JobSearch" ? "border-l-4 border-indigo-500" : ""}`}>Job Search 
                <ToolTips
                description="Job Search AI Tools"
                how="Click on the Job Search Tab to see the AI Tools available for Job Search"
                />
                </div>

                <div onClick={() => {setActivePanel("Ebay"); setCurrent("Ebay")}} className={`text-slate-600 font-bold w-full p-4 cursor-pointer ${current === "Ebay" ? "border-l-4 border-indigo-500" : ""}`}>eBay</div>

                <div onClick={() => {setActivePanel("Personal"); setCurrent("Personal")}} className={`text-slate-600 font-bold w-full p-4 cursor-pointer ${current === "Personal" ? "border-l-4 border-indigo-500" : ""}`}>Personal</div>

                <div onClick={() => {setActivePanel("Dating"); setCurrent("Dating")}} className={`text-slate-600 font-bold w-full p-4 cursor-pointer ${current === "Dating" ? "border-l-4 border-indigo-500" : ""}`}>Dating</div>


                <div className="text-slate-600 font-bold hover:bg-orange-200 w-full p-4 cursor-pointer">Productivity</div>

                <div className="text-slate-600 font-bold hover:bg-orange-200 w-full p-4 cursor-pointer">
                <img src="https://ik.imagekit.io/aifinder/logos/Midjourney.webp" 
                className="h-10 w-10 inline-block mx-2"
                alt="" 
                /> AI Image Generator</div>
                <div className="text-slate-600 font-bold hover:bg-orange-200 w-full p-4 cursor-pointer">Coding</div>
                <div className="text-slate-600 font-bold hover:bg-orange-200 w-full p-4 cursor-pointer">Sentiment Analysis</div>
                <div className="text-slate-600 font-bold hover:bg-orange-200 w-full p-4 cursor-pointer">Translation</div>
                <div onClick={() => {setActivePanel("Rubbish"); setCurrent("Rubbish")}} className={`text-slate-600 font-bold w-full p-4 cursor-pointer ${current === "Rubbish" ? "border-l-4 border-indigo-500" : ""}`}>Rubbish Chat Bot</div>
            </div>
        </div>
    )
}

export default SidePanel

