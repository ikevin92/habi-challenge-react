import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, InputStep, StepButton } from '../../../../components';
import { OptionsZones } from '../../../../models';
import { AppStore, useAppDispatch, saveNumberFloor, saveOptionsZones } from '../../../../redux';
import { validateNFloor } from '../../../../utils';
import './styles/FiveStep.css';

export interface FiveStepInterface {}
const options = [
  { value: 'Zona BBQ', label: 'Zona BBQ' },
  { value: 'Salón comunal', label: 'Salón comunal' },
  { value: 'Parque de juegos', label: 'Parque de juegos' },
];

const FiveStep: React.FC<FiveStepInterface> = () => {
  const { property } = useSelector((state: AppStore) => state);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<OptionsZones[]>([]);
  const [error, setError] = useState({
    isError: false,
    message: '',
  });


  const handleClick = () => {

    console.log(value);
    dispatch(saveOptionsZones(value));
    navigate('/register/parking');
  };

  const handleChange = (e: any) => {
    if (e.target.checked) {
      setValue([...value, e.target.value]);
    } else {
      setValue(value.filter((item) => item !== e.target.value));
    }
  };

  useEffect(() => {
    if (property.optionsZones) {
      setValue(property.optionsZones);
    };
  }, []);

  return (
    <div className='container_step'>
      <div className='form_single_step'>

        {
          options.map((option, index) => (
            <div className='container_checkbox'>
              <InputStep key={ index }
                // label={ 'Número de piso*' }
                handleChange={ (e: any) => handleChange(e) }
                value={ option.value }
                style={ { width: '30px', display: 'flex', padding: '5px' } }
                type="checkbox"
                name="number_floor"
                id="numero_piso"
                placeholder='5'
                otherProps={ { checked: value?.includes(option.value as any) } }
              />
              { option.label }
            </div>
          ))
        }


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

export default FiveStep;

