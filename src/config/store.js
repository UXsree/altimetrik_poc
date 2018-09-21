import {createStore, combineReducers} from 'redux';
import listReducer from '../reducers/list-reducer';
// import createReducer from '../reducers/create-reducer';

const rootReducer = combineReducers({
    // create: createReducer,
    list: listReducer
})


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;