import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { Property } from '../models';
import { propertySlice } from './slices/property';


export interface AppStore {
  property: Property;
}

export const store = configureStore<AppStore>({
  reducer: {
    property: propertySlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;