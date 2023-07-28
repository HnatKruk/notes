import { v4 as uuidv4 } from 'uuid';
import short from 'short-uuid';

export const rootInitialState = {
  notesInitialState: {
    activeNote: null,
    notesList: [
      {
        id: uuidv4(),
        routeId: short.generate(),
        text: 'What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry.',
        dateCreated: new Date(2023, 6, 7).toISOString(),
        dateEdited: new Date(2023, 6, 10).toISOString(),
      },
      {
        id: uuidv4(),
        routeId: short.generate(),
        text: 'What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry.',
        dateCreated: new Date(2023, 6, 6).toISOString(),
        dateEdited: new Date(2023, 6, 10).toISOString(),
      },
      {
        id: uuidv4(),
        routeId: short.generate(),
        text: 'What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry.',
        dateCreated: new Date(2023, 6, 5).toISOString(),
        dateEdited: new Date(2023, 6, 10).toISOString(),
      },
      {
        id: uuidv4(),
        routeId: short.generate(),
        text: 'What is Lorem Ipsum? What is Lorem Ipsum?',
        dateCreated: new Date(2023, 5, 29).toISOString(),
        dateEdited: new Date(2023, 6, 10).toISOString(),
      },
      {
        id: uuidv4(),
        routeId: short.generate(),
        text: '\nLorem Ipsum is simply dummy text of the printing and typesetting industry.',
        dateCreated: new Date(2023, 5, 28).toISOString(),
        dateEdited: new Date(2023, 6, 10).toISOString(),
      },
    ],
  },
};
