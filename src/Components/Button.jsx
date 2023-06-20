import React from 'react'

export const Button = ({ text, onClick}) => {
  return (
    <div className='w-[300px] mx-auto flex items-center justify-center'>
        <button 
        className='bg-purple-500 text-white px-4 py-2 rounded-sm cursor-pointer shadow-xl block w-full'
        onClick={() => onClick()}
        >{text}</button>
    </div>
  )
}
