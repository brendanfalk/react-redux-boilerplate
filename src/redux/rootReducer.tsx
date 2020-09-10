// This combines all the reducers from each container to be imported into index.js
import { combineReducers } from 'redux';

// Import all other reducers from across the project here
// The name you use on import is the key for the redux store
import global from '../containers/_App/reducer';
import news from '../containers/HomePage/reducer'


export default combineReducers({
    global,
    news
});
