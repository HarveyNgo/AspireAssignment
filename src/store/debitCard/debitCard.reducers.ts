import {Action, IPayLoad} from '@models/actions/common';
import {
  IGetBalanceSuccessPayLoad,
  IGetCardInfoSuccessPayLoad,
} from '@models/actions/debitCard';
import {CardInfo} from '@models/debitCard';
import {IDebitCardState} from '@models/reducers/debitCard';
import DebitCardTypes from './debitCard.types';

const initialState: IDebitCardState = {
  cardInfo: {} as CardInfo,
  spendLimitList: [],
  spendLimit: 0,
  isSpendLimit: false,
  balance: 0,
};

export default (state = initialState, action: Action<IPayLoad>) => {
  switch (action.type) {
    case DebitCardTypes.GET_BALANCE_SUCCESS: {
      const getBalanceSuccess = <IGetBalanceSuccessPayLoad>action.payload;
      return {
        ...state,
        balance: getBalanceSuccess.balance,
      };
    }
    case DebitCardTypes.GET_CARD_INFO_SUCCESS: {
      const getCardInfoSuccess = <IGetCardInfoSuccessPayLoad>action.payload;
      return {
        ...state,
        cardInfo: getCardInfoSuccess.cardInfo,
      };
    }

    default:
      return state;
  }
};
