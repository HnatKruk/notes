import localforage from 'localforage';
import { v4 as uuidv4 } from 'uuid';
import short from 'short-uuid';
import  { rootInitialState } from '../shared/initialState';

class DataBase {
  constructor() {
    this.rootData = 'rootData';
  };

  async initializeDataEndpoint() {
    try {
      const data = await localforage.getItem(this.rootData);
      if (data) {
        return data;
      } else {
        return await localforage.setItem(this.rootData, rootInitialState);
      }
    } catch (error) {
      throw error;
    }
  };

  async getActiveNoteEndpoint(activeNoteId) {
    try {
      const data = await localforage.getItem(this.rootData);

      if (!activeNoteId) {
        data.notesInitialState.activeNote = null;
        const updatedData = await localforage.setItem(this.rootData, data);
        return updatedData.notesInitialState.activeNote;
      } else {
        const activeNote = data.notesInitialState.notesList.find(note => note.routeId === activeNoteId);

        if (activeNote) {
          data.notesInitialState.activeNote = activeNote;
          const updatedData = await localforage.setItem(this.rootData, data);
          return updatedData.notesInitialState.activeNote;
        } else {
          throw new Error();
        }
      }
    } catch (error) {
      throw error;
    }
  };

  async editTextActiveNoteEndpoint({ text, dateEdited }) {
    try {
      const data = await localforage.getItem(this.rootData);
      data.notesInitialState.activeNote.text = text;
      data.notesInitialState.activeNote.dateEdited = dateEdited;
      return await localforage.setItem(this.rootData, data);
    } catch (error) {
      throw error;
    }
  };

  async deleteActiveNoteEndpoint(activeNoteId) {
    try {
      const data = await localforage.getItem(this.rootData);
      data.notesInitialState.activeNote = null;
      const { notesList } = data.notesInitialState;
      const updatedNotesList = notesList.filter(({ id }) => id !== activeNoteId);
      data.notesInitialState.notesList = updatedNotesList;
      return await localforage.setItem(this.rootData, data);
    } catch (error) {
      throw error;
    }
  };

  async createActiveNoteEndpoint(dateCreated) {
    try {
      const activeNote = {
        id: uuidv4(),
        routeId: short.generate(),
        text: '',
        dateCreated: dateCreated,
        dateEdited: dateCreated,
      };

      const data = await localforage.getItem(this.rootData);
      data.notesInitialState.activeNote = activeNote;
      data.notesInitialState.notesList.unshift(activeNote);
      return await localforage.setItem(this.rootData, data);
    } catch (error) {
      throw error;
    }
  };
}

export const myDataBase = new DataBase();
