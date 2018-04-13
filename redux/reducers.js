import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'

const showDetails = handleActions({
  "CLOSE_DETAILS": () => false,
  "OPEN_DETAILS": () => true
}, false);

const newsFeed = combineReducers({showDetails});

const reducers = combineReducers({
  newsFeed
});

export default reducers;
