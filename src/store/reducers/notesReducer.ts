import { rootInitialState } from '../../shared/initialState';
import { ActionTypes } from '@actionTypes';
import { NotesReducerInterface, InterfaceActions } from '@interfaces';

const initialState: NotesReducerInterface = {
  ...rootInitialState.notesInitialState,
  isNotesLoaded: false,
};

export const notesReducer = (state = initialState, action: InterfaceActions) => {
  switch (action.type) {
    case ActionTypes.INITIALIZE_DATA_REQUEST:
      return { ...state, activeNote: null };
    case ActionTypes.INITIALIZE_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload.notesInitialState,
        isNotesLoaded: true,
      };
    case ActionTypes.INITIALIZE_DATA_FAILURE:
      return { ...state, isNotesLoaded: false };
    case ActionTypes.GET_ACTIVE_NOTE_SUCCESS:
      return {
        ...state,
        activeNote: action.payload,
      };
    case ActionTypes.GET_ACTIVE_NOTE_FAILURE:
      return { ...state, activeNote: null };
    case ActionTypes.EDIT_TEXT_ACTIVE_NOTE_SUCCESS:
    case ActionTypes.DELETE_ACTIVE_NOTE_SUCCESS:
    case ActionTypes.CREATE_ACTIVE_NOTE_SUCCESS:
    case ActionTypes.SET_FILTER_TEXT_SUCCESS:
      return { ...state, ...action.payload.notesInitialState };
    default:
      return state;
  }
};
