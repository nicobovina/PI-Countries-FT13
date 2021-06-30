const initialState = {
  countriesLoaded: [],
  countriesFiltered: [],
  countryDetail: {},
  activitiesCreated: []
};

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
 //    // Aca va tu codigo;
    case 'GET_COUNTRIES':   
      return {
      ...state, 
      countriesLoaded: action.payload
      };
    case 'GET_COUNTRY_DETAIL': return {
      ...state, 
      countryDetail: action.payload 
      };
    case 'ADD_ACTIVITY': return {
      ...state,
      activitiesCreated: action.payload
    }
    case 'GET_ACTIVITIES': return {
      ...state,
      activitiesCreated: action.payload
    }
		default: return state;
  }  
}

export default rootReducer;

