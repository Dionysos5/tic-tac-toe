import React from 'react'
import useGame from '../hooks/useGame';
import Cell from './Cell';


const Board = () => {
  const { turn, cells, winner, handleCellClick, resetGame } = useGame()
  return (
    <div className='flex flex-col justify-center items-center'>
      <button onClick={resetGame} className=" bg-blue-700 text-white px-8 py-4 m-4 rounded " >Reset</button>
      <div className='border border-black grid grid-cols-3 h-96 w-96'>
        {cells.map((cell, index) => {
          return <Cell key={index} index={index} number={cell} handleClick={handleCellClick} />
        })}
      </div>
      <div>
        Current player: {turn} <br />
        {winner && <div> Winner : {winner} </div>}
      </div>
    </div>
  )
}

export default Board