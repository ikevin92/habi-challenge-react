
export const validateEmail = (email: string) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    return true;
  }
  return false;
};


export const validateNFloor = (nFloor: number | string) => {

  if (nFloor.toString() === '' || nFloor.toString().length === 0) {
    console.log('entro');
    return {
      isValid: false,
      message: 'El campo es requerido'
    };
  }

  if (isNaN(Number(nFloor))) {
    return {
      isValid: false,
      message: 'El número de pisos debe ser un número'
    };
  }

  if (nFloor < 1 || nFloor > 50) {
    return {
      isValid: false,
      message: 'El número de pisos debe ser mayor a 1 y menor a 50'
    };
  }

  return {
    isValid: true,
    message: ''
  };

};
