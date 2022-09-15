import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, InputStep, StepButton } from '../../../../components';
import { AppStore, useAppDispatch, saveEmail, saveNumberFloor } from '../../../../redux';
import { validateEmail, validateNFloor } from '../../../../utils';
import './styles/FourthStep.css';

export interface FourthStepInterface {}

const FourthStep: React.FC<FourthStepInterface> = () => {
  const { property } = useSelector((state: AppStore) => state);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const [error, setError] = useState({
    isError: false,
    message: '',
  });


  const handleClick = () => {

    let valid = validateNFloor(value);
    console.log(`🚀 ~ file: FourthStep.tsx ~ line 25 ~ handleClick ~ valid`, valid);

    if (!valid.isValid) {
      setError(
        { isError: !valid.isValid, message: valid.message }
      );
      return;
    }

    setError({ isError: false, message: '' });
    dispatch(saveNumberFloor(value));
    navigate('/register/options-zones');
  };

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    if (property.nFloor) {
      setValue(property.nFloor.toString());
    };
  }, []);

  return (
    <div className='container_step'>
      <div className='form_single_step'>
        <InputStep
          label={ 'Número de piso*' }
          handleChange={ (e: any) => handleChange(e) }
          value={ value }
          style={ { width: '40%' } }
          type="number"
          name="number_floor"
          id="numero_piso"
          placeholder='5'
          otherProps={ { min: 1, max: 50 } }
        />

        {
          error.isError &&
          <ErrorMessage
            message={ error.message }
          />
        }

        <StepButton
          handleClick={ handleClick }
          text={ 'Vamos al quinto paso' } />
      </div>
    </div>

  );
};

export default FourthStep;

