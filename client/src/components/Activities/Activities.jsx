import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getCountries, getActivities, addActivity } from '../../actions/index';
import { validate } from '../../helpers/validate';

import actStyle from './Activities.module.css';

import styled from 'styled-components';

const ErrorStyle = styled.p`
  color: #d80807;
  font-size: .8rem;
  margin-left: .5rem;
`;


export function Activities(props){
  // Estado de la actividad
  const [form, setForm] = useState({
    name: null,
    difficulty: null,
    duration: null,
    season: null,
    countries:[]
  });
  // Estado para el manejo de errores y validaciones
  const [errors, setErrors] = useState({});
  // Estado para el manejo de adicion de paises
  const [country, setCountry] = useState({
    countryToAdd: null,
    countryToDel: null
  });

  useEffect(()=> {
    props.getCountries();
    props.getActivities();
  },[]);

  useEffect(() => {
    setErrors(validate(form));
  },[form])

  function handleChange(e){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e){
    console.log(e);
    e.preventDefault();
    if (!Object.keys(errors).length){
      props.addActivity(form);
      alert('Se agregó la actividad');
    }
  }

  // Para manejar el estado de adicion de paises
  function handleCountryChange(e){
    setCountry({
      ...country,
      [e.target.name]: e.target.value
    });
  }

  // Agrega el pais al estado de la actividad
  function addCountry(){
      const founded = form.countries.find(c => c === country.countryToAdd);
      if (country.countryToAdd && !founded){
        setForm({
          ...form,
          countries: [...form.countries, country.countryToAdd]
          });
      }
  }

  // Borra el pais del estado de la actividad
  function removeCountry(e){
    setForm({
      ...form,
      countries: form.countries.filter(c => c !== country.countryToDel)
    });
  }

  return (
    <div className={actStyle.conteiner}>
    <h1 className={actStyle.title}>Crea tu propia actividad</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className={actStyle.sectionForm}>
        <label className={actStyle.label} htmlFor="name">Nombre</label>
        <div className={actStyle.sectionForm_2}>
          <input type="text" name="name" placeholder="Nombre de la actividad" 
            value={form.name} onChange={(e) => handleChange(e)}/>
          {errors.name && <ErrorStyle >{errors.name}</ErrorStyle>}
        </div>
      </div>
      <div className={actStyle.sectionForm}>
        <label className={actStyle.label} htmlFor="difficulty">Dificultad</label>
        <div className={actStyle.sectionForm_2}>
          <select name="difficulty" value={form.difficulty} onChange={(e) => handleChange(e)}>
            <option value="---">---</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          {errors.difficulty && <ErrorStyle>{errors.difficulty}</ErrorStyle>}
        </div>
      </div>
      <div className={actStyle.sectionForm}>
        <label className={actStyle.label} htmlFor="duration">Duracion</label>
        <div className={actStyle.sectionForm_2}>
          <input type="text" name="duration" placeholder="Escriba un valor numerico"
            value={form.duration} onChange={(e) => handleChange(e)}/>
          {errors.duration && <ErrorStyle>{errors.duration}</ErrorStyle>}
        </div>
      </div>
      <div className={actStyle.sectionForm}>
        <label className={actStyle.label} htmlFor="season">Temporada</label>
        <div className={actStyle.sectionForm_2}>
          <select name="season" value={form.season} onChange={(e) => handleChange(e)}>
            <option value="---">---</option>
            <option value="autumn">Otoño</option>
            <option value="winter">Invierno</option>
            <option value="spring">Primavera</option>
            <option value="summer">Verano</option>
          </select>
          {errors.season && <ErrorStyle>{errors.season}</ErrorStyle>}
        </div>
      </div>
      <div className={actStyle.sectionForm}>
        <label className={actStyle.label} htmlFor="countryToDel">Paises en que desea realizar la actividad</label>
        <div className={actStyle.sectionForm_2}>
          <select name="countryToAdd" value={country.countryToAdd} onChange={(e) => handleCountryChange(e)}>
              <option value="">Elegir pais</option>
              { 
                props.countries.map(c => <option key={c.id} value={c.id}>{c.name} ({c.id})</option>)
              }
            </select>
            <button type="button" key="addCountry" onClick={() => addCountry()}>Agregar pais</button>
        </div>
      </div>
      <div className={actStyle.sectionForm}>
        <label className={actStyle.label} htmlFor="countryToDel">Paises agregados</label>
        <div className={actStyle.sectionForm_2}>
          <select name="countryToDel" value={country.countryToDel} onChange={(e) => handleCountryChange(e)}>
            <option value={null}>Elegir pais</option>
            { 
              form.countries.map(c => <option key={c} value={c}>{c}</option>)
            }
          </select>
          <button type="button" key="delCountry" onClick={() => removeCountry()}>Eliminar pais agregado</button>
          {errors.countries && <ErrorStyle>{errors.countries}</ErrorStyle>}
        </div>
      </div>
      <div className={actStyle.sectionForm}>
        <button className={actStyle.submitButton} key="submit" type="submit">Crear actividad</button> 
      </div>
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
    getActivities: () => dispatch(getActivities()),
    addActivity: activity => dispatch(addActivity(activity))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activities);

