import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { WingBlank, InputItem } from 'antd-mobile-rn';
import { List, Button } from 'react-native-paper';
import { connect } from 'react-redux'
import { AsyncStorage } from "react-native"


const net = require('net');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sended: false,
      isloading: false,
      gatewayIP: '',
      gatewayID: ''
    };
  }

  // componentWillMount() {
  //   AsyncStorage.clear()
  // }//清除本地数据库

  // connectQ5() {
  //   this.setState({
  //     isloading: true
  //   })
  //   const client = net.createConnection(1234,this.state.address,()=>{
  //     console.log('connected')
  //     AsyncStorage.getItem("devices", (err,result) => {
  //       if(result===null){
  //         const newDevices = this.state.address + ''
  //         AsyncStorage.setItem("devices", newDevices,() => {
  //           this.props.addDevice(newDevices)
  //           this.props.navigation.navigate('Entry')
  //         });
  //       } else {
  //         const newDevices = result + ',' + this.state.address
  //         AsyncStorage.setItem("devices", newDevices,() => {
  //           this.props.addDevice(newDevices)
  //           this.props.navigation.navigate('Entry')
  //         });
  //       }
  //     });
  //   });
  // }//设置与Q5的连接
  addGateway () {
    const newGateway = {
      id: this.state.gatewayID,
      ip: this.state.gatewayIP,

    }
    this.props.addGateway(newGateway)
  }

  render() {
    return (
      <View style={styles.container}>
        <WingBlank style={{marginTop:20}}>   
          <View style={{marginTop:20}}>
            <InputItem
              type='phone'
              placeholder="请输入网关ID"
              onChange={(value)=>{this.setState({
                gatewayID: value
              })}}
              style={{backgroundColor:'white',padding:10}}
            >
              <Text>网关ID:</Text>
            </InputItem>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:10}}>
              <InputItem
                placeholder='请输入IP地址'
                style={{padding:10,flex:1}}
                onChange={(value)=>{this.setState({
                  gatewayIP: value
                })}}
              >
                <Text>IP地址：</Text>
              </InputItem>
            </View>
            <List.Section>
                <List.Item
                    title="绑定网关"
                    onPress={()=>{
                    }}
                    right={() => <List.Icon icon="chevron-right" />}
                />
                <List.Item
                    title="绑定探测器"
                    onPress={()=>{
                        console.log(this.props)
                    }}
                    right={() => <List.Icon icon="chevron-right" />}
                />
            </List.Section>
          </View>
          <Button mode="contained" onPress={() => this.addGateway()} style={{margin:40}} loading={this.state.isloading}>
            <Text style={{fontSize:20,color:'white'}}>添加</Text>
          </Button>
        </WingBlank>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

const mapStateToProps = state => {
  return {
    gateways: state.gateways,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addGateway: ({newGateway})=>{dispatch({type:'addGateway',newGateway:newGateway})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)