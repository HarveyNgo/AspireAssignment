import {createReducer, createActions} from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  startupRequest: null,
  startupSuccess: null,

  showIndicator: null,
  hideIndicator: null,
});

export const DebitCardTypes = Types;
export default Creators;
