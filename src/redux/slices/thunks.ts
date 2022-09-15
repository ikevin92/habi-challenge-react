
import { Address, LocalStorageTypes } from '../../models';
import { setLocalStorage } from '../../utils';
import { setAddress, setEmail, setFullName, setHasAnElevator, setNFloor, setOptionsZones, setParking, setPhoto, setPrice } from './property';
import { OptionsZones, Parking, Property } from '../../models/property';


export const saveFullName = (fullname: string) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setFullName(fullname));

    let dataStorage: Property = {
      ...state.property,
      fullName: fullname
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
  };
};


export const saveEmail = (email: string) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setEmail(email));

    let dataStorage: Property = {
      ...state.property,
      email
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
  };
};

export const saveAddres = (address: Address) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setAddress(address));

    let dataStorage: Property = {
      ...state.property,
      address
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
  };
};

export const saveNumberFloor = (nFloor: number | string) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setNFloor(nFloor));

    let dataStorage: Property = {
      ...state.property,
      nFloor
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
  };
};

export const saveOptionsZones = (optionsZones: OptionsZones[]) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setOptionsZones(optionsZones));

    let dataStorage: Property = {
      ...state.property,
      optionsZones
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
  };
};

export const saveParking = (parking: Parking) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setParking(parking));

    let dataStorage: Property = {
      ...state.property,
      parking
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
  };
};

export const savePrice = (price: number) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setPrice(price));

    let dataStorage: Property = {
      ...state.property,
      price
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
  };
};

export const savePhoto = (photo: any) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    console.log(photo);

    // let img = new Image();
    dispatch(setPhoto(photo));

    let dataStorage: Property = {
      ...state.property,
      photo
    };
    console.log(`🚀 ~ file: thunks.ts ~ line 124 ~ return ~ dataStorage`, dataStorage);

    // setLocalStorage('Imagen', photo);
    sessionStorage.setItem('Imagen', photo);
  };
};


export const saveElevator = (elevator: boolean) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    dispatch(setHasAnElevator(elevator));

    let dataStorage: Property = {
      ...state.property,
      hasAnElevator: elevator
    };

    setLocalStorage(LocalStorageTypes.PROPERTY, dataStorage);
  };
};