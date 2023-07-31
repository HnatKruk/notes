import { put, takeEvery, call } from 'redux-saga/effects';
import {
  CREATE_ACTIVE_NOTE_REQUEST,
  DELETE_ACTIVE_NOTE_REQUEST,
  EDIT_TEXT_ACTIVE_NOTE_REQUEST,
  GET_ACTIVE_NOTE_REQUEST,
  INITIALIZE_DATA_REQUEST,
} from './actionsTypes';

import {
  getActiveNoteRequest,
  initializeDataRequest,
  editTextActiveNoteRequest,
  deleteActiveNoteRequest,
  createActiveNoteRequest,
} from '../api';

import {
  initializeDataSuccessAction,
  initializeDataFailureAction,
  getActiveNoteSuccessAction,
  getActiveNoteFailureAction,
  editTextActiveNoteSuccessAction,
  editTextActiveNoteFailureAction,
  deleteActiveNoteSuccessAction,
  deleteActiveNoteFailureAction,
  createActiveNoteSuccessAction,
  createActiveNoteFailureAction,
} from './actions';

function* initializeDataSaga() {
  try {
    const data = yield call(initializeDataRequest);
    yield put(initializeDataSuccessAction(data));
  } catch (error) {
    yield put(initializeDataFailureAction(error));
  }
};

function* getActiveNoteSaga(action) {
  try {
    const data = yield call(getActiveNoteRequest, action.payload);
    yield put(getActiveNoteSuccessAction(data));
  } catch (error) {
    yield put(getActiveNoteFailureAction(error));
  }
};

function* editTextActiveNoteSaga(action) {
  try {
    const data = yield call(editTextActiveNoteRequest, action.payload);
    yield put(editTextActiveNoteSuccessAction(data));
  } catch (error) {
    yield put(editTextActiveNoteFailureAction(error));
  }
};

function* deleteActiveNoteSaga(action) {
  try {
    const data = yield call(deleteActiveNoteRequest, action.payload);
    yield put(deleteActiveNoteSuccessAction(data));
  } catch (error) {
    yield put(deleteActiveNoteFailureAction(error));
  }
};

function* createActiveNoteSaga(action) {
  try {
    const data = yield call(createActiveNoteRequest, action.payload);
    yield put(createActiveNoteSuccessAction(data));
  } catch (error) {
    yield put(createActiveNoteFailureAction(error));
  }
};

export function* rootSaga() {
  yield takeEvery(INITIALIZE_DATA_REQUEST, initializeDataSaga);
  yield takeEvery(GET_ACTIVE_NOTE_REQUEST, getActiveNoteSaga);
  yield takeEvery(EDIT_TEXT_ACTIVE_NOTE_REQUEST, editTextActiveNoteSaga);
  yield takeEvery(DELETE_ACTIVE_NOTE_REQUEST, deleteActiveNoteSaga);
  yield takeEvery(CREATE_ACTIVE_NOTE_REQUEST, createActiveNoteSaga);
};
