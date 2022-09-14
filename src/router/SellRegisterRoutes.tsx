
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
        {/* <Route path="/full-name" element={ <FirstStep /> } />
        <Route path="/email" element={ <h1>email</h1> } /> */}
        {/* <Route path="/address" element={ <h1>segundo paso</h1> } />
        <Route path="/number-floor" element={ <h1>segundo paso</h1> } />
        <Route path="/has-elevator" element={ <h1>segundo paso</h1> } />
        <Route path="/photo" element={ <h1>segundo paso</h1> } />
        <Route path="/optionsZones" element={ <h1>segundo paso</h1> } />
        <Route path="/parking" element={ <h1>segundo paso</h1> } />
        <Route path="/price" element={ <h1>segundo paso</h1> } />
        <Route path="/resume" element={ <h1>segundo paso</h1> } /> */}
        <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
    </SellRegisterPage>

  );
};