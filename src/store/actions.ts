import { ActionTypes } from '@actionTypes';

export const initializeDataRequestAction = () => ({
  type: ActionTypes.INITIALIZE_DATA_REQUEST,
});

export const initializeDataSuccessAction = (data) => ({
  type: ActionTypes.INITIALIZE_DATA_SUCCESS,
  payload: data,
});

export const initializeDataFailureAction = (error: any) => ({
  type: ActionTypes.INITIALIZE_DATA_FAILURE,
  payload: error,
});

export const getActiveNoteRequestAction = (activeNoteId) => ({
  type: ActionTypes.GET_ACTIVE_NOTE_REQUEST,
  payload: activeNoteId
});

export const getActiveNoteSuccessAction = (data) => ({
  type: ActionTypes.GET_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const getActiveNoteFailureAction = (error: any) => ({
  type: ActionTypes.GET_ACTIVE_NOTE_FAILURE,
  payload: error,
});

export const editTextActiveNoteRequestAction = (text, dateEdited) => ({
  type: ActionTypes.EDIT_TEXT_ACTIVE_NOTE_REQUEST,
  payload: {
    text,
    dateEdited,
  },
});

export const editTextActiveNoteSuccessAction = (data) => ({
  type: ActionTypes.EDIT_TEXT_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const editTextActiveNoteFailureAction = (error: any) => ({
  type: ActionTypes.EDIT_TEXT_ACTIVE_NOTE_FAILURE,
  payload: error,
});

export const setResizeBorderWidthAction = (resizeBorderWidth) => ({
  type: ActionTypes.SET_RESIZE_BORDER_WIDTH,
  payload: resizeBorderWidth,
});

export const deleteActiveNoteRequestAction = (activeNoteId, callback) => ({
  type: ActionTypes.DELETE_ACTIVE_NOTE_REQUEST,
  payload: {
    activeNoteId,
    callback,
  },
});

export const deleteActiveNoteSuccessAction = (data) => ({
  type: ActionTypes.DELETE_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const deleteActiveNoteFailureAction = (error: any) => ({
  type: ActionTypes.DELETE_ACTIVE_NOTE_FAILURE,
  payload: error,
});

export const createActiveNoteRequestAction = (dateCreated) => ({
  type: ActionTypes.CREATE_ACTIVE_NOTE_REQUEST,
  payload: dateCreated,
});

export const createActiveNoteSuccessAction = (data) => ({
  type: ActionTypes.CREATE_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const createActiveNoteFailureAction = (error: any) => ({
  type: ActionTypes.CREATE_ACTIVE_NOTE_FAILURE,
  payload: error,
});
