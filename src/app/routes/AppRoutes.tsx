import { createBrowserRouter } from 'react-router';
import PortFolio from '../portFolio/pages/PortFolio';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <PortFolio />
    }
  ],
  {
    basename: '/portfolio/'
  }
);
