import React, { useState, useEffect } from 'react';

import CountryList from '../CountryList/CountryList';
import Pagination from '../Pagination/Pagination';

export function Display({ countries }){
	const [currentPage, setCurrentPage] = useState(1);
	const [countriesPerPage, setcountriesPerPage] = useState(10);

	useEffect(() => {
		setCurrentPage(1);
	},[countries]);

	const indexOfLastCountry = currentPage * countriesPerPage;
	const indexOffFirstCountry = indexOfLastCountry - countriesPerPage;
	const currentCountries = countries.slice(indexOffFirstCountry,indexOfLastCountry);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div>
			<CountryList countries={currentCountries} />
	      	<Pagination 
	        	countriesPerPage={countriesPerPage} 
	        	totalCountries={countries.length} 
	       	 	paginate={paginate} 
	     	 />
     	 </div>

		);
}

export default Display;