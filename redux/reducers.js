import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'
import {actions} from '../constants/Actions';

const showDetails = handleActions({
  "CLOSE_DETAILS": () => false,
  [actions.NEWSFEED.OPEN_DETAILS]: () => true
}, false);

const newsFeed = combineReducers({showDetails});

const reducers = combineReducers({
  newsFeed
});

export default reducers;
