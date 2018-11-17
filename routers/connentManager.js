import React, {Component} from 'react';




class ConnectManager extends Component{
    constructor(props){
        super(props)
        this.state={
            gateways:props.gateways
        }
        this.connections={}
    }
    onData(gateway,data){
        let result= DataParser.decode(data)
        let callmesssage=CommandParser.decode(result.data)
        
        this.props.addMessage()
    }
    connectToGateways(){
        this.connections=this.state.gateways.map((gw)=>{
            let conn=net.createConnection(1234,value.gatewayIP,()=>{})
            conn.on(data,(data)=>{
                this.onData(gw,data)
            })
            return conn
        })
    }
    componentWillReceiveProps(nextProps){
        this.setState({gateways:nextProps})
    }
    render(){
        return null
    }

}

const mapStateToProps
const mapDispachToProps


export default ConnectedConnectManager= connect(mapThemeStateToProps)(ConnectManager)



const net = require('net');

export const connectGateways = (data) => {
    return data.map((value) => {
        return net.createConnection(1234,value.gatewayIP,()=>{
            console.log('connected')
        })
    })
}


function receiveData(data){
    let result= DataParser.decode(data)
    let caller=CommandParser.decode(result.data)
    console.log('result is = ' , result) 
    let sn = caller.sn.toString(16);
    console.log("Calling sn =", sn," ,key =", caller.key & 0xf )
}


export const listening = (client)=>{
    client.on('error', function(error) {
        console.log(error)
    })
    client.on('data', function(data) {
        receiveBuffer.write(data) //将数据写入触发回调函数
    });
}