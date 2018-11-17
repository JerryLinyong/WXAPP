import addGateway from "../../modules/auth/addGateway";

let initGateways=[{
    id: '123',
    ip: '192.168.116.51',
    receiver:'',
    detector:''
}]

export default function Auth(state =initGateways, action) {
    switch (action.type) {
        case addGateway:
        return [...state,action.newGateway]
        default:
            return state
    }   
  }