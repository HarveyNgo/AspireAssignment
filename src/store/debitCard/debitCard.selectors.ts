import {IMainState} from '@models/reducers/mainState';
import {createSelector} from 'reselect';

const _selectDebitCard = (state: IMainState) => state.debitCard;

export const getBalance = createSelector(
  _selectDebitCard,
  debitCard => debitCard.balance,
);

export const getCardInfo = createSelector(
  _selectDebitCard,
  debitCard => debitCard.cardInfo,
);

export const getIsSpendLimit = createSelector(
  _selectDebitCard,
  debitCard => debitCard.isSpendLimit,
);
export const getSpendLimit = createSelector(
  _selectDebitCard,
  debitCard => debitCard.spendLimit,
);

export const getCurrentSpend = createSelector(
  _selectDebitCard,
  debitCard => debitCard.currentSpend,
);

export default {
  getBalance,
  getCardInfo,
  getIsSpendLimit,
  getSpendLimit,
  getCurrentSpend,
};
