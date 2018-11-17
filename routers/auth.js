import React from 'react';
import { createStackNavigator  } from 'react-navigation';
import LoginPage from "../modules/auth/login";
import RegisterPage from "../modules/auth/addGateway";
import forgotPasswordPage from "../modules/auth/forgotPassword"

const AuthenticationNavigator = createStackNavigator({
    Login: {
        screen: LoginPage,
        navigationOptions: ({}) => ({
            header: null
        })
    }, // 登录页
    Register: {
        screen: RegisterPage,
        navigationOptions: ({}) => ({
            headerTitle: '用户注册'
        })
    }, // 注册帐号
    forgotPassword: {
        screen: forgotPasswordPage,
        navigationOptions: ({}) => ({
            headerTitle: '找回密码'
        })
    }, // 重置帐号密码
})

export default class AuthenticationScreen extends React.Component {
    render() {
        return (
            <AuthenticationNavigator />
        )
    }
}

