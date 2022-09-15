
import { Address, LocalStorageTypes } from '../../models';
import { setLocalStorage } from '../../utils';
import { setAddress, setEmail, setFullName, setNFloor, setOptionsZones, setParking, setPrice } from './property';
import { OptionsZones, Parking } from '../../models/property';


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

export const saveNumberFloor = (nFloor: number | string) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setNFloor(nFloor));

    let dataStorage = {
      ...state.property,
      nFloor
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
    // setLocalStorage('property', getState());
  };
};

export const saveOptionsZones = (optionsZones: OptionsZones[]) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setOptionsZones(optionsZones));

    let dataStorage = {
      ...state.property,
      optionsZones
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
    // setLocalStorage('property', getState());
  };
};

export const saveParking = (parking: Parking) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setParking(parking));

    let dataStorage = {
      ...state.property,
      parking
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
    // setLocalStorage('property', getState());
  };
};

export const savePrice = (price: number) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setPrice(price));

    let dataStorage = {
      ...state.property,
      price
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
    // setLocalStorage('property', getState());
  };
};
