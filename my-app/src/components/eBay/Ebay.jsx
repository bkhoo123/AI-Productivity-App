import React, {useState} from 'react'
import NavBar from '../Navbar'
import dynamic from 'next/dynamic';
import axios from 'axios'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Ebay = () => {
  return (
    <div className="w-full">
      <NavBar />
        <div>

        </div>

        <div>

        </div>

    </div>
  )
}

export default Ebay