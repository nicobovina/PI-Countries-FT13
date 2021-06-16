import React from 'react';

export function Country({ name, continent, flag}){
    return (
        <div>
            <img src={flag} style={{width:"30px", }}/>
            <h5>{name}</h5>
            <h6>{continent}</h6>
        </div>)
};


export default Country;