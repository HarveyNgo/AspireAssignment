import {Action, ICallback} from '@models/actions/common';
import {
  IGetBalancePayLoad,
  IGetBalanceSuccessPayLoad,
  IGetCardInfoPayLoad,
  IGetCardInfoSuccessPayLoad,
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

export default {getBalance, getBalanceSuccess, getCardInfo, getCardInfoSuccess};
