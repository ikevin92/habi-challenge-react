import './styles/ErrorMessage.css';

export interface ErrorMessageInterface {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageInterface> = ({ message }) => {
  return (
    <span className='error_message'>{ message }</span>
  );
};

export default ErrorMessage;

