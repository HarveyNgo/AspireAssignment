import {takeLatest, put, all, select, delay} from 'redux-saga/effects';

import DebitCardActions, {DebitCardTypes} from './debitCard.actions';

function* startupRequest(): any {
  yield delay(500);
  try {
    const user = yield select((state: any) => state?.auth?.user || {});
    yield put(DebitCardActions.startupSuccess());
  } catch (error) {
    //
    yield put(DebitCardActions.startupSuccess());
  }
}

export default function* watcherSaga() {
  yield takeLatest(DebitCardTypes.STARTUP_REQUEST, startupRequest);
}
