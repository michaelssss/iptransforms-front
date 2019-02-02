import { REQUEST_POST, RECEIVED_POST } from "./action";

export const init_state = {
    addr:'',
    result:''
}

export function transform(state=init_state,action){
    switch (action.type){
        case REQUEST_POST:{
            return Object.assign({},state,{
                result:'waiting'
            })
        }
        case RECEIVED_POST:{
            return Object.assign({},state,{
                result:action.payload.result
            })
        }
        default:{
            return state
        }

    }
}

export default transform