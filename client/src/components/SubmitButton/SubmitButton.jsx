import React from 'react';

export function SubmitButton({ input, handleSubmit }){
	return (
		<button type="submit" onClick={() => handleSubmit(input)}>BUSCAR</button>
		);
}

export default SubmitButton;