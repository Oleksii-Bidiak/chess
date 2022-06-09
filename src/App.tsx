import React, { useEffect, useState } from 'react'
import './App.scss'
import { BoardComponent } from './components/BoardComponent'
import { LostFigures } from './components/LostFigures'
import { Timer } from './components/Timer'
import { Board } from './models/Board'
import { Colors } from './models/Colors'
import { Player } from './models/Player'

export const App = () => {
  // Стан для згенерованої дошки
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setwhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
  }, [])

  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
    setCurrentPlayer(whitePlayer)
  }

  return (
    <div className='app'>
      <Timer
        currentPlayer={currentPlayer}
        restart={restart}
      />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures
          title="Чорні фігури"
          figures={board.lostBlackFigures}
        />
        <LostFigures
          title="Білі фігури"
          figures={board.lostWhiteFigures}
        />
      </div>
    </div>
  )
}
