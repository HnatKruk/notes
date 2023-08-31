import { ActionTypes } from '@actionTypes';

const initialState = {
  appLoader: false,
  noteItemLoader: false,
  resizeBorderWidth: 300,
};

export const interfaceReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};
