import React, {Component} from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';


class App extends Component {
  constructor (props) {
    super(props)
    this.isLogin()
  }
  isLogin = async () => {
    const userToken = await AsyncStorage.getItem("token")
    setTimeout(()=>{
      this.props.navigation.navigate(userToken==='13' ? 'Entry' : 'Login');
    },1000)
  }
  render() {
    return (
      <View style={{justifyContent:'center',flex:1,alignContent:'center'}}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

export default App