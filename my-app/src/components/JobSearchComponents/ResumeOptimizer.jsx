import React, {useState} from 'react'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; 
import 'react-quill/dist/quill.bubble.css';  
import 'react-quill/dist/quill.core.css';  
import { PacmanLoader } from 'react-spinners';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const ResumeOptimizer = () => {
    const copyContent = () => {
        if (quillInstance) {
            const text = quillInstance.getText();
            navigator.clipboard.writeText(text);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <div>
                <PacmanLoader
                color={color}
                size={100}
                />
                </div>
                <div className="text-2xl">Loading ....</div>
            </div>
        
        )
    }

    return (
        <div className="mt-8 mx-10 p-8 whitespace-pre-wrap border-2 rounded-md h-auto border-purple-300">
        <button onClick={copyContent} className="hover:bg-rose-200 p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg></button>
            <ReactQuill 
                theme="bubble"
                placeholder="This is a Rich Text Editor you can put your Resume here or you can take notes. You can also copy whatever is on here by clicking the Copy Icon."
                value={content}
                onChange={(content, delta, source, editor) => {
                    setContent(content);
                    setQuillInstance(editor);
                }}
                modules={QuillModules}
                formats={QuillFormats}
                preserveWhitespace={true}
            />
        </div>
    )
}

export default ResumeOptimizer