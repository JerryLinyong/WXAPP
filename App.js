/**

    应用程序入口;

 */

import React from 'react';
import { createSwitchNavigator} from 'react-navigation';
import EntryNavigator from "./routers/entry"
import AuthNavigator from "./routers/auth"
import LoginingPage from "./modules/auth/logining"
import { Provider as PaperProvider} from 'react-native-paper';
import { Provider,connect } from 'react-redux'
import rootStore  from "./store/store"
import { mapThemeStateToProps } from './store/common/theme/utils'
import "./bootstrap"



const RootNavigator = createSwitchNavigator(
    {
        Logining: LoginingPage,         // 显示正在登录的界面
        Entry    : EntryNavigator,        // 主导航
        Login   : AuthNavigator,        // 处理登录及注册流程
    },
    {
        initialRouteName: 'Entry',
        headerMode:"screen"
    }
)

//将Store里面的theme注入到PaperProvider组件
const ConnectedPaperProvider = connect(mapThemeStateToProps)(PaperProvider)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={rootStore}>
            <ConnectedConnectManager></ConnectedConnectManager>
                <ConnectedPaperProvider>
                    <RootNavigator/>
                </ConnectedPaperProvider>
            </Provider>
        )
    }
}
