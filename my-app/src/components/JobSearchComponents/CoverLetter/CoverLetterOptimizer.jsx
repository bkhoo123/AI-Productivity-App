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

const CoverLetterOptimizer = () => {
    const [quillInstance, setQuillInstance] = useState(null);
    const [coverLetter, setCoverLetter] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")
  
    return (
      <>
      <div>
        
      </div>

      <div className="mx-10 my-8 p-8 border-teal-400 border-2 h-auto rounded-lg whitespace-pre-wrap">
          <ReactQuill 
                theme="bubble"
                placeholder="Copy and paste the job description here."
                value={description}
                onChange={(description, delta, source, editor) => {
                    setDescription(description);
                    setQuillInstance(editor);
                }}
                modules={QuillModules}
                formats={QuillFormats}
                preserveWhitespace={true}
            />
      </div>

      <div className="mx-10 my-8 p-8 border-teal-400 border-2 h-auto rounded-lg whitespace-pre-wrap">
          <ReactQuill 
                theme="bubble"
                placeholder="The Optimized Cover Letter will appear here."
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

export default CoverLetterOptimizer