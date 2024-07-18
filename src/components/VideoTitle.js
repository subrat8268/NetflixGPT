import React from 'react';
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='h-full pt-48 px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/2'>{overview}</p>
      <div className='flex gap-4 items-center'>
        <button className='flex items-center gap-2 bg-white hover:opacity-40 text-black px-8 py-3 text-xl  rounded-md'> 
            <FaPlay className='text-xl'/>
            Play
        </button>
        <button className='flex items-center gap-2 bg-gray-500 text-white px-4 py-2 text-xl bg-opacity-50 rounded-md'>
            <IoMdInformationCircleOutline className='text-4xl'/>
            More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
