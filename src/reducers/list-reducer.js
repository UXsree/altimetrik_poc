import appState from './data';

const listReducer = (state=appState, action) => {
    switch(action.type){
        case "ADD_ARTICLE":
            return{
                ...state,
                article:[...state.article, action.payload]
            }
        default:
            return state;
        
    }
}

export default listReducer