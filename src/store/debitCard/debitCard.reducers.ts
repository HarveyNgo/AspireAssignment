import {Action, IPayLoad} from '@models/actions/common';
import {CardInfo} from '@models/debitCard';
import {IDebitCardState} from '@models/reducers/debitCard';

const initialState: IDebitCardState = {
  cardInfo: {} as CardInfo,
  spendLimitList: [],
  spendLimit: 0,
  isSpendLimit: false,
};

export default (state = initialState, action: Action<IPayLoad>) => {
  switch (action.type) {
    default:
      return state;
  }
};
