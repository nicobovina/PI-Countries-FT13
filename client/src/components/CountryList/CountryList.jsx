import React from 'react';
// import { Link } from 'react-router-dom';

import Country from '../Country/Country';


export function CountryList({ countries }) {

	if (countries.length === 0) {
		return(
			<h3>No se encontraron paises</h3>
			);
	}
	return (
        <div style={{display:"flex", flexFlow:"row wrap", justifyContent:"center"}}>
        {countries.map( c => 
          <div >
            <Country key={c.id} id={c.id} name={c.name} continent={c.continent} flag={c.flag} />
          </div>
          )}
        </div>
        );
}

export default CountryList;
