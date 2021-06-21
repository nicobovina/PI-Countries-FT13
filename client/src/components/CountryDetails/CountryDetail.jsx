import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCountryDetail } from '../../actions/index';


// import './CountryDetail.css';

export function CountryDetail(props) {
  const { id } = useParams();

  useEffect(() => {
    props.getCountryDetail(id);
  },[]);


  return (
    <div>
      <h1>{props.countryDetail.name}</h1>
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
