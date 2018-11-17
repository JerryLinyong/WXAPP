import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { Button, WingBlank, InputItem, } from 'antd-mobile-rn';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sended: false,
      time: 59
    };
  }

  getCode = () => {
    this.setState({
      sended: true,
      time: 59
    })
    let timer = setInterval(()=>{
      this.setState({
        time: this.state.time-1
      })
    },1000)
    setTimeout(()=>{
      this.setState({
        sended: false
      })
      clearInterval(timer)
    },60000)
  }
  render() {
    return (
      <View style={styles.container}>
        <WingBlank style={{marginTop:20}}>   
          <View style={{marginTop:20}}>
            <InputItem
              type='phone'
              placeholder="请输入手机号码"
              style={{padding:10}}
            >
              <Text>+86</Text>
            </InputItem>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:10}}>
              <InputItem
                placeholder='请输入手机验证码'
                style={{padding:10,flex:1}}
              >
              </InputItem>
              <Button type='primary' activeStyle={{backgroundColor:'grey'}} onClick={this.getCode} disabled={this.state.sended}>{this.state.sended?'请等待'+this.state.time+'s':'获取验证码'}</Button>
            </View>
            <InputItem
              type="password"
              placeholder="请输入密码"
              style={{padding:10,}}
            >
            </InputItem>
            <InputItem
              type="password"
              placeholder="请再次输入密码"
              style={{padding:10,marginTop:10}}
            >
            </InputItem>
          </View>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('Login')}
            background={TouchableNativeFeedback.Ripple('#455a64')}>
            <View style={{width: '100%', height: 50, backgroundColor: '#2196f3',borderRadius:10,justifyContent:'center', marginTop:40}}>
              <Text style={{fontSize:18,color:'white',textAlign:'center'}}>确认</Text>
            </View>
          </TouchableNativeFeedback>
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
