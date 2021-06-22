import React, { useEffect} from 'react';
import { connect } from 'react-redux';

import { getCountries, getActivities, filterByActivity } from '../../actions/index';

export function Filter(props){

  useEffect(() => {
      props.getActivities();
  },[]);

  function activityFilter(e){
  	props.filterByActivity(e.target.value);
  }

	return (
		<div>
			<h3>Filtrar por...</h3>
			<select name="listCountries" required>
				<option value=""></option>
			{ props.activities.map(a => 
				<option key={a.id} value={a.name} onClick={(e) => activityFilter(e)}>
				{a.name}
				</option>
				)
			}
			</select>
		</div>
		)
}

function mapStateToProps(state){
  return {
    countries: state.countriesLoaded,
    activities: state.activitiesCreated
  }
}

function mapDispatchToProps(dispatch){
  return {
    getCountries: () => dispatch(getCountries()),
    getActivities: () => dispatch(getActivities()),
    filterByActivity: activity => dispatch(filterByActivity(activity))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);