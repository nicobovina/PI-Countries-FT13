import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCountryDetail } from '../../actions/index';
import ActivityDetail from '../ActivityDetail/ActivityDetail';

import cDetailStyle from './CountryDetail.module.css';

export function CountryDetail({countryDetail: {name, id, capital, continent, flag, subregion, area, population, activities=[] }, getCountryDetail}) {
  const { idCountry } = useParams();
  useEffect(() => {
    getCountryDetail(idCountry);
  },[]);

  return (
    <div>
      <div id='primaryInfo' className={cDetailStyle.infoSection}>
        <img className={cDetailStyle.flag}src={flag} alt={id}/>
        <div className={cDetailStyle.infoSection_A}>
          <div className={cDetailStyle.detail}>
            <label htmlFor="">Nombre</label>
            <p>{name}</p>
          </div>
          <div className={cDetailStyle.detail}>
            <label htmlFor="">Codigo de pais</label>
            <p>{id}</p>
          </div>
          <div className={cDetailStyle.detail}>
            <label htmlFor="">Capital</label>
            <p>{capital}</p>
          </div>
          <div className={cDetailStyle.detail}>
            <label htmlFor="">Continente</label>
            <p>{continent}</p>
          </div>
          <div className={cDetailStyle.detail}>
            <label htmlFor="">Subregion</label>
            <p>{subregion}</p>  
          </div>
          <div className={cDetailStyle.detail}>
            <label htmlFor="">Superficie</label>
            <p>{area}</p>  
          </div>
          <div className={cDetailStyle.detail}>
            <label htmlFor="">Poblacion</label>
            <p>{population}</p>  
          </div>
        </div>
        <div>
          <label className={cDetailStyle.activitiesTitle}>Actividades</label>
          <div className={cDetailStyle.activities}>
            { !activities.length ?
              <h6>No hay actividades cargadas</h6>
              :
              activities.map( a => <ActivityDetail activity={a}/>)
            }
          </div>
        </div>
      </div>
    </div>
  )
};


function mapStateToProps(state){
  return {
    countryDetail: state.countryDetail
  }
}


function mapDispatchToProps(dispatch){
  return {
    getCountryDetail: id => dispatch(getCountryDetail(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryDetail);
