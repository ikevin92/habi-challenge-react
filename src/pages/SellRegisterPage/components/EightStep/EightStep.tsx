import compress from 'compress-base64';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ErrorMessage, StepButton } from '../../../../components';
import { AppStore, savePhoto, useAppDispatch } from '../../../../redux';
import './styles/EightStep.css';


export interface EightStepInterface {}

const EightStep: React.FC<EightStepInterface> = () => {
  let location = useLocation();
  const { property } = useSelector((state: AppStore) => state);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState();
  const [error, setError] = useState({
    isError: false,
    message: '',
  });


  const [image, setImage] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>();
  const fileInputRef = useRef();


  const handleClick = async () => {
    console.log({ location }, window.location.origin);
    console.log({
      image
    });

    dispatch(savePhoto(preview));
    navigate('/register/has-elevator');

  };

  const handleChange = (event: any) => {

    console.log(event.target.value);
    console.log(event.target.result);
    setValue(event.target.value);


    const file = event.target.files && event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  useEffect(() => {
    if (property.photo) {
      setPreview(property.photo);
    };
  }, []);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <div className='container_step'>
      <div className='form_single_step'>
        <div className='container'>
          <form>
            { preview || property.photo ? (
              <img
                className='img'
                src={ preview || property.photo }
                style={ { objectFit: "cover" } }
                onClick={ () => {
                  setImage(null);
                } }
              />
            ) : (
              <button
                className='btn'
                onClick={ (event) => {
                  event.preventDefault();
                  fileInputRef?.current?.click();
                } }
              >
                Añadir foto
              </button>
            ) }
            <input
              type="file"
              style={ { display: "none" } }
              // ref={ fileInputRef }
              ref={ fileInputRef }
              accept="image/*"
              onChange={ handleChange }
            />
          </form>
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

export default EightStep;

