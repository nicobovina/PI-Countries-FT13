import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getCountries } from '../../actions/index';


export function SearchBar(props) {
	const [inputName, setInputName] = useState('');
	const [inputContinent, setInputContinent] = useState('');

  function handleChange(e){
  	if (e.target.name === 'name')	setInputName(e.target.value);
  	if (e.target.name === 'continent') setInputContinent(e.target.value)
  }
	
	useEffect(() => {
		props.getCountries(inputName,inputContinent);
	},[inputName, inputContinent])


  function handleSubmit(e){
    e.preventDefault();
    setInputName('');
    setInputContinent('');
  }

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<input
				type="text"
				name="name"
				id="inputCountry"
				autoComplete="off"
				value={inputName}
				placeholder="Ingresa pais de busqueda"
				onChange={(e) => handleChange(e)}
			/>
			<select name="continent" id="continent" value={inputContinent} onChange={(e) => handleChange(e)}>
				<option value=''>Elegir continente</option>
				<option value='africa'>Africa</option>
				<option value='americas'>America</option>
				<option value='asia'>Asia</option>
				<option value='europe'>Europa</option>
				<option value='oceania'>Oceania</option>
				<option value='polar'>Polo</option>
			</select>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Mostrar todos los paises
      </button>
		</form>
		);
}

function mapDispatchToProps(dispatch){
  return {
    getCountries: (name, continent, activity) => dispatch(getCountries(name, continent, activity))
  }
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
