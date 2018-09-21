import appState from './data';

const createReducer = (state=appState, action) => {
    switch(action.type){
        case "ADD_ARTICLE":
            return {...state, article:action.payload}
        default:
            return state;
        
    }
}

export default createReducer