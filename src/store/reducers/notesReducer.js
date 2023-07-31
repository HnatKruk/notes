import { rootInitialState } from '../../shared/initialState';
import {
  INITIALIZE_DATA_REQUEST,
  INITIALIZE_DATA_FAILURE,
  INITIALIZE_DATA_SUCCESS,
  GET_ACTIVE_NOTE_FAILURE,
  GET_ACTIVE_NOTE_SUCCESS,
  EDIT_TEXT_ACTIVE_NOTE_SUCCESS,
  DELETE_ACTIVE_NOTE_SUCCESS,
  CREATE_ACTIVE_NOTE_SUCCESS,
} from '../actionsTypes';

const initialState = {
  ...rootInitialState.notesInitialState,
  isNotesLoaded: false,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_DATA_REQUEST:
      return { ...state, activeNote: null };
    case INITIALIZE_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload.notesInitialState,
        isNotesLoaded: true,
      };
    case INITIALIZE_DATA_FAILURE:
      return { ...state, isNotesLoaded: false };
    case GET_ACTIVE_NOTE_SUCCESS:
      return {
        ...state,
        activeNote: action.payload,
      };
    case GET_ACTIVE_NOTE_FAILURE:
      return { ...state, activeNote: null };
    case EDIT_TEXT_ACTIVE_NOTE_SUCCESS:
      return { ...state, ...action.payload.notesInitialState };
    case DELETE_ACTIVE_NOTE_SUCCESS:
      return { ...state, ...action.payload.notesInitialState };
    case CREATE_ACTIVE_NOTE_SUCCESS:
      return { ...state, ...action.payload.notesInitialState };
    default:
      return state;
  }
};
