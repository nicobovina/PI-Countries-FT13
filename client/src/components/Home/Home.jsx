import React, { useState, useEffect }from 'react';
import { connect } from 'react-redux';
import { getCountries, getCountriesByName } from '../../actions/index';
import Country from '../Country/Country';

// import './Home.css';

export function Home(props) {
  const [name, setName] = useState('');
  const [loaded,setLoaded] = useState(false);
  useEffect(() => {
    if (loaded === false) {
      props.getCountries();
      setLoaded(true);
    }
  },[]);


  function handleChange(e){
    setName(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if(name){ 
      props.getCountriesByName(name);
      setName('');
    }
  }

  return (
    <div>
      <h1>Bienvenido a tu viaje</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
        type="text" 
        id="title" 
        autoComplete="off" 
        value={name} 
        placeholder="Ingresa el pais..."
        onChange={(e) => handleChange(e)}/>
        <button type="submit">BUSCAR</button>
        <button onClick={() => props.getCountries()}>Mostrar todos los paises</button>
      </form>
      {loaded ?
        <ul>
        {props.countries.map( c => <Country name={c.name} continent={c.continent} flag={c.flag} />)}
        </ul>
        :
        <h3>Cargando...</h3>
      }
      
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
    getCountriesByName: name => dispatch(getCountriesByName(name))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
