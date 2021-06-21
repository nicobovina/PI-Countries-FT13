import React from 'react';

export function InputSearch ({ input, type, handleChange}){

	return (
	<input 
		type="text" 
		id="inputCountry"
		autoComplete="off"
	  	value={input}
	  	placeholder={`Buscar por ${type}`}
	  	onChange={(e) => handleChange(e)}
  	/>
		);
}


export default InputSearch;