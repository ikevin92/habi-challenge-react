import './styles/Progress.css';

export interface ProgressInterface {}

const Progress: React.FC<ProgressInterface> = () => {
  return (
    <div className='container_progress'>
      <div className='container_progress__title'>
        <h1 className='progress_title'>Progreso</h1>
      </div>
      <div className='progress_separator'></div>
    </div>
  );
};

export default Progress;

