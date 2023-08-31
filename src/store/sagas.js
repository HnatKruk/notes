import {
  put,
  takeEvery,
  call,
  all,
  fork,
  cancel,
} from 'redux-saga/effects';

import { ActionTypes } from '@actionTypes';

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
} from '@actions';

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
    const data = yield call(deleteActiveNoteRequest, action.payload.activeNoteId);
    yield put(deleteActiveNoteSuccessAction(data));
  } catch (error) {
    yield put(deleteActiveNoteFailureAction(error));
  } finally {
    action.payload.callback();
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

function* watchActiveNoteRequests() {
  let currentTask;

  yield takeEvery(ActionTypes.GET_ACTIVE_NOTE_REQUEST, function* (action) {
    if (currentTask) {
      yield cancel(currentTask);
    }

    currentTask = yield fork(getActiveNoteSaga, action);
  });

  yield takeEvery(ActionTypes.CREATE_ACTIVE_NOTE_REQUEST, function* (action) {
    if (currentTask) {
      yield cancel(currentTask);
    }

    currentTask = yield fork(createActiveNoteSaga, action);
  });
};

export function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.INITIALIZE_DATA_REQUEST, initializeDataSaga),
    takeEvery(ActionTypes.EDIT_TEXT_ACTIVE_NOTE_REQUEST, editTextActiveNoteSaga),
    takeEvery(ActionTypes.DELETE_ACTIVE_NOTE_REQUEST, deleteActiveNoteSaga),
    fork(watchActiveNoteRequests),
  ]);
};
