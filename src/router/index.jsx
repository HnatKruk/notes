import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NoteItem } from '../pages/NoteItem';
import { App } from '../pages/App';

export const AppProvider = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      // loader: () => {
      //   console.log('App')
      //   return null
      // },
      children: [
        {
          path: ':noteId',
          element: <NoteItem />,
          // loader: () => {
          //   console.log('NoteItem')
          //   return null
          // }
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}