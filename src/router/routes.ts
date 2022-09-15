import { IRoutes } from '.';
import { FirstStep, FiveStep, FourthStep, SecondStep, SixStep, ThirdStep } from '../pages';

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
  {
    pathParent: '/register',
    path: '/number-floor',
    component: FourthStep,
    step: 4,
    name: 'Numero de Piso'
  },
  {
    pathParent: '/register',
    path: '/options-zones',
    component: FiveStep,
    step: 5,
    name: 'Zonas Opcionales'
  },
  {
    pathParent: '/register',
    path: '/parking',
    component: SixStep,
    step: 6,
    name: 'Parqueadero'
  },
  {
    pathParent: '/register',
    path: '/price',
    component: FiveStep,
    step: 7,
    name: 'Precio'
  },
  {
    pathParent: '/register',
    path: '/photo',
    component: SixStep,
    step: 8,
    name: 'Foto'
  },
  {
    pathParent: '/register',
    path: '/has-elevator',
    component: FiveStep,
    step: 9,
    name: 'Ascensor'
  },
  {
    pathParent: '/register',
    path: '/resume',
    component: FiveStep,
    step: 10,
    name: 'Resumen'
  },
];