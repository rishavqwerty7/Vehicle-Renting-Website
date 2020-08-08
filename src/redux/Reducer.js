import {Order_id} from './ActionTyp'
const initState={
    id:""
}

const Reducer = (state=initState,action)=>
{
    switch(action.type){
        case Order_id:
            return {
                ...state,
                id:Date.now()
            }
        default: return state    
    }

}

export default Reducer