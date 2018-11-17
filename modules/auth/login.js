import React, {Component} from 'react';
import { AsyncStorage ,StyleSheet, Text, View, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import { WingBlank, InputItem } from 'antd-mobile-rn';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      user: '',
      password: '',
      loging: false,
      loginBtn: '登录'
    };
  }

  onSwitchChange = () => {
    this.setState({
      checked: value,
    });
  }
  login =  ()=> {
    if (this.state.loging){return}
    this.setState({
      loging: true,
      loginBtn: '正在登录...'
    })
    console.log(this.state.user,'用户账号')
    fetch("https://www.easy-mock.com/mock/5bd802cefbc6d6477d96f9bf/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: this.state.user,
        password: this.state.password
      })
    }).then((data)=>{
      console.log(data,'登陆成功')
      this.props.navigation.navigate('Active')
      this.setState({
        loging: false,
        loginBtn: '登录'
      })
      AsyncStorage.setItem('token','123')
    }).catch((err)=>{
      console.error(err)
      this.setState({
        loging: false,
        loginBtn: '登录'
      })
    })
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={{height: 200,width: '100%'}}
          source={require('../../assets/images/Koala.jpg')}
        />
        <WingBlank style={{flex:1}}> 
          <View style={{marginTop:20}}>
            <InputItem
              placeholder="邮件或手机号码"
              style={{backgroundColor:'white',padding:10}}
              onChange={(value) => {
                this.setState({
                  user: value
                });
              }}
            >
              <Image
                source={require('../../assets/images/user.png')}
              />
            </InputItem>
            <InputItem
              type="password"
              placeholder="输入密码"
              style={{backgroundColor:'white',padding:10}}
              onChange={(value) => {
                this.setState({
                  password: value
                });
              }}
            >
              <Image
                source={require('../../assets/images/password.png')}
              />
            </InputItem>
            <TouchableNativeFeedback
              onPress={this.login}
              background={TouchableNativeFeedback.Ripple('#455a64')}>
              <View style={{width: '100%', height: 50, backgroundColor: '#2196f3',borderRadius:10,justifyContent:'center', marginTop:40}}>
                <Text style={{fontSize:18,color:'white',textAlign:'center'}}>{this.state.loginBtn}</Text>
              </View>
            </TouchableNativeFeedback>
            <View style={{marginTop:20,justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
              <TouchableNativeFeedback
                onPress={() => {this.props.navigation.navigate('Register')}}
                background={TouchableNativeFeedback.Ripple('#455a64',true)}>
                <View style={{backgroundColor:'white',padding:10}}>
                  <Text style={{fontSize:18}}>注册账号</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => {this.props.navigation.navigate('forgotPassword')}}
                background={TouchableNativeFeedback.Ripple('#455a64',true)}>
                <View>
                  <Text style={{fontSize:18,padding:10}}>忘记密码？</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={{justifyContent:'center',flexDirection:'row',marginTop:60,alignItems:'center'}}>
            <Text style={{flex:1,backgroundColor:'black',height:1}}></Text>
            <Text>其他方式登录</Text>
            <Text style={{flex:1,backgroundColor:'black',height:1}}></Text>
          </View>   
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Image
              style={{width:40,height:40,marginRight:20}}
              source={require('../../assets/images/QQ.jpeg')}
            />
            <Image
              style={{width:40,height:40,marginLeft:20}}
              source={require('../../assets/images/wechat.jpeg')}
            />
          </View>
          <TouchableNativeFeedback
            onPress={() => {this.props.navigation.navigate('Main')}}
            background={TouchableNativeFeedback.Ripple('#455a64')}>
            <View style={{width: '100%', height: 50, backgroundColor: '#2196f3',borderRadius:10,justifyContent:'center', marginTop:40}}>
              <Text style={{fontSize:18,color:'white',textAlign:'center'}}>登录</Text>
            </View>
          </TouchableNativeFeedback>
        </WingBlank>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default App