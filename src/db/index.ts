import localforage from 'localforage';
import { v4 as uuidv4 } from 'uuid';
import short from 'short-uuid';
import { InitialStateInterface } from '@interfaces';

class DataBase {
  private _rootData: string;

  constructor() {
    this._rootData = 'rootData';
  }

  get rootData() {
    return this._rootData;
  }

  async initializeDataEndpoint() {
    try {
      const data = await this._getData();
      if (data) {
        return data;
      } else {
        this._setData({
          notesInitialState: {
            activeNote: null,
            filterText: '',
            notesList: [],
          }
        })
      }
    } catch (error) {
      throw error;
    }
  }

  async getActiveNoteEndpoint(activeNoteId: string) {
    try {
      const data = await this._getData();
      if (!data) {
        throw new Error("Data not found");
      } else if (!activeNoteId) {
        data.notesInitialState.activeNote = null;
        const updatedData = await this._setData(data);
        return updatedData.notesInitialState.activeNote;
      } else {
        const activeNote = data.notesInitialState.notesList.find((note) => note.routeId === activeNoteId);

        if (activeNote) {
          data.notesInitialState.activeNote = activeNote;
          const updatedData = await this._setData(data);
          return updatedData.notesInitialState.activeNote;
        } else {
          throw new Error("Active note not found");
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async editTextActiveNoteEndpoint({ text, dateEdited }: { text: string; dateEdited: string }) {
    try {
      const data = await this._getData();
      if (data && data.notesInitialState.activeNote) {
        data.notesInitialState.activeNote.text = text;
        data.notesInitialState.activeNote.dateEdited = dateEdited;
        return await this._setData(data);
      } else {
        throw new Error("Data or active note not found");
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteActiveNoteEndpoint(activeNoteId: string) {
    try {
      const data = await this._getData();
      if (data) {
        data.notesInitialState.activeNote = null;
        const { notesList } = data.notesInitialState;
        const updatedNotesList = notesList.filter(({ id }) => id !== activeNoteId);
        data.notesInitialState.notesList = updatedNotesList;
        return await this._setData(data);
      } else {
        throw new Error("Data not found");
      }
    } catch (error) {
      throw error;
    }
  }

  async createActiveNoteEndpoint(dateCreated: string) {
    try {
      const activeNote = {
        id: uuidv4(),
        routeId: short.generate(),
        text: '',
        dateCreated: dateCreated,
        dateEdited: dateCreated,
      };

      const data = await this._getData();
      if (data) {
        data.notesInitialState.activeNote = activeNote;
        data.notesInitialState.notesList.unshift(activeNote);
        return await this._setData(data);
      } else {
        throw new Error("Data not found");
      }
    } catch (error) {
      throw error;
    }
  }

  async setFilterTextEndpoint(filterText: string) {
    try {
      const data = await this._getData();
      if (data) {
        data.notesInitialState.filterText = filterText;
        return await this._setData(data);
      } else {
        throw new Error("Data not found");
      }
    } catch (error) {
      throw error;
    }
  }

  private async _getData(): Promise<InitialStateInterface | null> {
    return await localforage.getItem(this.rootData);
  }

  private async _setData(data: InitialStateInterface): Promise<InitialStateInterface> {
    await localforage.setItem(this.rootData, data);
    return data;
  }
}

export const myDataBase = new DataBase();
