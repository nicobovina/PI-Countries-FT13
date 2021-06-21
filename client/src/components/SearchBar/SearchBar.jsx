import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getCountriesByName } from '../../actions/index';


export function SearchBar({ getCountriesByName }) {
	const [input, setInput] = useState('');

  function handleChange(e){
    setInput(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if(input){ 
      getCountriesByName(input.toLowerCase());
      setInput('');
    } else {
    	setInput('Debe ingresar un pais');
    }
  }
	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<input
				type="text"
				id="inputCountry"
				autoComplete="off"
				value={input}
				placeholder="Ingresa pais de busqueda"
				onChange={(e) => handleChange(e)}
			/>
			<button type="submit">BUSCAR</button>
		</form>
		);
}

function mapDispatchToProps(dispatch){
  return {
    getCountriesByName: name => dispatch(getCountriesByName(name))
  }
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
