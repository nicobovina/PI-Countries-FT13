const initialState = {
  countriesLoaded: [],
  countryDetail: {},
  activitiesCreated: [],
  // page: 0
};

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
 //    // Aca va tu codigo;
    case 'GET_COUNTRIES':   return {
      ...state, 
      countriesLoaded: state.countriesLoaded.concat(action.payload)
      };
      case 'GET_COUNTRIES_BY_NAME': return {
        ...state,
        countriesLoaded: action.payload
      };
    case 'GET_COUNTRY_DETAIL': return {
      ...state, 
      countryDetail: action.payload 
      };
 //    case 'RemoveTodo': return state.filter(todo => todo.id !== action.payload);
 //    case 'ToInProgress':  
 //    	return state.map(todo => {
 //    		if(todo.id === action.payload)	return {...todo, status: 'InProgress'};
 //    		return {...todo};
 //    	});
	// case 'ToDone':
	// return state.map(todo => {
 //    		if(todo.id === action.payload)	return {...todo, status: 'Done'};
 //    		return {...todo};
 //    	});
		default: return state;
  }  
}

export default rootReducer;

