import { ActionTypes } from '@actionTypes';
import {
  CreateActiveNoteFailureInterface,
  CreateActiveNoteRequestInterface,
  CreateActiveNoteSuccessInterface,
  DeleteActiveNoteFailureInterface,
  DeleteActiveNoteRequestInterface,
  DeleteActiveNoteSuccessInterface,
  EditTextActiveNoteFailureInterface,
  EditTextActiveNoteRequestInterface,
  EditTextActiveNoteSuccessInterface,
  GetActiveNoteFailureInterface,
  GetActiveNoteRequestInterface,
  GetActiveNoteSuccessInterface,
  InitializeDataFailureInterface,
  InitializeDataRequestInterface,
  InitializeDataSuccessInterface,
  NotesReducerInterface,
  SetResizeBorderWidthInterface,
} from '@interfaces';

export const initializeDataRequestAction = (): InitializeDataRequestInterface => ({
  type: ActionTypes.INITIALIZE_DATA_REQUEST,
});

export const initializeDataSuccessAction = (data: { notesInitialState: NotesReducerInterface}): InitializeDataSuccessInterface => ({
  type: ActionTypes.INITIALIZE_DATA_SUCCESS,
  payload: data,
});

export const initializeDataFailureAction = (error: any): InitializeDataFailureInterface => ({
  type: ActionTypes.INITIALIZE_DATA_FAILURE,
  payload: error,
});

export const getActiveNoteRequestAction = (activeNoteId: string): GetActiveNoteRequestInterface => ({
  type: ActionTypes.GET_ACTIVE_NOTE_REQUEST,
  payload: activeNoteId
});

export const getActiveNoteSuccessAction = (data: NotesReducerInterface): GetActiveNoteSuccessInterface => ({
  type: ActionTypes.GET_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const getActiveNoteFailureAction = (error: any): GetActiveNoteFailureInterface => ({
  type: ActionTypes.GET_ACTIVE_NOTE_FAILURE,
  payload: error,
});

export const editTextActiveNoteRequestAction = (text: string, dateEdited: string): EditTextActiveNoteRequestInterface => ({
  type: ActionTypes.EDIT_TEXT_ACTIVE_NOTE_REQUEST,
  payload: {
    text,
    dateEdited,
  },
});

export const editTextActiveNoteSuccessAction = (data: { notesInitialState: NotesReducerInterface}): EditTextActiveNoteSuccessInterface => ({
  type: ActionTypes.EDIT_TEXT_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const editTextActiveNoteFailureAction = (error: any): EditTextActiveNoteFailureInterface => ({
  type: ActionTypes.EDIT_TEXT_ACTIVE_NOTE_FAILURE,
  payload: error,
});

export const setResizeBorderWidthAction = (resizeBorderWidth: number): SetResizeBorderWidthInterface => ({
  type: ActionTypes.SET_RESIZE_BORDER_WIDTH,
  payload: resizeBorderWidth,
});

export const deleteActiveNoteRequestAction = (activeNoteId: string, callback: () => void): DeleteActiveNoteRequestInterface => ({
  type: ActionTypes.DELETE_ACTIVE_NOTE_REQUEST,
  payload: {
    activeNoteId,
    callback,
  },
});

export const deleteActiveNoteSuccessAction = (data: { notesInitialState: NotesReducerInterface}): DeleteActiveNoteSuccessInterface => ({
  type: ActionTypes.DELETE_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const deleteActiveNoteFailureAction = (error: any): DeleteActiveNoteFailureInterface => ({
  type: ActionTypes.DELETE_ACTIVE_NOTE_FAILURE,
  payload: error,
});

export const createActiveNoteRequestAction = (dateCreated: string): CreateActiveNoteRequestInterface => ({
  type: ActionTypes.CREATE_ACTIVE_NOTE_REQUEST,
  payload: dateCreated,
});

export const createActiveNoteSuccessAction = (data: { notesInitialState: NotesReducerInterface}): CreateActiveNoteSuccessInterface => ({
  type: ActionTypes.CREATE_ACTIVE_NOTE_SUCCESS,
  payload: data,
});

export const createActiveNoteFailureAction = (error: any): CreateActiveNoteFailureInterface => ({
  type: ActionTypes.CREATE_ACTIVE_NOTE_FAILURE,
  payload: error,
});
