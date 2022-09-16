import { Link, NavLink } from 'react-router-dom';
import { sellRoutes } from '../../../../router';
import './styles/Progress.css';

export interface ProgressInterface {}

const Progress: React.FC<ProgressInterface> = () => {
  return (
    <div className='container_progress'>
      <div className='container_progress__title'>
        <h1 className='progress_title'>Progreso</h1>

      </div>
      <div className='progress_separator'></div>
      <div className='list_proress'>
        {
          sellRoutes.map((route, index) => (
            <NavLink
              className={ 'progress_item' }
              style={ ({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  textDecoration: "none",
                  // color: isActive ? "red" : "",
                  fontWeight: isActive ? "bold" : "",
                };
              } }
              to={ `${ route.pathParent }${ route.path }` }>{ route.step }. { route.name }</NavLink>

          ))
        }
      </div>
    </div>
  );
};

export default Progress;

