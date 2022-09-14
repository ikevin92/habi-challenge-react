
import { Navigate, Route, Routes } from 'react-router-dom';
import { SellRegisterPage } from '../pages';
import { sellRoutes } from './routes';

export const SellRegisterRoutes = () => {
  return (
    <SellRegisterPage>
      <Routes>
        {
          sellRoutes.map((route) => (
            <Route key={ route.path } path={ route.path } element={ <route.component /> } />
          ))
        }
        <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
    </SellRegisterPage>

  );
};