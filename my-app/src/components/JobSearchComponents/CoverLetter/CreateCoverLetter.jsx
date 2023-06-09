import React, {useState} from 'react'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; 
import 'react-quill/dist/quill.bubble.css';  
import 'react-quill/dist/quill.core.css';  

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

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

const CreateCoverLetter = () => {
    const [content, setContent] = useState("")
    const [quillInstance, setQuillInstance] = useState(null)

    const copyContent = () => {
      if (quillInstance) {
          const text = quillInstance.getText();
          navigator.clipboard.writeText(text);
      }
    };

    return (
      <>
      <div className="mt-8 mx-10 p-6 whitespace-pre-wrap border-2 rounded-md h-auto border-teal-400">
        <div className="flex flex-row items-center gap-6">

            <div onClick={copyContent} className="flex items-center rounded-md p-2 hover:bg-indigo-500 hover:text-white  cursor-pointer gap-2 font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
            Copy
            </div>
          
              <div onClick={() => setContent("")} className="flex items-center hover:bg-indigo-500 hover:text-white rounded-md p-2 cursor-pointer gap-2 font-semibold">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"></path><path d="M22 21H7"></path><path d="m5 11 9 9"></path></svg>
                Erase 
              </div>

              <div className="flex items-center hover:bg-indigo-500 hover:text-white rounded-md p-2 cursor-pointer gap-2 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><line x1="18" x2="22" y1="2" y2="6"></line><path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z"></path></svg>
              Generate Cover Letter
              </div>
              
              
          </div>
      </div>

      <div className="mx-10 my-8 p-8 border-teal-400 border-2 h-[500px] rounded-lg whitespace-pre-wrap">
        
          <ReactQuill 
                theme="bubble"
                className="font-semibold"
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
      </>
    )
}

export default CreateCoverLetter