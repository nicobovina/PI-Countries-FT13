import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getCountries, getActivities } from '../../actions/index';
import searchBarStyle from './SearchBar.module.css';


export function SearchBar(props) {
	const [inputName, setInputName] = useState('');
	const [inputContinent, setInputContinent] = useState('');
	const [inputActivity, setInputActivity] = useState('');
	const [inputOrder, setInputOrder] = useState('');

  function handleChange(e){
  	if (e.target.name === 'name')	setInputName(e.target.value);
  	if (e.target.name === 'continent') setInputContinent(e.target.value);
  	if (e.target.name === 'activity')	setInputActivity(e.target.value);
  	if (e.target.name === 'order')	setInputOrder(e.target.value);
  }

	useEffect(() => {
		props.getCountries(inputName,inputContinent, inputActivity, inputOrder);
	},[inputName, inputContinent, inputActivity, inputOrder])


  function handleSubmit(e){
    e.preventDefault();
    setInputName('');
    setInputContinent('');
    setInputActivity('');
    setInputOrder('');
  }

	return (
		<form className={searchBarStyle.form} onSubmit={(e) => handleSubmit(e)}>
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
			<select name="activity" value={inputActivity} onChange={(e) => handleChange(e)}>
				<option value="">Elegir actividad</option>
				{ props.activities.length &&
					props.activities.map( a => <option value={a.name}>{a.name}</option>)
				}
			</select>
			<select name="order" value={inputOrder} onChange={(e) => handleChange(e)}>
				<option value=''>Ordenar por...</option>
				<optgroup label="Nombre">
				<option value='nameAsc'>de A a Z</option>
				<option value='nameDes'>de Z a A</option>
				</optgroup>
				<optgroup label="Poblacion">
				<option value='popAsc'>de menor a mayor</option>
				<option value='popDes'>de mayor a menor</option>
				</optgroup>
			</select>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Mostrar todos los paises
      </button>
		</form>
		);
}

function MapStateToProps(state){
	return {
		activities: state.activitiesCreated
	}
}

function mapDispatchToProps(dispatch){
  return {
    getCountries: (name, continent, activity, order) => dispatch(getCountries(name, continent, activity, order)),
    getActivities: () => dispatch(getActivities()),
  }
};

export default connect(
  MapStateToProps,
  mapDispatchToProps
)(SearchBar);
