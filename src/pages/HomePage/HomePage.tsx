import { useNavigate } from 'react-router-dom';
import './styles/HomePage.css';

export interface HomePageInterface {}

const HomePage: React.FC<HomePageInterface> = () => {
  const navigate = useNavigate();

  const handleClikc = () => {
    navigate('/register/full-name');
  };


  return (
    <div className='container_homepage'>
      <button
        onClick={ handleClikc }
        className='button_sell'>Vender</button>
    </div>
  );
};

export default HomePage;

