import { NoteInterface } from "@interfaces";

export interface InitialStateInterface {
  notesInitialState: {
    activeNote: NoteInterface | null,
    notesList: NoteInterface[],
    filterText: string,
  };
};
