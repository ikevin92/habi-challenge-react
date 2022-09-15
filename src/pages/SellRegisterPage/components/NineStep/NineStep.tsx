import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, InputStep, StepButton } from '../../../../components';
import { AppStore, saveElevator, useAppDispatch } from '../../../../redux';
import './styles/NineStep.css';

export interface NineStepInterface {}

const NineStep: React.FC<NineStepInterface> = () => {
  const { property } = useSelector((state: AppStore) => state);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<boolean>(false);
  const [error, setError] = useState({
    isError: false,
    message: '',
  });


  const handleClick = () => {

    console.log(value);
    dispatch(saveElevator(value));
    // navigate('/register/resume');
  };

  const handleChange = (e: any) => {
    console.log(e.target.checked, e.target.name);
    setValue(e.target.checked);
  };

  useEffect(() => {
    if (property.hasAnElevator) {
      setValue(property.hasAnElevator);
    };
  }, []);



  return (
    <div className='container_step'>
      <div className='form_single_step'>


        <div className='container_checkbox'>
          <InputStep
            handleChange={ (e: any) => handleChange(e) }
            value={ !value }
            style={ { width: '30px', display: 'flex', padding: '5px' } }
            type="checkbox"
            name="hasElevator"
            id="has_elevator"
            otherProps={ { checked: value } }
          // otherProps={ { checked: value?.includes(option.value as any) } }
          />
          Tiene Ascensor?
        </div>


        {
          error.isError &&
          <ErrorMessage
            message={ error.message }
          />
        }

        <StepButton
          handleClick={ handleClick }
          text={ 'Vamos al noveno paso' } />
      </div>
    </div>
  );
};

export default NineStep;

