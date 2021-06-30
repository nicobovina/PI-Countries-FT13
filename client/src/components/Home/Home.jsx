import React, { useEffect }from 'react';
import { connect } from 'react-redux';

import { getCountries, getActivities } from '../../actions/index';

import SearchBar from '../SearchBar/SearchBar';
import Countries from '../Countries/Countries';


import homeStyle from './Home.module.css';



export function Home(props) {

  useEffect(() => {
      props.getCountries();
      props.getActivities();
  },[]);

  console.log(props.countries);

  return (
    <div className={homeStyle.back}>
      <div className={homeStyle.header}>
        <h1 className={homeStyle.title}>Explora el mundo</h1>
        <SearchBar />
      </div>
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
