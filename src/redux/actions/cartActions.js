import { ADDITEM, DELETEITEM, DELETEALL} from "./actionsType";


export const addItem = (newItem) =>{
    return{
        type:ADDITEM,
        payload: newItem
    }
}


export const deleteItem = (id)=>{
    return{
        type:DELETEITEM,
        payload: id
    }
}

export const deleteAll = ()=>{
    return{
        type:DELETEALL
    }
}