import {
  INITIALIZE_DATA_REQUEST,
  INITIALIZE_DATA_SUCCESS,
  INITIALIZE_DATA_FAILURE,
  GET_ACTIVE_NOTE_REQUEST,
  GET_ACTIVE_NOTE_SUCCESS,
  GET_ACTIVE_NOTE_FAILURE,
  EDIT_TEXT_ACTIVE_NOTE_REQUEST,
  EDIT_TEXT_ACTIVE_NOTE_FAILURE,
  EDIT_TEXT_ACTIVE_NOTE_SUCCESS,
  SET_RESIZE_BORDER_WIDTH,
  DELETE_ACTIVE_NOTE_REQUEST,
  DELETE_ACTIVE_NOTE_SUCCESS,
  DELETE_ACTIVE_NOTE_FAILURE,
  CREATE_ACTIVE_NOTE_REQUEST,
  CREATE_ACTIVE_NOTE_SUCCESS,
  CREATE_ACTIVE_NOTE_FAILURE,
} from './actionsTypes';

export const initializeDataRequestAction = () => ({
  type: INITIALIZE_DATA_REQUEST,
});

export const initializeDataSuccessAction = (data) => ({
  type: INITIALIZE_DATA_SUCCESS,
  payload: data,
});

export const initializeDataFailureAction = (error) => ({
  type: INITIALIZE_DATA_FAILURE,
  payload: error,
});

export const getActiveNoteRequestAction = (activeNoteId) => ({
  type: GET_ACTIVE_NOTE_REQUEST,
  payload: activeNoteId
});

export const getActiveNoteSuccessAction = (data) => ({
  type: GET_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const getActiveNoteFailureAction = (error) => ({
  type: GET_ACTIVE_NOTE_FAILURE,
  payload: error,
});

export const editTextActiveNoteRequestAction = (text, dateEdited) => ({
  type: EDIT_TEXT_ACTIVE_NOTE_REQUEST,
  payload: {
    text,
    dateEdited,
  },
});

export const editTextActiveNoteSuccessAction = (data) => ({
  type: EDIT_TEXT_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const editTextActiveNoteFailureAction = (error) => ({
  type: EDIT_TEXT_ACTIVE_NOTE_FAILURE,
  payload: error,
});

export const setResizeBorderWidthAction = (resizeBorderWidth) => ({
  type: SET_RESIZE_BORDER_WIDTH,
  payload: resizeBorderWidth,
});

export const deleteActiveNoteRequestAction = (activeNoteId, callback) => ({
  type: DELETE_ACTIVE_NOTE_REQUEST,
  payload: {
    activeNoteId,
    callback,
  },
});

export const deleteActiveNoteSuccessAction = (data) => ({
  type: DELETE_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const deleteActiveNoteFailureAction = (error) => ({
  type: DELETE_ACTIVE_NOTE_FAILURE,
  payload: error,
});

export const createActiveNoteRequestAction = (dateCreated) => ({
  type: CREATE_ACTIVE_NOTE_REQUEST,
  payload: dateCreated,
});

export const createActiveNoteSuccessAction = (data) => ({
  type: CREATE_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const createActiveNoteFailureAction = (error) => ({
  type: CREATE_ACTIVE_NOTE_FAILURE,
  payload: error,
});
