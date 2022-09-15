import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputStep, ErrorMessage, StepButton } from '../../../../components';
import { AppStore, useAppDispatch, saveNumberFloor, savePrice } from '../../../../redux';
import { validateNFloor, validatePrice } from '../../../../utils';
import './styles/SevenStep.css';

export interface SevenStepInterface {}

const SevenStep: React.FC<SevenStepInterface> = () => {
  const { property } = useSelector((state: AppStore) => state);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(0);
  const [error, setError] = useState({
    isError: false,
    message: '',
  });


  const handleClick = () => {

    let valid = validatePrice(value);
    console.log(`🚀 ~ file: FourthStep.tsx ~ line 25 ~ handleClick ~ valid`, valid);

    if (!valid.isValid) {
      setError(
        { isError: !valid.isValid, message: valid.message }
      );
      return;
    }

    setError({ isError: false, message: '' });
    dispatch(savePrice(value));
    navigate('/register/photo');
  };

  const handleChange = (e: any) => {
    let price = e.target.value;
    console.log(`🚀 ~ file: SevenStep.tsx ~ line 41 ~ handleChange ~ price`, price);


    if (Number(price) < 0 || isNaN(Number(price)) || price.includes('-')) {
      setValue(0);
      return;
    }

    if (price.includes('.')) {

      let priceArray = price.split('.')[0];
      setValue(priceArray);
      return;
    }

    console.log(e.target.value);
    setValue(e.target.value);

  };

  useEffect(() => {
    if (property.price) {
      setValue(property.price);
    };
  }, []);

  return (
    <div className='container_step'>
      <div className='form_single_step'>
        <div className='container_price'>
          $
          <InputStep
            // label={ 'Precio*' }
            handleChange={ (e: any) => handleChange(e) }
            value={ value }
            style={ { width: '100%' } }
            type="number"
            name="price"
            id="price"
            placeholder='1000000'
            otherProps={ { min: 1000000, max: 2000000000, step: 1 } }
          />
          COP
        </div>

        {
          error.isError &&
          <ErrorMessage
            message={ error.message }
          />
        }

        <StepButton
          handleClick={ handleClick }
          text={ 'Vamos al octavo paso' } />
      </div>
    </div>

  );
};

export default SevenStep;

