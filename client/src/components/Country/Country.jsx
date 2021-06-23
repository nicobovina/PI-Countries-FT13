import React from 'react';
import { Link } from 'react-router-dom';

import countryStyle from './Country.module.css';


export function Country({ id, name, continent, flag}){
    return (
        <Link className={countryStyle.link} to={`/country/${id}`}>
        <div className={countryStyle.conteiner}>
            <img alt={id} src={flag} className={countryStyle.flag}/>
            <div className={countryStyle.information}>
                <span className={countryStyle.primary}>{name}</span>
                <span className={countryStyle.secondary}>{continent}</span>
            </div>  
        </div>
        </Link>
        )
};


export default Country;