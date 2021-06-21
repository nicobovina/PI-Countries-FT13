import React from 'react';

export function Pagination ({ countriesPerPage, totalCountries, paginate }){
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++){
		pageNumbers.push(i);
	}
	return (
			<div style={{display:"flex", flexFlow:"row wrap"}}>
			{pageNumbers.map( number => {
				return (
						<a key={number} onClick={() => paginate(number)} href='#'>
							{number}
						</a>
					)
			})}
			</div>
		);
}

export default Pagination;
