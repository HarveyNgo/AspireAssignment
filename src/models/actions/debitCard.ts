import {CardInfo} from '@models/debitCard';
import {IPayLoad} from './common';

export interface IGetBalancePayLoad extends IPayLoad {}

export interface IGetBalanceSuccessPayLoad extends IPayLoad {
  balance: number;
}

export interface IGetCardInfoSuccessPayLoad extends IPayLoad {
  cardInfo: CardInfo;
}

export interface ISaveSpendLimitPayLoad extends IPayLoad {
  spendLimit: number;
}

export interface IGetSpendLimitSuccessPayLoad extends IPayLoad {
  spendLimit: number;
}
export interface IGetIsSpendLimitPayLoad extends IPayLoad {}
export interface ISetIsSpendLimitPayLoad extends IPayLoad {
  isSpendLimit: boolean;
}

export interface IGetIsSpendLimitSuccessPayLoad extends IPayLoad {
  isSpendLimit: boolean;
}

export interface IGetSpendLimitPayLoad extends IPayLoad {}
export interface IGetCardInfoPayLoad extends IPayLoad {}

export interface IGetCurrentSpendPayLoad extends IPayLoad {}

export interface IGetCurrentSpendSuccessPayLoad extends IPayLoad {
  currentSpend: number;
}

export interface IGetCurrencyPayLoad extends IPayLoad {}

export interface IGetCurrencySuccessPayLoad extends IPayLoad {
  currency: string;
}
