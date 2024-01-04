import { ADDITEM, DELETEITEM, DELETEALL } from "../actions/actionsType";


let initialState = []

function cartReducer(state= initialState, action){
    if(action.type === ADDITEM){
        return [...state, action.payload]
    }

    else if(action.type === DELETEITEM){
        return state.filter((item)=> item.id !== action.payload)
    }

    else if(action.type === DELETEALL){
        return state = []
    }

    else {
        return state
    }
}

export default cartReducer;