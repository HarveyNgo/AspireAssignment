import {Action, IPayLoad} from '@models/actions/common';
import {
  IGetBalanceSuccessPayLoad,
  IGetCardInfoSuccessPayLoad,
  IGetCurrentSpendSuccessPayLoad,
  IGetIsSpendLimitSuccessPayLoad,
  IGetSpendLimitSuccessPayLoad,
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
  currentSpend: 0,
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
    case DebitCardTypes.GET_SPEND_LIMIT_SUCCESS: {
      const getSpendLimitSuccess = <IGetSpendLimitSuccessPayLoad>action.payload;
      return {
        ...state,
        spendLimit: getSpendLimitSuccess.spendLimit,
      };
    }

    case DebitCardTypes.GET_IS_SPEND_LIMIT_SUCCESS: {
      const getIsSpendLimitSuccess = <IGetIsSpendLimitSuccessPayLoad>(
        action.payload
      );
      return {
        ...state,
        isSpendLimit: getIsSpendLimitSuccess.isSpendLimit,
      };
    }

    case DebitCardTypes.GET_CURRENT_SPEND_SUCCESS: {
      const getCurrentSpendSuccess = <IGetCurrentSpendSuccessPayLoad>(
        action.payload
      );
      return {
        ...state,
        currentSpend: getCurrentSpendSuccess.currentSpend,
      };
    }

    default:
      return state;
  }
};
