import React, {useState} from 'react'
import { PacmanLoader } from 'react-spinners';
import ReactQuillBubble from '@/components/ReactQuill/ReactQuillBubble';

const ResumeOptimization = () => {
    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState("#7FFFD4")
    const [GPTModel, setGPTModel] = useState("gpt-3.5-turbo")
    const [resume, setResume] = useState("")
    

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <div>
                <PacmanLoader
                color={color}
                size={110}
                />
                </div>
                <div className="text-2xl">Loading ....</div>
            </div>
        )
    }

    return (
        <>
        <div className="m-10">
            <div className="flex flex-col items-start gap-2">
                <label htmlFor="model-select" >
                    Choose a Model
                    <select 
                    id="model-select" 
                    className="w-full py-2 px-4 border rounded-md"
                    value={GPTModel}
                    onChange={e => setGPTModel(e.target.value)}
                    >
                        <option value="gpt-3.5-turbo">GPT 3.5</option>
                        <option value="gpt-4">GPT 4</option>
                    </select>
                </label>
            </div>
        
            <ReactQuillBubble 
            height="auto"
            className="font-semibold border-none"
            placeHolder=""
            
            
            />
        </div>
        </>
    )
}

export default ResumeOptimization