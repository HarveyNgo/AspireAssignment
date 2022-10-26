import {Action} from '@models/actions/common';
import {IGetBalancePayLoad} from '@models/actions/debitCard';
import {takeLatest, put, all, select, delay} from 'redux-saga/effects';
import DebitCardTypes from './debitCard.types';

export function* getBalance(action: Action<IGetBalancePayLoad>): any {
  try {
    const response: IResponse = yield call(
      scpApi.getSupplierHistories,
      authToken,
      action.payload?.supplier.id || '',
      {
        companyId: companyId,
        resourceType: 'supplier',
        limit: action.payload?.perPage,
        page: action.payload?.page,
      },
    );
  } catch (error: Error | any) {}
}

export default function* watcherSaga() {
  yield takeLatest(DebitCardTypes.GET_BALANCE, getBalance);
}
