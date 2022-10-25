import {createReducer, createActions} from 'reduxsauce';
import {DebitCardTypes} from './debitCard.actions';

export const INITIAL_STATE = {
  isReady: false,
  isShowingIndicator: false,
};

export const startupRequest = (state: any) => {
  return {...state, isReady: false};
};
export const startupSuccess = (state: any) => {
  return {...state, isReady: true};
};

export const showIndicator = (state: any) => {
  return {...state, isShowingIndicator: true};
};
export const hideIndicator = (state: any) => {
  return {...state, isShowingIndicator: false};
};

export const reducer = createReducer(INITIAL_STATE, {
  [DebitCardTypes.STARTUP_REQUEST]: startupRequest,
  [DebitCardTypes.STARTUP_SUCCESS]: startupSuccess,

  [DebitCardTypes.SHOW_INDICATOR]: showIndicator,
  [DebitCardTypes.HIDE_INDICATOR]: hideIndicator,
});
