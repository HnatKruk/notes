export interface viewReducerInterface {
  appLoader: boolean,
  noteItemLoader: boolean,
  resizeBorderWidth: number,
  isSearchFocus: boolean,
}

export interface NoteInterface {
  id: string,
  routeId: string,
  text: string,
  dateCreated: string,
  dateEdited: string,
}

export interface NotesReducerInterface {
  isNotesLoaded: boolean,
  activeNote: NoteInterface | null,
  notesList: NoteInterface[],
  filterText: string,
}

export interface RootStateInterface {
  viewReducer: viewReducerInterface,
  notesReducer: NotesReducerInterface,
}
