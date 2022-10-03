import { useState } from 'react'

const useGame = () => {
    const [turn, setTurn] = useState('O');
    const [cells, setCells] = useState(['','','','','','','','',''])
    const [winner, setWinner] = useState('')

    const checkGameOver = (board) => {
     return (board[0]===board[1] && board[1]===board[2] && board[0]!=='')
     || (board[3]===board[4] && board[4]===board[5] && board[3]!=='')
     || (board[6]===board[7] && board[7]===board[8] && board[6]!=='')
     || (board[0]===board[3] && board[3]===board[6] && board[0]!=='')
     || (board[1]===board[4] && board[4]===board[7] && board[1]!=='')
     || (board[2]===board[5] && board[5]===board[8] && board[2]!=='')
     || (board[0]===board[4] && board[4]===board[8] && board[0]!=='')
     || (board[6]===board[4] && board[4]===board[2] && board[6]!=='')
    }
    const resetGame = () => {
      setCells(['','','','','','','','','']);
      setTurn('O');
      setWinner('');
    }

    const handleCellClick = (index) => {
      // Check if game over
      // If true update game Over state and return
      if(winner || cells[index]!==''){
          return;
      }

      // If not check turn
      const newCells = [...cells];
      if(turn === 'O'){
          newCells[index] = 'O'
          setCells(newCells)
          setTurn('X');
      }else {
          newCells[index] = 'X'
          setCells(newCells)
          setTurn('O');

      }
      // Check for game over
      if(checkGameOver(newCells) ){
          setWinner(turn)
          return
      }

  }
  return {turn, cells,winner, handleCellClick, resetGame}
}



export default useGame