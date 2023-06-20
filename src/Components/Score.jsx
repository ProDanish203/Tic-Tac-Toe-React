import React from 'react'

export const Score = ({ scores, turn }) => {

  const { xScore, oScore } = scores;

  return (
    <>
    <div className='flex items-center justify-between w-[300px] mx-auto bg-[#ccc] shadow-2xl rounded-md'>
        <div className={`text-2xl font-bold flex items-center justify-center px-2 py-3 w-[50%] rounded-md mx-auto  ${turn ? "text-white bg-red-500" : ""}`}>X-<span>{xScore}</span></div>
        <div className={`text-2xl font-bold flex items-center justify-center px-2 py-3 w-[50%] rounded-md mx-auto ${!turn ? "text-white bg-green-500" : ""}`}>O-<span>{oScore}</span></div>
    </div>
    </>
  )
}
