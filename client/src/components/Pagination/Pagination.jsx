import React from 'react';

import styled from 'styled-components';
import paginationStyle from './Pagination.modules.css'

const Button = styled.a`
  background-color: #141a35;
  color: #e2e2e2;
  border-radius: 3px;
  padding: .3rem .5rem;
  margin: .5rem .05rem;
  text-decoration:none;
  display: inline-block;
  width: 1rem;
  &:hover{
  	transform: translate(0rem, -.07rem);
  	transition: all .1s;
  	
  	background-color: #141a35ee;
  }
`;

// import paginationStyle from './Pagination.modules.css';

export function Pagination ({ countriesPerPage, totalCountries, paginate }){
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++){
		pageNumbers.push(i);
	}
	return (
			<div >
			{pageNumbers.map( number => {
				return (
						<Button key={number} onClick={() => paginate(number)} href="#" className={paginationStyle.pages}>
							{number}
						</Button >
					)
			})}
			</div>
		);
}

export default Pagination;
