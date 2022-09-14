import { useNavigate } from 'react-router-dom';
import './styles/StepButton.css';

export interface StepButtonInterface {
  text: string;
  handleClick: () => void;
  disabled?: boolean;
}

const StepButton: React.FC<StepButtonInterface> = ({ text, handleClick, disabled = false }) => {


  return (
    <button
      disabled={ disabled }
      onClick={ () => handleClick() }
      className={ `button_step ${ disabled ? 'disable' : '' }` }>{ text }
    </button>
  );
};

export default StepButton;

