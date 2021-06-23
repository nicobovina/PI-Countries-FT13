import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCountryDetail } from '../../actions/index';


// import './CountryDetail.css';

export function CountryDetail({countryDetail: {name, id, capital, continent, flag, subregion, area, population, activities }, getCountryDetail}) {
  const { idCountry } = useParams();

  useEffect(() => {
    getCountryDetail(idCountry);
  },[]);

  return (
    <div>
      <section id='primaryInfo'>
        <h1>{name}</h1>
        <h2>{id}</h2>
        <h3>{capital}</h3>
        <h4>{continent}</h4>
        <img src={flag} alt={id}/>
      </section>
      <section id='secondariInfo'>
        <p>{subregion}</p>
        <p>{area}</p>
        <p>{population}</p>
      </section>
{/*      <ul id='activities'>
        { countryDetail.activities.map(a => <li>{a}</li>) }
      </ul>*/}
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
