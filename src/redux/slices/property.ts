import { createSlice } from '@reduxjs/toolkit';
import { LocalStorageTypes, Property } from '../../models';
import { getLocalStorage } from '../../utils';

const initialState: Property = {
  fullName: '',
  email: '',
  address: {
    city: '',
    typeStreet: '',
    street: {
      street: '',
      number: '',
      complement: '',
    },
  },
  nFloor: 0,
  parking: {
    isCovered: false,
    hasPaking: false,
  },
  optionsZones: [],
  price: 0,
  photo: '',
  hasAnElevator: false
};


export const propertySlice = createSlice({
  name: 'property',
  initialState: getLocalStorage(LocalStorageTypes.PROPERTY) ? JSON.parse(getLocalStorage(LocalStorageTypes.PROPERTY) as string) : initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setNFloor: (state, action) => {
      state.nFloor = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setPhoto: (state, action) => {
      state.photo = action.payload;
    },
    setHasAnElevator: (state, action) => {
      state.hasAnElevator = action.payload;
    },
    setParking: (state, action) => {
      state.parking = action.payload;
    },
    setOptionsZones: (state, action) => {
      state.optionsZones = action.payload;
    }
  },
});

export const { setFullName, setEmail, setAddress, setNFloor, setPrice, setPhoto, setHasAnElevator } = propertySlice.actions;

export default propertySlice.reducer;