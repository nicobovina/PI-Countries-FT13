import React, { useState, useEffect } from 'react';

import CountryList from '../CountryList/CountryList';
import Pagination from '../Pagination/Pagination';

import cStyle from './Countries.module.css';

export function Countries({ countries }){
	const [currentPage, setCurrentPage] = useState(1);
	const [countriesPerPage] = useState(10);

	useEffect(() => {
		setCurrentPage(1);
	},[countries]);

	const indexOfLastCountry = currentPage * countriesPerPage;
	const indexOffFirstCountry = indexOfLastCountry - countriesPerPage;
	const currentCountries = countries.slice(indexOffFirstCountry,indexOfLastCountry);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className={cStyle.display}>
			<div className={cStyle.countries}>
				<CountryList countries={currentCountries} />
			</div>
			<div className={cStyle.pages}>
	      	<Pagination 
	        	countriesPerPage={countriesPerPage} 
	        	totalCountries={countries.length} 
	       	 	paginate={paginate} 
	     	 />
	     	 </div>
     	 </div>

		);
}

export default Countries;