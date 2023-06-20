import React from 'react'

export const Box = ({ value, onClick}) => {
  return (
    <button 
    className={`py-5 px-7 box rounded-md bg-black ${value === "X" ? "text-red-500" : "text-green-500"}  text-6xl font-bold shadow-2xl`} 
    onClick={onClick}
    >{value}</button>
  )
}
