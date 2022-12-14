export interface Property {
  fullName: string; //1
  email: string; //2
  address: Address;  //3
  nFloor: number; //4
  optionsZones?: string[]; //5
  parking: Parking;  //6
  price: number; //7
  photo?: any; //8
  hasAnElevator: boolean; //9
}

// enum OptionsZones { 'Zona BBQ' | 'salón comunal' | 'parque de juegos'}
// export type OptionsZones = 'Zona BBQ' | 'Salón comunal' | 'Parque de juegos';


export interface Address {
  city: string;
  typeStreet: string;
  street: Street;
}

export interface Street {
  street: string;
  number: string;
  complement: string;
}

export interface Parking {
  isCovered: boolean;
  hasParking: boolean;
}