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
      countriesLoaded: action.payload
      };
      case 'GET_COUNTRIES_BY_NAME': return {
        ...state,
        countriesLoaded: action.payload
      };
    case 'GET_COUNTRY_DETAIL': return {
      ...state, 
      countryDetail: action.payload 
      };
    case 'ADD_ACTIVITY': return {
      ...state,
      activitiesCreated: [state.activitiesCreated, action.payload]
    }
		default: return state;
  }  
}

export default rootReducer;

