import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducer';
import thunk from 'redux-thunk';

export const store = createStore(
  rootReducer, 
  applyMiddleware(thunk)
  );


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()