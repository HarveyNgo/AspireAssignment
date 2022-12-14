import {CardInfo} from '@models/debitCard';

export interface IDebitCardState {
  cardInfo: CardInfo;
  spendLimitList: [];
  spendLimit: number;
  isSpendLimit: boolean;
  balance: number;
  currentSpend: number;
  currency:string
}
