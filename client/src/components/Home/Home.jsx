import React, { useState, useEffect }from 'react';
import { connect } from 'react-redux';

import { getCountries } from '../../actions/index';

import SearchBar from '../SearchBar/SearchBar';
import Display from '../Display/Display';
import Filter from '../Filter/Filter';

// import './Home.css';

export function Home(props) {

  useEffect(() => {
    if (props.countries.length === 0){
      props.getCountries();
    }
  },[]);


  return (
    <div>
      <h1>Bienvenido a tu viaje</h1>
      <SearchBar />
      <button onClick={() => props.getCountries()}>
        Mostrar Paises
      </button>
      <Filter />
      <Display countries={props.countries} />
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
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
