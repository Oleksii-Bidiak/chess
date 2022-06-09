import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/black-queen.svg";
import WhiteLogo from "../../assets/white-queen.svg";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Queen extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell)
      this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
      this.name = FigureNames.QUEEN
   }

   canMove(target: Cell): boolean {
      if (!super.canMove(target))
         return false
      if (this.cell.isEmptyVertival(target))
         return true
      if (this.cell.isEmptyHorizontal(target))
         return true
      if (this.cell.isEmptyDiagonal(target))
         return true

      return false
   }
}