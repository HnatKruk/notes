import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App, NoteItem } from '../pages';

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
};
