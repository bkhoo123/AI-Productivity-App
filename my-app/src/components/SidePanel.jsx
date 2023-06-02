import React, {useState} from 'react'


const SidePanel = ({activePanel, setActivePanel}) => {
    const [current, setCurrent] = useState("")

    
    return (
        <div className="w-[25%] border-r h-screen bg-slate-50 pt-5">
            <div className="flex items-center ml-5">
            <div className="text-center font-bold text-2xl">WunderAI</div>
            </div>

            <div className="flex justify-start flex-col mt-4">

                <div onClick={() => {setActivePanel("JobSearch"); setCurrent("JobSearch")}} className={`text-slate-600 font-bold w-full p-4 cursor-pointer ${current === "JobSearch" ? "border-l-4 border-indigo-500" : ""}`}> Job Search</div>

                <div onClick={() => {setActivePanel("Ebay"); setCurrent("Ebay")}} className={`text-slate-600 font-bold w-full p-4 cursor-pointer ${current === "Ebay" ? "border-l-4 border-indigo-500" : ""}`}>eBay</div>

                <div className="text-slate-600 font-bold hover:bg-orange-200 w-full p-4 cursor-pointer">Personal</div>

                <div className="text-slate-600 font-bold hover:bg-orange-200 w-full p-4 cursor-pointer">Productivity</div>
                
                <div className="text-slate-600 font-bold hover:bg-orange-200 w-full p-4 cursor-pointer">URL Summarizer</div>
                <div className="text-slate-600 font-bold hover:bg-orange-200 w-full p-4 cursor-pointer">
                <img src="https://ik.imagekit.io/aifinder/logos/Midjourney.webp" 
                className="h-10 w-10 inline-block mx-2"
                alt="" 
                /> AI Image Generator</div>
                <div className="text-slate-600 font-bold hover:bg-orange-200 w-full p-4 cursor-pointer">Coding</div>
                <div className="text-slate-600 font-bold hover:bg-orange-200 w-full p-4 cursor-pointer">Sentiment Analysis</div>
                <div className="text-slate-600 font-bold hover:bg-orange-200 w-full p-4 cursor-pointer">Translation</div>
                <div className="text-slate-600 font-bold hover:bg-orange-200 w-full p-4 cursor-pointer">Overview</div>
                

                <button  className="flex gap-4 pl-6 flex-row items-center bg-indigo-200 py-4 text-sm">
                <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="M16.5 9.4 7.55 4.24"></path><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
                <div>Shipment Tracking</div>
                </button>
            </div>
        </div>
    )
}

export default SidePanel

