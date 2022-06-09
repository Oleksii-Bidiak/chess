import React, { FC, useEffect, useState } from 'react'
import { Board } from '../models/Board'
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';
import { CellComponent } from './CellComponent';

interface BoardProps {
   board: Board;
   setBoard: (board: Board) => void;
   currentPlayer: Player | null;
   swapPlayer: () => void
}

export const BoardComponent: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
   const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

   // Приймає аргументом комірку, на яку натискають
   const click = (cell: Cell) => {
      if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
         selectedCell.moveFigure(cell);
         swapPlayer()
         setSelectedCell(null)
      } else {
         if (cell.figure?.color === currentPlayer?.color) {
            setSelectedCell(cell)
         }
      }
      // else if (selectedCell || !cell.figure) {
      //    setSelectedCell(null)
      // }
   }

   useEffect(() => {
      highlightCells()
   }, [selectedCell])


   // Зміна поля available класу Cell, якщо хід можливий
   const highlightCells = () => {
      board.highlightCells(selectedCell)
      updateBoard()
   }

   // Примусовий перерендеринг дошки
   const updateBoard = () => {
      const newBoard = board.getCopyBoard()
      setBoard(newBoard)
   }

   return (
      <>
         <h3 className='title'>Хід {currentPlayer?.color}</h3>
         <div
            className='board'
         >
            {board.cells.map((row, index) =>
               <React.Fragment key={index}>
                  {row.map(cell =>
                     <CellComponent
                        click={click}
                        key={cell.id}
                        cell={cell}
                        selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                     />
                  )}
               </React.Fragment>
            )}
         </div>
      </>
   )
}
