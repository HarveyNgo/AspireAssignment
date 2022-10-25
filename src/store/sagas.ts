import {all} from 'redux-saga/effects';

import debitCardSaga from './debitCard/debitCard.sagas';

export default function* root() {
  yield all([debitCardSaga()]);
}
