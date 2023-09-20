import { ActionTypes } from '@actionTypes';
import { viewReducerInterface, InterfaceActions } from '@interfaces';

const initialState: viewReducerInterface = {
  appLoader: false,
  noteItemLoader: false,
  resizeBorderWidth: 300,
  isSearchFocus: false,
};

export const viewReducer = (state = initialState, action: InterfaceActions) => {
  switch (action.type) {
    case ActionTypes.INITIALIZE_DATA_REQUEST:
      return { ...state, appLoader: true };
    case ActionTypes.INITIALIZE_DATA_SUCCESS:
    case ActionTypes.INITIALIZE_DATA_FAILURE:
      return { ...state, appLoader: false };
    case ActionTypes.GET_ACTIVE_NOTE_REQUEST:
      return { ...state, noteItemLoader: true };
    case ActionTypes.GET_ACTIVE_NOTE_SUCCESS:
    case ActionTypes.GET_ACTIVE_NOTE_FAILURE:
      return { ...state, noteItemLoader: false };
    case ActionTypes.SET_RESIZE_BORDER_WIDTH:
      return { ...state, resizeBorderWidth: action.payload };
    case ActionTypes.DELETE_ACTIVE_NOTE_REQUEST: 
      return { ...state, noteItemLoader: true }
    case ActionTypes.DELETE_ACTIVE_NOTE_SUCCESS:
    case ActionTypes.DELETE_ACTIVE_NOTE_FAILURE:
      return { ...state, noteItemLoader: false };
    case ActionTypes.CREATE_ACTIVE_NOTE_REQUEST:
      return { ...state, noteItemLoader: true };
    case ActionTypes.SET_SEARCH_FOCUS:
      return { ...state, isSearchFocus: action.payload }
    default:
      return state;
  }
};
