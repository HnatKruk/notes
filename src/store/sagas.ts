import * as Effects from "redux-saga/effects";
import { Task } from 'redux-saga';
import { ActionTypes } from '@actionTypes';

import {
  NotesReducerInterface,
  GetActiveNoteRequestInterface,
  EditTextActiveNoteRequestInterface,
  DeleteActiveNoteRequestInterface,
  CreateActiveNoteRequestInterface,
} from '@/interfaces';

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

const call: any = Effects.call;
const fork: any = Effects.fork;
const put: any = Effects.put;
const takeEvery: any = Effects.takeEvery;
const all: any = Effects.all;
const cancel: any = Effects.cancel;

interface ReturnedData {
  notesInitialState: NotesReducerInterface,
};

function* initializeDataSaga() {
  try {
    const data: ReturnedData = yield call(initializeDataRequest);
    yield put(initializeDataSuccessAction(data));
  } catch (error) {
    yield put(initializeDataFailureAction(error));
  }
};

function* getActiveNoteSaga(action: GetActiveNoteRequestInterface) {
  try {
    const data: NotesReducerInterface = yield call(getActiveNoteRequest, action.payload);
    yield put(getActiveNoteSuccessAction(data));
  } catch (error) {
    yield put(getActiveNoteFailureAction(error));
  }
};

function* editTextActiveNoteSaga(action: EditTextActiveNoteRequestInterface) {
  try {
    const data: ReturnedData = yield call(editTextActiveNoteRequest, action.payload);
    yield put(editTextActiveNoteSuccessAction(data));
  } catch (error) {
    yield put(editTextActiveNoteFailureAction(error));
  }
};

function* deleteActiveNoteSaga(action: DeleteActiveNoteRequestInterface) {
  try {
    const data: ReturnedData = yield call(deleteActiveNoteRequest, action.payload.activeNoteId);
    yield put(deleteActiveNoteSuccessAction(data));
  } catch (error) {
    yield put(deleteActiveNoteFailureAction(error));
  } finally {
    action.payload.callback();
  }
};

function* createActiveNoteSaga(action: CreateActiveNoteRequestInterface) {
  try {
    const data: ReturnedData = yield call(createActiveNoteRequest, action.payload);
    yield put(createActiveNoteSuccessAction(data));
  } catch (error) {
    yield put(createActiveNoteFailureAction(error));
  }
};

function* watchActiveNoteRequests() {
  let currentTask: Task<any>;

  yield takeEvery(ActionTypes.GET_ACTIVE_NOTE_REQUEST, function* (action: GetActiveNoteRequestInterface) {
    if (currentTask) {
      yield cancel(currentTask);
    }

    currentTask = yield fork(getActiveNoteSaga, action);
  });

  yield takeEvery(ActionTypes.CREATE_ACTIVE_NOTE_REQUEST, function* (action: CreateActiveNoteRequestInterface) {
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
