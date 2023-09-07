import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { ActionTypes } from '@actionTypes';
import { storeMocks } from '../__mocks__/store-mocks';
import {
  createActiveNoteFailureAction,
  createActiveNoteRequestAction,
  createActiveNoteSuccessAction,
  deleteActiveNoteFailureAction,
  deleteActiveNoteRequestAction,
  deleteActiveNoteSuccessAction,
  editTextActiveNoteFailureAction,
  editTextActiveNoteRequestAction,
  editTextActiveNoteSuccessAction,
  getActiveNoteFailureAction,
  getActiveNoteRequestAction,
  getActiveNoteSuccessAction,
  initializeDataFailureAction,
  initializeDataRequestAction,
  initializeDataSuccessAction,
  setResizeBorderWidthAction,
} from '@actions';

describe('Redux Actions', () => {
  describe('initializeDataRequestAction', () => {
    it('should create an action with the correct type', () => {
      const action = initializeDataRequestAction();
      expect(action.type).toBe(ActionTypes.INITIALIZE_DATA_REQUEST);
    });
  
    it('should not have any additional properties', () => {
      const action = initializeDataRequestAction();
      const { type, ...rest } = action;
      expect(Object.keys(rest)).toHaveLength(0);
    });
  });

  describe('initializeDataSuccessAction', () => {
    it('should create an action with the correct type', () => {
      const data = { notesInitialState: storeMocks.notesReducer };
      const action = initializeDataSuccessAction(data);
      expect(action.type).toBe(ActionTypes.INITIALIZE_DATA_SUCCESS);
    });

    it('should have a payload with the provided data', () => {
      const data = { notesInitialState: storeMocks.notesReducer };
      const action = initializeDataSuccessAction(data);
      expect(action.payload).toEqual(data);
    });
  });

  describe('initializeDataFailureAction', () => {
    it('should create an action with the correct type', () => {
      const action = initializeDataFailureAction(null);
      expect(action.type).toBe(ActionTypes.INITIALIZE_DATA_FAILURE);
    });

    it('should have a payload with the provided data', () => {
      const action = initializeDataFailureAction(null);
      expect(action.payload).toEqual(null);
    });
  });

  describe('getActiveNoteRequestAction', () => {
    it('should create an action with the correct type', () => {
      const activeNoteId = storeMocks.notesReducer.activeNote?.id;
      const action = getActiveNoteRequestAction(activeNoteId || '');
      expect(action.type).toBe(ActionTypes.GET_ACTIVE_NOTE_REQUEST);
    });

    it('should have a payload with the provided data', () => {
      const activeNoteId = storeMocks.notesReducer.activeNote?.id;
      const action = getActiveNoteRequestAction(activeNoteId || '');
      expect(action.payload).toEqual(activeNoteId);
    });
  });

  describe('getActiveNoteSuccessAction', () => {
    it('should create an action with the correct type', () => {
      const data = storeMocks.notesReducer;
      const action = getActiveNoteSuccessAction(data);
      expect(action.type).toBe(ActionTypes.GET_ACTIVE_NOTE_SUCCESS);
    });

    it('should have a payload with the provided data', () => {
      const data = storeMocks.notesReducer;
      const action = getActiveNoteSuccessAction(data);
      expect(action.payload).toEqual(data);
    });
  });

  describe('getActiveNoteFailureAction', () => {
    it('should create an action with the correct type', () => {
      const action = getActiveNoteFailureAction(null);
      expect(action.type).toBe(ActionTypes.GET_ACTIVE_NOTE_FAILURE);
    });

    it('should have a payload with the provided data', () => {
      const action = getActiveNoteFailureAction(null);
      expect(action.payload).toEqual(null);
    });
  });

  describe('editTextActiveNoteRequestAction', () => {
    it('should create an action with the correct type', () => {
      const text = storeMocks.notesReducer.activeNote?.text || '';
      const dateEdited = storeMocks.notesReducer.activeNote?.dateEdited || '';
      const action = editTextActiveNoteRequestAction(text, dateEdited);
      expect(action.type).toBe(ActionTypes.EDIT_TEXT_ACTIVE_NOTE_REQUEST);
    });

    it('should have a payload with the provided data', () => {
      const text = storeMocks.notesReducer.activeNote?.text || '';
      const dateEdited = storeMocks.notesReducer.activeNote?.dateEdited || '';
      const action = editTextActiveNoteRequestAction(text, dateEdited);
      expect(action.payload).toEqual({ text, dateEdited });
    });
  });

  describe('editTextActiveNoteSuccessAction', () => {
    it('should create an action with the correct type', () => {
      const data = { notesInitialState: storeMocks.notesReducer };
      const action = editTextActiveNoteSuccessAction(data);
      expect(action.type).toBe(ActionTypes.EDIT_TEXT_ACTIVE_NOTE_SUCCESS);
    });

    it('should have a payload with the provided data', () => {
      const data = { notesInitialState: storeMocks.notesReducer };
      const action = editTextActiveNoteSuccessAction(data);
      expect(action.payload).toEqual(data);
    });
  });

  describe('editTextActiveNoteFailureAction', () => {
    it('should create an action with the correct type', () => {
      const action = editTextActiveNoteFailureAction(null);
      expect(action.type).toBe(ActionTypes.EDIT_TEXT_ACTIVE_NOTE_FAILURE);
    });

    it('should have a payload with the provided data', () => {
      const action = editTextActiveNoteFailureAction(null);
      expect(action.payload).toEqual(null);
    });
  });

  describe('setResizeBorderWidthAction', () => {
    it('should create an action with the correct type', () => {
      const resizeBorderWidth = storeMocks.viewReducer.resizeBorderWidth;
      const action = setResizeBorderWidthAction(resizeBorderWidth);
      expect(action.type).toBe(ActionTypes.SET_RESIZE_BORDER_WIDTH);
    });

    it('should have a payload with the provided data', () => {
      const resizeBorderWidth = storeMocks.viewReducer.resizeBorderWidth;
      const action = setResizeBorderWidthAction(resizeBorderWidth);
      expect(action.payload).toEqual(resizeBorderWidth);
    });
  });

  describe('deleteActiveNoteRequestAction', () => {
    it('should create an action with the correct type', () => {
      const activeNoteId = storeMocks.notesReducer.activeNote?.id || '';
      const callback = () => {};
      const action = deleteActiveNoteRequestAction(activeNoteId, callback);
      expect(action.type).toBe(ActionTypes.DELETE_ACTIVE_NOTE_REQUEST);
    });

    it('should have a payload with the provided data', () => {
      const activeNoteId = storeMocks.notesReducer.activeNote?.id || '';
      const callback = () => {};
      const action = deleteActiveNoteRequestAction(activeNoteId, callback);
      expect(action.payload).toEqual({ activeNoteId, callback });
    });
  });

  describe('deleteActiveNoteSuccessAction', () => {
    it('should create an action with the correct type', () => {
      const data = { notesInitialState: storeMocks.notesReducer };
      const action = deleteActiveNoteSuccessAction(data);
      expect(action.type).toBe(ActionTypes.DELETE_ACTIVE_NOTE_SUCCESS);
    });

    it('should have a payload with the provided data', () => {
      const data = { notesInitialState: storeMocks.notesReducer };
      const action = deleteActiveNoteSuccessAction(data);
      expect(action.payload).toEqual(data);
    });
  });

  describe('deleteActiveNoteFailureAction', () => {
    it('should create an action with the correct type', () => {
      const action = deleteActiveNoteFailureAction(null);
      expect(action.type).toBe(ActionTypes.DELETE_ACTIVE_NOTE_FAILURE);
    });

    it('should have a payload with the provided data', () => {
      const action = deleteActiveNoteFailureAction(null);
      expect(action.payload).toEqual(null);
    });
  });

  describe('createActiveNoteRequestAction', () => {
    it('should create an action with the correct type', () => {
      const dateCreated = new Date().toISOString();
      const action = createActiveNoteRequestAction(dateCreated);
      expect(action.type).toBe(ActionTypes.CREATE_ACTIVE_NOTE_REQUEST);
    });

    it('should have a payload with the provided data', () => {
      const dateCreated = new Date().toISOString();
      const action = createActiveNoteRequestAction(dateCreated);
      expect(action.payload).toEqual(dateCreated);
    });
  });

  describe('createActiveNoteSuccessAction', () => {
    it('should create an action with the correct type', () => {
      const data = { notesInitialState: storeMocks.notesReducer };
      const action = createActiveNoteSuccessAction(data);
      expect(action.type).toBe(ActionTypes.CREATE_ACTIVE_NOTE_SUCCESS);
    });

    it('should have a payload with the provided data', () => {
      const data = { notesInitialState: storeMocks.notesReducer };
      const action = createActiveNoteSuccessAction(data);
      expect(action.payload).toEqual(data);
    });
  });

  describe('createActiveNoteFailureAction', () => {
    it('should create an action with the correct type', () => {
      const action = createActiveNoteFailureAction(null);
      expect(action.type).toBe(ActionTypes.CREATE_ACTIVE_NOTE_FAILURE);
    });

    it('should have a payload with the provided data', () => {
      const action = createActiveNoteFailureAction(null);
      expect(action.payload).toEqual(null);
    });
  });
});

