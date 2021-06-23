import React from 'react';

import actDetailStyle from './ActivityDetail.module.css';

export function ActivityDetail({activity: {name, difficulty, duration, season}}){
	console.log(name);
	return (
		<div className={actDetailStyle.activity}>
			<h1>{name}</h1>
			<div className={actDetailStyle.details}>
				<div className={actDetailStyle.details_B}>
					<label htmlFor="difficulty">Dificultad</label>
					<p>{difficulty}</p>
				</div>
				<div className={actDetailStyle.details_B}>
					<label htmlFor="duration">Duracion</label>
					<p>{duration}</p>
				</div>
				<div className={actDetailStyle.details_B}>
					<label htmlFor="season">Temporada</label>
					<p>{season}</p>
				</div>
			</div>
		</div>
		);
}

export default ActivityDetail;