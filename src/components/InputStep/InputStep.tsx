import { StyleHTMLAttributes } from 'react';
import './styles/InputStep.css';
import { TInputStepType } from './types';

export interface InputStepInterface {
  handleChange: (e: any) => void;
  value: any;
  type: TInputStepType;
  name: string;
  id: string;
  placeholder: string;
  label?: string;
  style?: React.CSSProperties | undefined;
  otherProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputStep: React.FC<InputStepInterface> = (props) => {
  const { handleChange, value, type, name, id, label,
    placeholder, style, otherProps } = props;


  return (

    <label
      style={ style }
      className='label_input' htmlFor={ name }>{ label }
      <input
        { ...otherProps }
        onChange={ handleChange }
        value={ value }
        type={ type }
        name={ name }
        id={ id }
        placeholder={ placeholder }
        className='input_single' />
    </label>
  );
};

export default InputStep;

