import {Action, ICallback} from '@models/actions/common';
import {
  IGetBalancePayLoad,
  IGetBalanceSuccessPayLoad,
  IGetCardInfoPayLoad,
  IGetCardInfoSuccessPayLoad,
  IGetCurrencyPayLoad,
  IGetCurrencySuccessPayLoad,
  IGetCurrentSpendPayLoad,
  IGetCurrentSpendSuccessPayLoad,
  IGetIsSpendLimitPayLoad,
  IGetIsSpendLimitSuccessPayLoad,
  IGetSpendLimitPayLoad,
  IGetSpendLimitSuccessPayLoad,
  ISaveSpendLimitPayLoad,
  ISetIsSpendLimitPayLoad,
} from '@models/actions/debitCard';
import {CardInfo} from '@models/debitCard';
import DebitCardTypes from './debitCard.types';

const getBalance = (): Action<IGetBalancePayLoad> => ({
  type: DebitCardTypes.GET_BALANCE,
  payload: {},
});
const getBalanceSuccess = (
  balance: number,
): Action<IGetBalanceSuccessPayLoad> => ({
  type: DebitCardTypes.GET_BALANCE_SUCCESS,
  payload: {balance},
});

const getCardInfo = (): Action<IGetCardInfoPayLoad> => ({
  type: DebitCardTypes.GET_CARD_INFO,
  payload: {},
});

const getCardInfoSuccess = (
  cardInfo: CardInfo,
): Action<IGetCardInfoSuccessPayLoad> => ({
  type: DebitCardTypes.GET_CARD_INFO_SUCCESS,
  payload: {cardInfo},
});

const saveSpendLimit = (
  spendLimit: number,
  callback: ICallback,
): Action<ISaveSpendLimitPayLoad> => ({
  type: DebitCardTypes.SAVE_SPEND_LIMIT,
  payload: {spendLimit},
  callback,
});

const getSpendLimit = (): Action<IGetSpendLimitPayLoad> => ({
  type: DebitCardTypes.GET_SPEND_LIMIT,
  payload: {},
});

const getSpendLimitSuccess = (
  spendLimit: number,
): Action<IGetSpendLimitSuccessPayLoad> => ({
  type: DebitCardTypes.GET_SPEND_LIMIT_SUCCESS,
  payload: {spendLimit},
});

export const getIsSpendLimit = (): Action<IGetIsSpendLimitPayLoad> => ({
  type: DebitCardTypes.GET_IS_SPEND_LIMIT,
  payload: {},
});

export const setIsSpendLimit = (
  isSpendLimit: boolean,
): Action<ISetIsSpendLimitPayLoad> => ({
  type: DebitCardTypes.SET_IS_SPEND_LIMIT,
  payload: {isSpendLimit},
});

export const getIsSpendLimitSuccess = (
  isSpendLimit: boolean,
): Action<IGetIsSpendLimitSuccessPayLoad> => ({
  type: DebitCardTypes.GET_IS_SPEND_LIMIT_SUCCESS,
  payload: {isSpendLimit},
});

const getCurrentSpend = (): Action<IGetCurrentSpendPayLoad> => ({
  type: DebitCardTypes.GET_CURRENT_SPEND,
  payload: {},
});

const getCurrentSpendSuccess = (
  currentSpend: number,
): Action<IGetCurrentSpendSuccessPayLoad> => ({
  type: DebitCardTypes.GET_CURRENT_SPEND_SUCCESS,
  payload: {currentSpend},
});

const getCurrency = (): Action<IGetCurrencyPayLoad> => ({
  type: DebitCardTypes.GET_CURRENCY,
  payload: {},
});

const getCurrencySuccess = (
  currency: string,
): Action<IGetCurrencySuccessPayLoad> => ({
  type: DebitCardTypes.GET_CURRENCY_SUCCESS,
  payload: {currency},
});

export default {
  getBalance,
  getBalanceSuccess,
  getCardInfo,
  getCardInfoSuccess,
  saveSpendLimit,
  getSpendLimit,
  getSpendLimitSuccess,
  getIsSpendLimit,
  setIsSpendLimit,
  getIsSpendLimitSuccess,
  getCurrentSpend,
  getCurrentSpendSuccess,
  getCurrency,
  getCurrencySuccess,
};
