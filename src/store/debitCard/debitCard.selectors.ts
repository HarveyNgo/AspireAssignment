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

export default {
  getBalance,
  getCardInfo,
};
