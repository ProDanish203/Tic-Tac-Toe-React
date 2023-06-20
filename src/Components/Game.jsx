import React from 'react'
import { Box } from './Box'

export const Game = ({ board, mark }) => {
  return (
    <>
    <div className='mt-10 mb-6 w-[300px] mx-auto game'>
      {
        board.map((value, index) => (
          <Box 
          value={value} 
          onClick={() => value === null && mark(index)} 
          key={index}
          />
        ))
      }
    </div>
    </>
  )
}
