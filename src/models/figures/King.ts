import { Figure, FigureNames } from "./Figure";
import BlackLogo from '../../assets/black-king.svg'
import WhiteLogo from '../../assets/white-king.svg'
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class King extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell)
      this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
      this.name = FigureNames.KING
   }

   canMove(target: Cell): boolean {
      if (!super.canMove(target))
         return false
      return true
   }
}