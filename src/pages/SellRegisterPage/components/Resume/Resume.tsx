import './styles/Resume.css';
import { useAppSelector } from '../../../../redux/hooks/hooks';

export interface ResumeInterface {}

const Resume: React.FC<ResumeInterface> = () => {

  const { property } = useAppSelector((state) => state);
  console.log({ property });

  const { address } = property;
  const { city, street, typeStreet } = address;



  const addressComplete = `${ typeStreet } ${ street.street } #${ street.number }-${ street.complement }, ${ city }`;

  return (
    <div className='container_step'>
      <div className='form_single_step'>

        <div className='info_container'>
          <p className='title_info'>Nombre Completo</p>
          <p className='text_info'>{ property.fullName }</p>
        </div>
        <div className='info_container'>
          <p className='title_info'>Correo Electronico</p>
          <p className='text_info'>{ property.email }</p>
        </div>
        <div className='info_container'>
          <p className='title_info'>Dirección</p>
          <p className='text_info'>{ addressComplete }</p>
        </div>
        <div className='info_container'>
          <p className='title_info'>Número de Piso</p>
          <p className='text_info'>{ property.nFloor }</p>
        </div>
        <div className='info_container'>
          <p className='title_info'>Zonas Opcionales</p>
          {
            property.optionsZones ?
              property.optionsZones.map((zone) => (
                <li key={ zone } className='text_info'>{ zone }</li>
              )) :
              <p className='text_info'>No hay zonas opcionales</p>
          }
        </div>
        <div className='info_container'>
          <p className='title_info'>Parqueadero</p>
          {
            property.parking.hasParking ?
              <p className='text_info'>Si
                { property.parking.isCovered && <span className='cover'> - Cubierto</span> } </p> : <>
                <p className='text_info'>No</p>
              </>
          }
        </div>

        <div className='info_container'>
          <p className='title_info'>Precio</p>
          <p className='text_info'>$ { Number(property.price).toLocaleString('es') } COP</p>
        </div>


        <div className='info_container'>
          <p className='title_info'>Tiene Ascensor?</p>
          {
            property.hasAnElevator ?
              <p className='text_info'>Si</p> :
              <p className='text_info'>No</p>

          }
        </div>

        <div className='info_container'>
          {
            property.photo &&
            <img className='image' src={ property.photo } alt="imagen" />
          }
        </div>


      </div>
    </div>

  );
};

export default Resume;

