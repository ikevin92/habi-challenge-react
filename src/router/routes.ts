import { IRoutes } from '.';
import { FirstStep, SecondStep, ThirdStep } from '../pages';

export const sellRoutes: IRoutes[] = [
  {
    pathParent: '/register',
    path: '/full-name',
    component: FirstStep,
    step: 1,
    name: 'Datos Cliente'
  },
  {
    pathParent: '/register',
    path: '/email',
    component: SecondStep,
    step: 2,
    name: 'Correo Electrónico'
  },
  {
    pathParent: '/register',
    path: '/address',
    component: ThirdStep,
    step: 3,
    name: 'Dirección'
  },
];