import React  from 'react';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { List, Checkbox,  Button, Text } from 'react-native-paper';
import { connect } from 'react-redux'
import { AsyncStorage } from "react-native"

const vstruct = require('varstruct')
const DataParser = vstruct([
  { name: 'header', type: vstruct.Byte },
  { name: 'controlAndSourceClass', type: vstruct.Byte},
  { name: 'source', type: vstruct.Byte},
  { name: 'frameNoAndTargetClass', type: vstruct.Byte},
  { name: 'target', type: vstruct.Byte},
  { name: 'command', type: vstruct.Byte},
  { name: 'data', type: vstruct.VarBuffer(vstruct.Byte)},
  { name: 'checksum', type: vstruct.Byte}
])
const CommandParser = vstruct([
  { name: 'sn', type: vstruct.Int16BE },
  { name: 'noop', type: vstruct.Buffer(10) },
  { name: 'key', type: vstruct.Byte}
])//定义数据类型

const Split = require('stream-split');//切分数据流
const receiveBuffer=new Split(Buffer.from([0x55]));//定义以什么结尾为一帧  
const net = require('net');

class MyPage extends React.Component {
    static navigationOptions = {
        title: '我的',
        icon:"account-outline",//图标
        actions:[
            {name:"email",icon:"search"}
        ]
    }
    constructor(props) {
        super(props)
    }
    exitabc(){

    }

    render() {
        return (
            <List.Section>
                <List.Item
                    title="绑定网关"
                    onPress={()=>{
                        this.props.navigation.navigate('AddDevice')
                    }}
                    right={() => <List.Icon icon="chevron-right" />}
                />
                <List.Accordion
                    title="场景选择"
                    style={{paddingRight:20}}
                    >
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
                <List.Item
                    title="绑定接收器"
                    onPress={()=>{
                        this.props.navigation.goBack('Login')
                        console.log(this.props)
                    }}
                    right={() => <List.Icon icon="chevron-right" />}
                />
                <List.Item
                    title="绑定探测器"
                    onPress={()=>{
                        this.props.navigation.goBack('Loging')
                        console.log(this.props)
                    }}
                    right={() => <List.Icon icon="chevron-right" />}
                />
                <Button mode="contained" onPress={() => console.log('Pressed')} style={{margin:40}}>
                    <Text style={{fontSize:20,color:'white'}}>退出</Text>
                </Button>
            </List.Section>
        )
    }
}


MyPage.propTypes = {
  title: PropTypes.string
}
MyPage.defaultProps = {
  title: "美一无线呼叫系统"
}

export default MyPage;

