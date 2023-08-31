import { ActionTypes } from '@actionTypes';
import { InterfaceActions, NotesReducerInterface } from '@interfaces';

export const initializeDataRequestAction = (): InterfaceActions => ({
  type: ActionTypes.INITIALIZE_DATA_REQUEST,
});

export const initializeDataSuccessAction = (data: { notesInitialState: NotesReducerInterface}): InterfaceActions=> ({
  type: ActionTypes.INITIALIZE_DATA_SUCCESS,
  payload: data,
});

export const initializeDataFailureAction = (error: any): InterfaceActions => ({
  type: ActionTypes.INITIALIZE_DATA_FAILURE,
  payload: error,
});

export const getActiveNoteRequestAction = (activeNoteId: string): InterfaceActions => ({
  type: ActionTypes.GET_ACTIVE_NOTE_REQUEST,
  payload: activeNoteId
});

export const getActiveNoteSuccessAction = (data: NotesReducerInterface): InterfaceActions => ({
  type: ActionTypes.GET_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const getActiveNoteFailureAction = (error: any): InterfaceActions => ({
  type: ActionTypes.GET_ACTIVE_NOTE_FAILURE,
  payload: error,
});

export const editTextActiveNoteRequestAction = (text: string, dateEdited: string): InterfaceActions => ({
  type: ActionTypes.EDIT_TEXT_ACTIVE_NOTE_REQUEST,
  payload: {
    text,
    dateEdited,
  },
});

export const editTextActiveNoteSuccessAction = (data: { notesInitialState: NotesReducerInterface}): InterfaceActions => ({
  type: ActionTypes.EDIT_TEXT_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const editTextActiveNoteFailureAction = (error: any): InterfaceActions => ({
  type: ActionTypes.EDIT_TEXT_ACTIVE_NOTE_FAILURE,
  payload: error,
});

export const setResizeBorderWidthAction = (resizeBorderWidth: number): InterfaceActions => ({
  type: ActionTypes.SET_RESIZE_BORDER_WIDTH,
  payload: resizeBorderWidth,
});

export const deleteActiveNoteRequestAction = (activeNoteId: string, callback: () => void): InterfaceActions => ({
  type: ActionTypes.DELETE_ACTIVE_NOTE_REQUEST,
  payload: {
    activeNoteId,
    callback,
  },
});

export const deleteActiveNoteSuccessAction = (data: { notesInitialState: NotesReducerInterface}): InterfaceActions => ({
  type: ActionTypes.DELETE_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const deleteActiveNoteFailureAction = (error: any): InterfaceActions => ({
  type: ActionTypes.DELETE_ACTIVE_NOTE_FAILURE,
  payload: error,
});

export const createActiveNoteRequestAction = (dateCreated: string): InterfaceActions => ({
  type: ActionTypes.CREATE_ACTIVE_NOTE_REQUEST,
  payload: dateCreated,
});

export const createActiveNoteSuccessAction = (data: { notesInitialState: NotesReducerInterface}): InterfaceActions => ({
  type: ActionTypes.CREATE_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const createActiveNoteFailureAction = (error: any): InterfaceActions => ({
  type: ActionTypes.CREATE_ACTIVE_NOTE_FAILURE,
  payload: error,
});
