import React, { useState, useEffect }from 'react';
import { connect } from 'react-redux';

import { getCountries, getActivities } from '../../actions/index';

import SearchBar from '../SearchBar/SearchBar';
import Countries from '../Countries/Countries';
// import Filter from '../Filter/Filter';

// import './Home.css';

export function Home(props) {

  useEffect(() => {
      props.getCountries();
      // props.getActivities();
      // return () => {
      //   props.getCountries();
      // }
  },[]);

  return (
    <div>
      <h1>Bienvenido a tu viaje</h1>
      <SearchBar />
      <Countries countries={props.countries} />
    </div>
  )
};

function mapStateToProps(state){
  return {
    countries: state.countriesLoaded
  }
}

function mapDispatchToProps(dispatch){
  return {
    getCountries: () => dispatch(getCountries()),
    getActivities: () => dispatch(getActivities())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
