import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputStep, ErrorMessage, StepButton } from '../../../../components';
import { useAppDispatch, AppStore, saveFullName } from '../../../../redux';
import { validateEmail } from '../../../../utils';
import Select from 'react-select';
import './styles/ThirdStep.css';
import { cities, typeStreetData } from '../../../../data';
import { set } from 'immer/dist/internal';

export interface ThirdStepInterface {}


const ThirdStep: React.FC<ThirdStepInterface> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  const [isEnabledButton, setIsEnabledButton] = useState(true);
  const [citiesOptions, setCitiesOptions] = useState([]);
  const [citySelected, setCitySelected] = useState({
    value: '',
    label: 'Ciudad'
  });
  const [typeStreetSelected, setTypeStreetSelected] = useState({
    value: '',
    label: 'Tipo de Via'
  });
  const [typeStreetOptions, setTypeStreetOptions] = useState([]);
  const [error, setError] = useState([{
    isError: false,
    message: '',
    name: ''
  }]);

  const [street, setStreet] = useState({
    street: '',
    number: '',
    complement: '',
  });

  const { property } = useSelector((state: AppStore) => state);

  const handleClick = () => {

    // dispatch(saveFullName(data.value));
    navigate('/register/address');
  };

  const handleChangeCity = (e: any) => {
    console.log(e);
    // console.log(e.target.value);
    setCitySelected(e);
  };

  const handleChangeTypeStreet = (e: any) => {
    console.log(e);
    setTypeStreetSelected(e);
  };

  const readData = () => {
    const data = cities.map((city: any) => {
      const { label } = city;
      return {
        value: label,
        label
      };
    });
    setCitiesOptions(data);
    setTypeStreetOptions(typeStreetData);
  };

  const handleChange = (e: any) => {
    console.log(`🚀 ~ file: ThirdStep.tsx ~ line 70 ~ handleChange ~ e`, e.target.value);
    setStreet((street) => {
      return {
        ...street,
        [e.target.name]: e.target.value,
      };
    });

    if (e.target.name === 'complement' && e.target.value.length > 0 && isNaN(e.target.value)) {
      setError((error) => {
        if (error.find((err) => err.name === e.target.name)) {
          return error.map((err) => err.name === e.target.name ? { ...err, isError: true, message: `El campo ${ e.target.id } debe tener solo numeros` } : err);
        } else {
          return [...error, { isError: true, message: `El campo ${ e.target.id } debe tener solo numeros`, name: e.target.name }];
        }
      });
    }
    else {
      setError((error) => {
        return error.filter((err) => err.name !== e.target.name);
      });
    }



    if (e.target.name === 'street' || e.target.name === 'number') {
      if (e.target.value.length > 0 && isNaN(e.target.value[0])) {
        console.log('entro');
        setError((error) => {
          if (error.find((err) => err.name === e.target.name)) {
            return error.map((err) => err.name === e.target.name ? { ...err, isError: true, message: `El campo ${ e.target.id } debe iniciar con un numero` } : err);
          } else {
            return [...error, { isError: true, message: `El campo ${ e.target.id } debe iniciar con un numero`, name: e.target.name }];
          }
        });
        return;
      }
      else {
        setError((error) => {
          return error.filter((err) => err.name !== e.target.name);
        });
      }
    }
  };

  useEffect(() => {
    readData();
    // if (property.email) {
    //   setData(property.email);
    // };
  }, []);

  useEffect(() => {
    if (citySelected.value !== '' && typeStreetSelected.value !== '' && street.street !== '' && street.number !== '' && street.complement !== '' && error.length === 0) {
      setIsEnabledButton(false);
    }
  }, [citySelected, typeStreetSelected, street]);


  return (
    <div className='container_step'>
      <div className='form_single_step'>
        <div className='container_thirdstep'>
          <Select
            options={ citiesOptions }
            onChange={ handleChangeCity }
            value={ citySelected }
            styles={ {
              control: (provided: any) => ({
                ...provided,
                borderRadius: '8px',
                height: '51px',
                width: '250px',
                fontSize: '16px',
                color: '#000',
                padding: '0px',
                border: '1px solid rgb(120, 116, 123)'
              }),
            } }
          />

          <Select
            id='typeStreet'
            options={ typeStreetOptions }
            onChange={ handleChangeTypeStreet }
            value={ typeStreetSelected }
            styles={ {
              control: (provided: any) => ({
                ...provided,
                borderRadius: '8px',
                height: '51px',
                width: '150px',
                fontSize: '16px',
                color: '#000',
                padding: '0px',
                border: '1px solid rgb(120, 116, 123)'
                // marginBottom: '20px'
              }),
            } }
          />
        </div>

        <div className='container_thirdstep__street'>

          <InputStep
            // label={ 'Nombre completo*' }
            handleChange={ (e: any) => handleChange(e) }
            value={ street.street }
            style={ { width: '70px' } }
            type="text"
            name="street"
            id="Calle"
            placeholder='129b'
          />
          #
          <InputStep
            handleChange={ (e: any) => handleChange(e) }
            value={ street.number }
            style={ { width: '50px' } }
            type="text"
            name="number"
            id="Número"
            placeholder='8a'
          />
          -
          <InputStep
            handleChange={ (e: any) => handleChange(e) }
            value={ street.complement }
            style={ { width: '50px' } }
            type="text"
            name="complement"
            id="Complemento"
            placeholder='23'
          />
        </div>

        {
          error.length > 0 && error.map((error: any) =>
            (<ErrorMessage message={ error.message } />))
        }
        <StepButton
          disabled={ isEnabledButton }
          handleClick={ handleClick }
          text={ 'Vamos al cuarto paso' } />
      </div>
    </div>

  );
};

export default ThirdStep;

