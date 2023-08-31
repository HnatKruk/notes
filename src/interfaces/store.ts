export interface InterfaceReducer {
  appLoader: boolean,
  noteItemLoader: boolean,
  resizeBorderWidth: number,
};

export interface Note {
  id: string,
  routeId: string,
  text: string,
  dateCreated: string,
  dateEdited: string,
};

export interface NotesReducer {
  isNotesLoaded: boolean,
  activeNote: Note | null,
  notesList: Note[],
};

export interface Store {
  interfaceReducer: InterfaceReducer,
  notesReducer: NotesReducer,
}
