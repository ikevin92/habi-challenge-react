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
}

const InputStep: React.FC<InputStepInterface> = (props) => {
  const { handleChange, value, type, name, id, label,
    placeholder, style } = props;

  return (

    <label
      style={ style }
      className='label_input' htmlFor={ name }>{ label }
      <input
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

