import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from '../pages/App';
import { NoteItem } from '../pages/NoteItem';

export const AppProvider = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: ':noteId',
          element: <NoteItem />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}