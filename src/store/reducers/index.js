import { combineReducers } from '@reduxjs/toolkit';
import { notesReducer } from './notesReducer';
import { interfaceReducer } from './interfaceReducer';

export const rootReducer = combineReducers({
  notesReducer,
  interfaceReducer,
});
