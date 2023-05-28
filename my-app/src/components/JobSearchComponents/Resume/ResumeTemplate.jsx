import React, {useState} from 'react'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; 
import 'react-quill/dist/quill.bubble.css';  
import 'react-quill/dist/quill.core.css';  
import { PacmanLoader } from 'react-spinners';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import ResumeTemplateModal from '../../Modals/ResumeTemplateModal';


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

const ResumeTemplate = ({toggleDark, setToggleDark}) => {
    const [color, setColor] = useState("#7FFFD4")
    const [quillInstance, setQuillInstance] = useState(null);
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false)

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
    

    const copyContent = () => {
        if (quillInstance) {
            const text = quillInstance.getText();
            navigator.clipboard.writeText(text);
        }
    };

    

    return (
        <>
        <div className="mt-8 mx-10 p-8 whitespace-pre-wrap border-2 rounded-md h-auto border-purple-300">
        <div className="flex flex-row items-center gap-6">
            <button onClick={copyContent} className="hover:bg-rose-200 p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg></button>
            <button onClick={() => setContent("")} className="hover:bg-rose-200 p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"></path><path d="M22 21H7"></path><path d="m5 11 9 9"></path></svg></button>
            <button onClick={() => setToggleDark(!toggleDark)} className="bg-teal-400 hover:bg-stone-400 p-2 text-white font-semibold rounded-lg text-sm" >Generate Resume Template</button>
        </div>
            <ReactQuill 
                theme="bubble"
                placeholder="This is a rich text editor. You can write notes here and copy them to your clipboard. You can also remove all your notes by clicking the eraser. Also if you want to have a resume template generated for you, click the generate resume template button. "
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

        <ResumeTemplateModal toggleDark={toggleDark} setToggleDark={setToggleDark} GPTReply={content} setGPTReply={setContent} loading={loading} setLoading={setLoading} />
    </>
    )
}

export default ResumeTemplate