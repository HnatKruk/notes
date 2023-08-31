import { ActionTypes } from '@actionTypes';
import { NotesReducerInterface } from '@interfaces';

interface NotesReducerPayloadInterface {
  notesInitialState: NotesReducerInterface,
};

interface InitializeDataRequestInterface {
  type: ActionTypes.INITIALIZE_DATA_REQUEST;
};

interface InitializeDataSuccessInterface {
  type: ActionTypes.INITIALIZE_DATA_SUCCESS;
  payload: NotesReducerPayloadInterface;
};

interface InitializeDataFailureInterface {
  type: ActionTypes.INITIALIZE_DATA_FAILURE;
  payload: any;
};

export interface GetActiveNoteRequestInterface {
  type: ActionTypes.GET_ACTIVE_NOTE_REQUEST;
  payload: string;
};

interface GetActiveNoteSuccessInterface {
  type: ActionTypes.GET_ACTIVE_NOTE_SUCCESS;
  payload: NotesReducerInterface;
};

interface GetActiveNoteFailureInterface {
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

interface EditTextActiveNoteSuccessInterface {
  type: ActionTypes.EDIT_TEXT_ACTIVE_NOTE_SUCCESS,
  payload: NotesReducerPayloadInterface,
};

interface EditTextActiveNoteFailureInterface {
  type: ActionTypes.EDIT_TEXT_ACTIVE_NOTE_FAILURE,
  payload: any,
};

interface SetResizeBorderWidthInterface {
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

interface DeleteActiveNoteSuccessInterface {
  type: ActionTypes.DELETE_ACTIVE_NOTE_SUCCESS,
  payload: NotesReducerPayloadInterface,
};

interface DeleteActiveNoteFailureInterface {
  type: ActionTypes.DELETE_ACTIVE_NOTE_FAILURE,
  payload: any,
};

export interface CreateActiveNoteRequestInterface {
  type: ActionTypes.CREATE_ACTIVE_NOTE_REQUEST,
  payload: string,
};

interface CreateActiveNoteSuccessInterface {
  type: ActionTypes.CREATE_ACTIVE_NOTE_SUCCESS,
  payload: NotesReducerPayloadInterface,
};

interface CreateActiveNoteFailureInterface {
  type: ActionTypes.CREATE_ACTIVE_NOTE_FAILURE,
  payload: any,
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
  | CreateActiveNoteFailureInterface;