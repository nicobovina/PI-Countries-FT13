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
    case 'GET_COUNTRIES':   return {
      ...state, 
      countriesLoaded: action.payload
      };
      // case 'GET_COUNTRIES_BY_NAME': return {
      // ...state,
      // countriesLoaded: action.payload
      // };
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
    // case 'FILTER_BY_CONTINENT': return {
    //   ...state,
    //   countriesLoaded: state.countriesLoaded.filter( c => 
    //     c.continent === action.payload
    //     )
    // }
    // case 'FILTER_BY_ACTIVITY': return {
    //   ...state,
    //   countriesLoaded: state.countriesLoaded.filter( c => 
    //     c.activities.filter( a => 
    //       a.name.includes(action.payload)).length)
    // }
		default: return state;
  }  
}

export default rootReducer;

