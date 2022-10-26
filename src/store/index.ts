import {createStore, applyMiddleware, combineReducers} from 'redux';
// import {createSlice, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducers from './reducers';
import rootSaga from './sagas';
import {persistStore, persistReducer} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducers),
);

// let store: any = null;
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

// rehydration(store);
sagaMiddleware.run(rootSaga);
export default store;

export const persistor = persistStore(store, {}, () => {});
