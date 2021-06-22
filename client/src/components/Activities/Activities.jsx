import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getCountries, addActivity } from '../../actions/index';

// import './Activities.css';

export function validate(input){
  let errors = {};
  // Valido el name
  if (!input.name){
    errors.name = 'Se requiere un nombre';
  }
  // Valido la dificultad
  if (!input.difficulty){
    errors.difficulty = 'Elija una dificultad'
  } else if (!/^[0-9]$/.test(input.difficulty)){
    errors.difficulty = 'La dificultad debe ir de 1 a 5';
  }
  if (!input.duration){
    errors.duration = 'Se requiere una duracion';
  } else if (!/^[0-9]$/.test(input.duration)){
    errors.duration = 'Solo se reciben valores numericos';
  }
  if (!input.season){
    errors.season = 'Elija una temporada';
  } else if (!/[a-zA-Z ]$/.test(input.season)){
    errors.season = 'Elija una temporada valida'
  }
  if (!input.countries.length){
    errors.countries = 'Agregue al menos un pais a la actividad';
  }
  return errors;
}


export function Activities(props){
  const [form, setForm] = useState({
    countries:[]
  });
  const [errors, setErrors] = useState({});

  // useEffect(()=> {
  //   props.getCountries();
  // },[]);

  function handleChange(e){
    setErrors(validate({
      ...form,
      [e.target.name]: e.target.value
    }));
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    props.addActivity(form);
  }

  // Hago el handleChange pero en el caso que es un country
  function addCountry(e){
    const founded = form.countries.find(c => c === e.target.value);
    if (!founded){
      setForm({...form,
        countries: [
          ...form.countries, 
          e.target.value
      ]});
    }
  }
  // Hago el handleChange pero en el caso que es un country
  function removeCountry(){
    setForm({...form,
      countries: []
    });
  }

  return (
    <div>
    <h1>Nueva actividad</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" placeholder="Nombre de la actividad" 
        value={form.name} onChange={(e) => handleChange(e)} required/>
      {errors.name && <p>{errors.name}</p>}
      <hr/>
      <label htmlFor="difficulty">Dificultad</label>
      <select name="difficulty" onChange={(e) => handleChange(e)} value={form.difficulty} required>
        <option value="---">---</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      {errors.difficulty && <p>{errors.difficulty}</p>}
      <hr/>
      <label htmlFor="duration">Duracion</label>
      <input type="text" name="duration" placeholder="Escriba un valor numerico"
        value={form.duration} onChange={(e) => handleChange(e)} required/>
      {errors.duration && <p>{errors.duration}</p>}
      <hr/>
      <label htmlFor="season">Temporada</label>
      <select name="season" onChange={(e) => handleChange(e)} value={form.season} required>
        <option value="---">---</option>
        <option value="autumn">Otoño</option>
        <option value="winter">Invierno</option>
        <option value="spring">Primavera</option>
        <option value="summer">Verano</option>
      </select>
      {errors.season && <p>{errors.season}</p>}
      <hr/>
      <label htmlFor="listCountries">Selecciona los paises que deseas agregar a la actividad</label>
      <select name="listCountries" required>
      {
        props.countries.map(c => 
          <option key={c.id} value={c.id} onClick={(e) => addCountry(e)}>
            {c.name}
          </option>
        )
      }
      </select>
      <hr/>
      { !form.countries.length ?
        <p>No hay paises agregados</p>
        :
        <ul>Paises agregados:
          {form.countries.map( c => <li key={c}>{c}</li>)}
        </ul>
      }
      <button onClick={() => removeCountry()}>Borrar paises</button>
      <hr/>
      {
        !Object.keys(errors).length ?
        <button type="submit">Crear actividad</button> 
        :
        <button type="submit" disabled>Crear actividad</button>
      }
    </form>
    </div>
  );
}


function mapStateToProps(state){
  return {
    countries: state.countriesLoaded
  };
}

function mapDispatchToProps(dispatch){
  return {
    getCountries: () => dispatch(getCountries()),
    addActivity: activity => dispatch(addActivity(activity))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activities);

