import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, InputStep, StepButton } from '../../../../components';
import { AppStore, saveFullName, useAppDispatch } from '../../../../redux';
import './styles/FirstStep.css';

export interface FirstStepInterface {}

const FirstStep: React.FC<FirstStepInterface> = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const [error, setError] = useState({
    isError: false,
    message: '',
  });
  const { property } = useSelector((state: AppStore) => state);


  const handleClick = () => {
    if (value.length === 0) {
      setError(
        { isError: true, message: 'El campo es obligatorio' }
      );
      return;
    }

    if (value.trim().split(' ').length < 2 || !value.trim().includes('')) {
      setError(
        { isError: true, message: 'Por favor ingresar tu nombre completo' }
      );
      return;
    }

    setError({ isError: false, message: '' });
    dispatch(saveFullName(value));
    navigate('/register/email');
  };

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    if (property.fullName) {
      setValue(property.fullName);
    };
  }, []);

  return (
    <div className='container_step'>
      <div className='form_single_step'>
        <InputStep
          label={ 'Nombre completo*' }
          handleChange={ (e: any) => handleChange(e) }
          value={ value }
          type="text"
          name="fullname"
          id="fullname"
          placeholder='Ej: Kevin Echeverri'
        />

        {
          error.isError &&
          <ErrorMessage
            message={ error.message }
          />
        }

        <StepButton
          handleClick={ handleClick }
          text={ 'Vamos al segundo paso' } />
      </div>
    </div>

  );
};

export default FirstStep;

