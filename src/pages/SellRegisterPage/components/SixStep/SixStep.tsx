import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, InputStep, StepButton } from '../../../../components';
import { AppStore, saveParking, useAppDispatch } from '../../../../redux';
import './styles/SixStep.css';
import { Parking } from '../../../../models/property';

export interface SixStepInterface {}

const SixStep: React.FC<SixStepInterface> = () => {
  const { property } = useSelector((state: AppStore) => state);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<Parking>(
    {
      isCovered: false,
      hasParking: false
    }
  );
  const [error, setError] = useState({
    isError: false,
    message: '',
  });


  const handleClick = () => {

    console.log(value);
    dispatch(saveParking(value));
    navigate('/register/price');
  };

  const handleChange = (e: any) => {
    console.log(e.target.checked, e.target.name);
    setValue((prevState) => {
      if (e.target.name === 'hasParking' && !e.target.checked) {
        return {
          ...prevState,
          hasParking: false,
          isCovered: false
        };
      }
      return {
        ...prevState,
        [e.target.name]: e.target.checked
      };
    });
  };

  useEffect(() => {
    if (property.parking) {
      setValue(property.parking);
    };
  }, []);



  return (
    <div className='container_step'>
      <div className='form_single_step'>


        <div className='container_checkbox'>
          <InputStep
            handleChange={ (e: any) => handleChange(e) }
            value={ !value.hasParking }
            style={ { width: '30px', display: 'flex', padding: '5px' } }
            type="checkbox"
            name="hasParking"
            id="has_parking"
            otherProps={ { checked: value.hasParking } }
          // otherProps={ { checked: value?.includes(option.value as any) } }
          />
          Tiene Parqueadero?
        </div>

        <div className='container_checkbox' style={ { fontSize: '15px' } }>
          <InputStep
            handleChange={ (e: any) => handleChange(e) }
            value={ !value.isCovered }
            style={ { width: '30px', display: 'flex', padding: '5px' } }
            type="checkbox"
            name="isCovered"
            id="is_covered"

            otherProps={ { checked: value.isCovered, disabled: !value.hasParking } }
          />
          Es Cubierto?
        </div>

        {
          error.isError &&
          <ErrorMessage
            message={ error.message }
          />
        }

        <StepButton
          handleClick={ handleClick }
          text={ 'Vamos al septimo paso' } />
      </div>
    </div>
  );
};

export default SixStep;

