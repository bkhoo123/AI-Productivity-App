import React, {useState} from 'react'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; 
import 'react-quill/dist/quill.bubble.css';  
import 'react-quill/dist/quill.core.css';  
import { PacmanLoader } from 'react-spinners';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import ResumeTemplateModal from '../Modals/ResumeTemplateModal';
import ToolTips from '../ToolTips';

const QuillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean'],
    ],
}

const QuillFormats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

const ResumeTemplate = ({toggleReview, setToggleReview, loading, setLoading, content, setContent}) => {
    const [color, setColor] = useState("#7FFFD4")
    const [quillInstance, setQuillInstance] = useState(null);

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
                size={110}
                />
                </div>
                <div className="text-2xl">Loading ....</div>
            </div>
        
        )
    }
    
    return (
        <>
        <div className="mt-8 mx-10 p-8 whitespace-pre-wrap border-2 rounded-md h-auto border-purple-300">
        <div className="flex flex-row items-center  gap-6">
            <button className="bg-purple-200 p-2 rounded-md hover:bg-gray-300 inline-block">
                Create Resume Template
                <ToolTips
                description={"Create a resume template that you can use to apply to jobs."}
                how={"Click the Create a Resume Template Button and a Popup will appear for you to fill out and then based on that information a resume will be created"}
                />
            </button>
            <button className="bg-purple-200 p-2 rounded-md hover:bg-gray-300">Optimize Your Resume</button>
            <button onClick={copyContent} className="hover:bg-rose-200 p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg></button>
        </div>
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

        <ResumeTemplateModal toggleReview={toggleReview} setToggleReview={setToggleReview} GPTReply={content} setGPTReply={setContent} loading={loading} setLoading={setLoading} />
    </>
    )
}

export default ResumeTemplate