import {Action, ICallback} from '@models/actions/common';
import {IGetBalancePayLoad} from '@models/actions/debitCard';
import DebitCardTypes from './debitCard.types';

const getBalance = (): Action<IGetBalancePayLoad> => ({
  type: DebitCardTypes.GET_BALANCE,
  payload: {},
});

export default {getBalance};
