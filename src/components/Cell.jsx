import React from 'react'

const Cell = ({ number, index, handleClick }) => {

  return (
    <span
      onClick={() => handleClick(index)}
      className={`border border-black flex items-center justify-center font-bold text-2xl px-4 h-32 w-32 `}>
      {number}
    </span>
  )
}

export default Cell
