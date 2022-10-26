import {CardInfo} from '@models/debitCard';
import {IPayLoad} from './common';

export interface IGetBalancePayLoad extends IPayLoad {}

export interface IGetBalanceSuccessPayLoad extends IPayLoad {
  balance: number;
}

export interface IGetCardInfoSuccessPayLoad extends IPayLoad {
  cardInfo: CardInfo;
}
