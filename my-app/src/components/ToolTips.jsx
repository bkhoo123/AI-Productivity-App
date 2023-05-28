import React, {useState} from 'react'

const ToolTips = ({how, description}) => {
    const [showToolTip, setShowToolTip] = useState(false)

    return (
        <span
        className="inline-block ml-1 relative "
        onMouseEnter={() => setShowToolTip(true)}
        onMouseLeave={() => setShowToolTip(false)}
        >
        <svg className=""  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
         {showToolTip &&  <div className="absolute right-1 top-5 z-50 bg-blue-50 h-auto w-[200px] rounded-md p-3 text-black mb-4"> {description} 
         <div className="border-t-2 border-gray-400 my-4 w-full"/>
         <div className="underline">How To Use</div>
         <div className="mt-2">{how}</div>
         </div>}   
        </span>
    )
}

export default ToolTips