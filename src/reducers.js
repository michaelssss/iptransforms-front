import { REQUEST_POST, RECEIVED_POST } from "./action";

export const init_state = {
    ip:'',
    result:''
}

function transform(state=init_state,action){
    switch (action.type){
        case REQUEST_POST:{
            return Object.assign({},state,{
                result:'waiting'
            })
        }
        case RECEIVED_POST:{
            return Object.assign({},state,{
                result:'result'
            })
        }
        default:{
            return state
        }

    }
}


function request(requestData){
    var result = "";
    $.ajax({
        url:'http://127.0.0.1:8080/IPAddr/transform',
        type:'POST',
        dataType:'json',
        data:{            
            "addr":requestData
        },
        xhrFields:{
            'Access-Control-Allow-Origin': '*'
        }
    }).done(function(data){
        result = data
        console.log(data)
    })
    return result
}

export default transform