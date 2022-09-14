export interface Property {
  fullName: string; //1
  email: string; //2
  address: { //3
    city: string;
    typeStreet: string;
    street: {
      street: string;
      number: string;
      complement: string;
    };
  };
  nFloor: number; //4
  optionsZones?: OptionsZones[]; //5
  parking: { //6
    isCovered: boolean;
    hasPaking: boolean;
  };
  price: number; //7
  photo?: string; //8
  hasAnElevator: boolean; //9
}

// enum OptionsZones { 'Zona BBQ' | 'salón comunal' | 'parque de juegos'}
type OptionsZones = 'Zona BBQ' | 'salón comunal' | 'Parque de juegos';
