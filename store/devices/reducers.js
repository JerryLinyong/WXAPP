let initDevices={
    "123":{
        ip:'192.168.116.51',
        name:"",
        status:0
    },  
    
}

export default function Auth(state =initDevices, action) {
    switch (action.type) {
        case 'addDevice':
        return action.device
        default:
            return state
    }   
  }