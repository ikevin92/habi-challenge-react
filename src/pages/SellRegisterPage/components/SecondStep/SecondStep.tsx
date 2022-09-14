import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, InputStep, StepButton } from '../../../../components';
import { AppStore, saveEmail, useAppDispatch } from '../../../../redux';
import { validateEmail } from '../../../../utils';
import './styles/SecondStep.css';

export interface SecondStepInterface {}

const SecondStep: React.FC<SecondStepInterface> = () => {
  const { property } = useSelector((state: AppStore) => state);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const [error, setError] = useState({
    isError: false,
    message: '',
  });


  const handleClick = () => {

    if (!validateEmail(value)) {
      setError(
        { isError: true, message: 'Por favor ingresar un correo valido' }
      );
      return;
    }

    setError({ isError: false, message: '' });
    dispatch(saveEmail(value));
    navigate('/register/address');
  };

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    if (property.email) {
      setValue(property.email);
    };
  }, []);

  return (
    <div className='container_step'>
      <div className='form_single_step'>
        <InputStep
          label={ 'Email*' }
          handleChange={ (e: any) => handleChange(e) }
          value={ value }
          type="email"
          name="email"
          id="email"
          placeholder='Ej: ikevin1992@gmail.com'
        />

        {
          error.isError &&
          <ErrorMessage
            message={ error.message }
          />
        }

        <StepButton
          handleClick={ handleClick }
          text={ 'Vamos al tercer paso' } />
      </div>
    </div>

  );
};

export default SecondStep;

