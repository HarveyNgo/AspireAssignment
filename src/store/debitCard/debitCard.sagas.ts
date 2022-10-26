import {Action} from '@models/actions/common';
import {IGetBalancePayLoad} from '@models/actions/debitCard';
import {takeLatest, put, all, select, delay} from 'redux-saga/effects';
import DebitCardService from 'src/services/DebitCardService';
import DebitCardActions from './debitCard.actions';
import DebitCardTypes from './debitCard.types';

export function* getBalance(action: Action<IGetBalancePayLoad>): any {
  try {
    const service = new DebitCardService();
    const result = service.getBalance();
    if (result !== undefined) {
      yield put(DebitCardActions.getBalanceSuccess(result));
    }
  } catch (error: Error | any) {
    console.log('hung getBalance Error:', error);
  }
}

export function* getCardInfo(action: Action<IGetBalancePayLoad>): any {
  try {
    const service = new DebitCardService();
    const result = service.getCardInfo();
    console.log('hung getCardInfo result:', result);
    if (result !== undefined) {
      yield put(DebitCardActions.getCardInfoSuccess(result));
    }
  } catch (error: Error | any) {
    console.log('hung getBalance Error:', error);
  }
}

export default function* watcherSaga() {
  yield takeLatest(DebitCardTypes.GET_BALANCE, getBalance);
  yield takeLatest(DebitCardTypes.GET_CARD_INFO, getCardInfo);
}
