import React from 'react';
// import { Link } from 'react-router-dom';

import Country from '../Country/Country';
import cList from './CountryList.module.css';


export function CountryList({ countries }) {

	if (countries.length === 0) {
		return(
			<h3>No se encontraron paises</h3>
			);
	}
	return (
        <div className={cList.list}>
        {countries.map( c => 
          <div >
            <Country 
              key={c.id} 
              id={c.id} 
              name={c.name} 
              continent={c.continent} 
              flag={c.flag} 
              population={c.population}/>
          </div>
          )}
        </div>
        );
}

export default CountryList;
