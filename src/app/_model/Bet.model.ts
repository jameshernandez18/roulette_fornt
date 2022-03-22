import {UsersModel} from './Users.model';
import {RouletteModel} from './Roulette.model';

export class BetModel {
  id: number;
  number: number;
  credit: string;
  iduser: UsersModel;
  idroulette: RouletteModel;
}


export class BetDto{
  number: number;
  credit: string;
  iduser: number;
  idroulette: number;
}
