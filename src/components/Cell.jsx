import React from 'react'

const Cell = ({ number, index, handleClick }) => {
  let signColor = 'text-green-700'
  if (number === 'O') signColor = 'text-red-700';

  return (
    <span
      onClick={() => handleClick(index)}
      className={`border border-black flex items-center justify-center font-bold text-3xl px-4 h-32 w-32 ${signColor}`}>
      {number}
    </span>
  )
}

export default Cell
