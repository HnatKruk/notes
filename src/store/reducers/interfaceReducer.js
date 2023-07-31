import {
  CREATE_ACTIVE_NOTE_FAILURE,
  CREATE_ACTIVE_NOTE_REQUEST,
  CREATE_ACTIVE_NOTE_SUCCESS,
  GET_ACTIVE_NOTE_FAILURE,
  GET_ACTIVE_NOTE_REQUEST,
  GET_ACTIVE_NOTE_SUCCESS,
  INITIALIZE_DATA_FAILURE,
  INITIALIZE_DATA_REQUEST,
  INITIALIZE_DATA_SUCCESS,
  SET_RESIZE_BORDER_WIDTH,
} from '../actionsTypes';

const initialState = {
  appLoader: false,
  noteItemLoader: false,
  resizeBorderWidth: 300,
};

export const interfaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_DATA_REQUEST:
      return { ...state, appLoader: true };
    case INITIALIZE_DATA_SUCCESS:
    case INITIALIZE_DATA_FAILURE:
      return { ...state, appLoader: false };
    case GET_ACTIVE_NOTE_REQUEST:
      return { ...state, noteItemLoader: true };
    case GET_ACTIVE_NOTE_SUCCESS:
    case GET_ACTIVE_NOTE_FAILURE:
      return { ...state, noteItemLoader: false };
    case SET_RESIZE_BORDER_WIDTH:
      return { ...state, resizeBorderWidth: action.payload };
    case CREATE_ACTIVE_NOTE_REQUEST:
      return { ...state, noteItemLoader: true };
    case CREATE_ACTIVE_NOTE_SUCCESS:
    case CREATE_ACTIVE_NOTE_FAILURE:
      return { ...state, noteItemLoader: false };
    default:
      return state;
  }
};
