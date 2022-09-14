import { Route, Routes } from 'react-router-dom';
import { HomeRoutes, SellRegisterRoutes, } from './';

export const AppRouter = () => {
  return (

    <Routes>
      <Route path="/register/*" element={ <SellRegisterRoutes /> } />
      <Route path="/*" element={ <HomeRoutes /> } />
    </Routes>

  );
};