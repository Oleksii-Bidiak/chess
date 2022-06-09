import logo from '../../black-bishop.svg'
import { Cell } from '../Cell';
import { Colors } from "../Colors";

export enum FigureNames {
   FIGURE = 'Фигура',
   KING = 'Король',
   KNIGHT = 'Кінь',
   PAWN = 'Пішак',
   QUEEN = 'Ферзь',
   ROOK = 'Тура',
   BISHOP = 'Слон',

}

export class Figure {
   color: Colors;
   logo: typeof logo | null;
   cell: Cell;
   name: FigureNames;
   id: number

   constructor(color: Colors, cell: Cell) {
      this.color = color;
      this.cell = cell
      this.cell.figure = this;
      this.logo = null;
      this.name = FigureNames.FIGURE
      this.id = Math.random()
   }

   // Метод, що повідомляє, чи може рухатись фігура на дану комірку (поверне true), чи ні (false) 
   canMove(target: Cell): boolean {
      if (target.figure?.color === this.color)
         return false
      if (target.figure?.name === FigureNames.KING)
         return false

      return true
   }

   moveFigure(target: Cell) { }
}