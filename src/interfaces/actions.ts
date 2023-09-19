import { ActionTypes } from '@actionTypes';
import { NotesReducerInterface } from '@interfaces';

interface NotesReducerPayloadInterface {
  notesInitialState: NotesReducerInterface,
};

export interface InitializeDataRequestInterface {
  type: ActionTypes.INITIALIZE_DATA_REQUEST;
};

export interface InitializeDataSuccessInterface {
  type: ActionTypes.INITIALIZE_DATA_SUCCESS;
  payload: NotesReducerPayloadInterface;
};

export interface InitializeDataFailureInterface {
  type: ActionTypes.INITIALIZE_DATA_FAILURE;
  payload: any;
};

export interface GetActiveNoteRequestInterface {
  type: ActionTypes.GET_ACTIVE_NOTE_REQUEST;
  payload: string;
};

export interface GetActiveNoteSuccessInterface {
  type: ActionTypes.GET_ACTIVE_NOTE_SUCCESS;
  payload: NotesReducerInterface;
};

export interface GetActiveNoteFailureInterface {
  type: ActionTypes.GET_ACTIVE_NOTE_FAILURE;
  payload: any;
};

export interface EditTextActiveNoteRequestInterface {
  type: ActionTypes.EDIT_TEXT_ACTIVE_NOTE_REQUEST,
  payload: {
    text: string,
    dateEdited: string,
  },
};

export interface EditTextActiveNoteSuccessInterface {
  type: ActionTypes.EDIT_TEXT_ACTIVE_NOTE_SUCCESS,
  payload: NotesReducerPayloadInterface,
};

export interface EditTextActiveNoteFailureInterface {
  type: ActionTypes.EDIT_TEXT_ACTIVE_NOTE_FAILURE,
  payload: any,
};

export interface SetResizeBorderWidthInterface {
  type: ActionTypes.SET_RESIZE_BORDER_WIDTH,
  payload: number,
};

export interface DeleteActiveNoteRequestInterface {
  type: ActionTypes.DELETE_ACTIVE_NOTE_REQUEST,
  payload: {
    activeNoteId: string,
    callback: () => void,
  },
};

export interface DeleteActiveNoteSuccessInterface {
  type: ActionTypes.DELETE_ACTIVE_NOTE_SUCCESS,
  payload: NotesReducerPayloadInterface,
};

export interface DeleteActiveNoteFailureInterface {
  type: ActionTypes.DELETE_ACTIVE_NOTE_FAILURE,
  payload: any,
};

export interface CreateActiveNoteRequestInterface {
  type: ActionTypes.CREATE_ACTIVE_NOTE_REQUEST,
  payload: string,
};

export interface CreateActiveNoteSuccessInterface {
  type: ActionTypes.CREATE_ACTIVE_NOTE_SUCCESS,
  payload: NotesReducerPayloadInterface,
};

export interface CreateActiveNoteFailureInterface {
  type: ActionTypes.CREATE_ACTIVE_NOTE_FAILURE,
  payload: any,
};

export interface SetFilterTextRequestInterface {
  type: ActionTypes.SET_FILTER_TEXT_REQUEST,
  payload: string,
};

export interface SetFilterTextSuccessInterface {
  type: ActionTypes.SET_FILTER_TEXT_SUCCESS,
  payload: NotesReducerPayloadInterface,
};

export interface SetFilterTextFailureInterface {
  type: ActionTypes.SET_FILTER_TEXT_FAILURE,
  payload: NotesReducerPayloadInterface,
};

export type InterfaceActions =
  | InitializeDataRequestInterface
  | InitializeDataSuccessInterface
  | InitializeDataFailureInterface
  | GetActiveNoteRequestInterface
  | GetActiveNoteSuccessInterface
  | GetActiveNoteFailureInterface
  | EditTextActiveNoteRequestInterface
  | EditTextActiveNoteSuccessInterface
  | EditTextActiveNoteFailureInterface
  | SetResizeBorderWidthInterface
  | DeleteActiveNoteRequestInterface
  | DeleteActiveNoteSuccessInterface
  | DeleteActiveNoteFailureInterface
  | CreateActiveNoteRequestInterface
  | CreateActiveNoteSuccessInterface
  | CreateActiveNoteFailureInterface
  | SetFilterTextRequestInterface
  | SetFilterTextSuccessInterface
  | SetFilterTextFailureInterface;