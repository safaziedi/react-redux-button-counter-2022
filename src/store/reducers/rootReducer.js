import { combineReducers } from 'redux';
import CountReducer from './CountReducer';

//fichier contient tous les reducers
const rootReducer = combineReducers({
    CountReducer
});

export default rootReducer;