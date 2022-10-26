import {Action} from '@models/actions/common';
import {
  IGetBalancePayLoad,
  IGetCurrentSpendPayLoad,
  IGetIsSpendLimitPayLoad,
  ISaveSpendLimitPayLoad,
  ISetIsSpendLimitPayLoad,
} from '@models/actions/debitCard';
import {put, takeLatest} from 'redux-saga/effects';
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

    if (result !== undefined) {
      yield put(DebitCardActions.getCardInfoSuccess(result));
    }
  } catch (error: Error | any) {
    console.log('hung getBalance Error:', error);
  }
}

function* saveSpendLimit(action: Action<ISaveSpendLimitPayLoad>): any {
  const service = new DebitCardService();
  const payload = <ISaveSpendLimitPayLoad>action.payload;

  const result = yield service.saveSpendLimit(String(payload.spendLimit));

  if (result !== undefined) {
    if (action.callback && action.callback.callbackSuccess) {
      action.callback.callbackSuccess();
    }
  }
}

function* getSpendLimit(action: Action<ISaveSpendLimitPayLoad>): any {
  const service = new DebitCardService();
  const result = yield service.getSpendLimit();

  if (result !== undefined) {
    yield put(DebitCardActions.getSpendLimitSuccess(result));
  }
}

function* getIsSpendLimit(action: Action<IGetIsSpendLimitPayLoad>): any {
  const service = new DebitCardService();
  const result = yield service.isSpendLimit();

  if (result !== undefined) {
    yield put(DebitCardActions.getIsSpendLimitSuccess(result));
  }
}

function* setIsSpendLimit(action: Action<ISetIsSpendLimitPayLoad>): any {
  const service = new DebitCardService();
  const payload = <ISetIsSpendLimitPayLoad>action.payload;
  const result = yield service.setIsSpendLimit(payload.isSpendLimit);
  if (result !== undefined) {
    yield put(DebitCardActions.getIsSpendLimitSuccess(result));
  }
}

function* getCurrentSpend(action: Action<IGetCurrentSpendPayLoad>): any {
  const service = new DebitCardService();
  const result = yield service.getCurrentSpend();

  if (result !== undefined) {
    yield put(DebitCardActions.getCurrentSpendSuccess(result));
  }
}

export default function* watcherSaga() {
  yield takeLatest(DebitCardTypes.GET_BALANCE, getBalance);
  yield takeLatest(DebitCardTypes.GET_CARD_INFO, getCardInfo);
  yield takeLatest(DebitCardTypes.SAVE_SPEND_LIMIT, saveSpendLimit);
  yield takeLatest(DebitCardTypes.GET_SPEND_LIMIT, getSpendLimit);
  yield takeLatest(DebitCardTypes.SET_IS_SPEND_LIMIT, setIsSpendLimit);
  yield takeLatest(DebitCardTypes.GET_IS_SPEND_LIMIT, getIsSpendLimit);
  yield takeLatest(DebitCardTypes.GET_CURRENT_SPEND, getCurrentSpend);
}
