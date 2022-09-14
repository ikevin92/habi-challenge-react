import { useLocation } from 'react-router-dom';
import { SellRegisterRoutes, sellRoutes } from '../../router';
import { Progress } from './components';
import './styles/SellRegisterPage.css';
import { useEffect, useState } from 'react';

export interface SellRegisterPageInterface {
  children: React.ReactNode;
}

const SellRegisterPage: React.FC<SellRegisterPageInterface> = ({ children }) => {

  const [numberStep, setNumberStep] = useState(1);
  let location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[2];
    const number = sellRoutes.find(route => route.path.includes(path));
    number && setNumberStep(number.step);
  }, [location]);

  return (
    <div className='sellregister_container'>
      <div className='sellregister_form' >
        <div className='progress_info'>
          Paso { numberStep } de 10: Datos Cliente
        </div>

        { children }

      </div>

      <Progress />

    </div>
  );
};

export default SellRegisterPage;

