import React from 'react';
import { Link } from 'react-router-dom';

export function Country({ id, name, continent, flag}){
    return (
        <div style={{width:"100px", margin:"10px", border:"1px solid black", flex:"0 1 auto"}}>
            <Link to={`/country/${id}`}>
                <div>
                    <img src={flag} style={{width:"30px", }}/>
                    <h5 style={{font_size:"15px"}}>{name}</h5>
                    <h6>{continent}</h6>
                </div>
            </Link>
        </div>)
};


export default Country;