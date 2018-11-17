import React  from 'react';
import {  createStackNavigator } from 'react-navigation'
import MainPage from  "./main"
import AddGateway from '../modules/auth/addGateway'

const EntryNavigator=createStackNavigator({
    Entry:{
        screen:MainPage
    },
    AddGateway:{
        screen:AddGateway,
        navigationOptions: ({}) => ({
            headerTitle: '网关绑定'
        })
    }
},{
    initialRouteName: 'Entry'
})



export default EntryNavigator

