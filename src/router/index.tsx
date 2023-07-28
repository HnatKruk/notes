import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from '../pages/App';

export const AppProvider = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
  ]);

  return <RouterProvider router={router} />;
}