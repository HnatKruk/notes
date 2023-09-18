import { RootStateInterface } from '@/interfaces';

export const storeMocks: RootStateInterface = {
  viewReducer: {
    appLoader: false,
    noteItemLoader: false,
    resizeBorderWidth: 300,
  },
  notesReducer: {
    isNotesLoaded: false,
    filterText: '',
    activeNote: {
      id: '445ce4ee-5f15-44ce-9efd-f373c32f1439',
      routeId: 'oawuYBDsqBV1u9RJnjaJui',
      text: 'Text 1',
      dateCreated: '2023-08-10T05:58:22.613Z',
      dateEdited: '2023-08-10T05:58:22.613Z',
    },
    notesList: [
      {
        id: '445ce4ee-5f15-44ce-9efd-f373c32f1439',
        routeId: 'oawuYBDsqBV1u9RJnjaJui',
        text: 'Text 1',
        dateCreated: '2023-08-10T05:58:22.613Z',
        dateEdited: '2023-08-10T05:58:22.613Z',
      },
      {
        id: 'ec260ec3-62fd-49a5-b701-c379a146c3ab',
        routeId: 'kcXXStaNsmEHuf32JwWqi2',
        text: 'Text 2',
        dateCreated: '2023-08-10T05:59:39.227Z',
        dateEdited: '2023-08-10T05:59:39.227Z',
      },
      {
        id: 'cc93fa8c-6804-41db-8396-bfca2f3f4e09',
        routeId: '27uD21auPSVgKwwph4hAhm',
        text: 'Text 3',
        dateCreated: '2023-08-10T05:59:38.944Z',
        dateEdited: '2023-08-10T05:59:38.944Z',
      },
      {
        id: '52e1048c-6760-4b28-af98-d41012f68286',
        routeId: 'cgGhT239sYpWWPZNwGQUpW',
        text: 'Text 4',
        dateCreated: '2023-08-10T05:59:38.628Z',
        dateEdited: '2023-08-10T05:59:38.628Z',
      }
    ],
  },
};
