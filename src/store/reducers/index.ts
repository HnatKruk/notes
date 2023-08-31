import { combineReducers } from '@reduxjs/toolkit';
import { notesReducer } from './notesReducer';
import { viewReducer } from './viewReducer';

export const rootReducer = combineReducers({
  notesReducer,
  viewReducer,
});
