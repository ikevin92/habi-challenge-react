
import { Address, LocalStorageTypes } from '../../models';
import { setLocalStorage } from '../../utils';
import { setAddress, setEmail, setFullName } from './property';


export const saveFullName = (fullname: string) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setFullName(fullname));

    let dataStorage = {
      ...state.property,
      fullName: fullname
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
    // setLocalStorage('property', getState());
  };
};


export const saveEmail = (email: string) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setEmail(email));

    let dataStorage = {
      ...state.property,
      email
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
    // setLocalStorage('property', getState());
  };
};

export const saveAddres = (address: Address) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setAddress(address));

    let dataStorage = {
      ...state.property,
      address
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
    // setLocalStorage('property', getState());
  };
};