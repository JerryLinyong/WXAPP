import { combineReducers } from 'redux'
import theme from "./common/theme/reducers" 
import auth from "./auth/reducers" 
import account from "./account/reducers" 
import messages from "./messages/reducers" 
import devices from "./devices/reducers" 
import resources from "./resources/reducers" 
import settings from "./settings/reducers" 
import identity from "./identity/reducers" 

export default combineReducers({
  theme,            // 当前主题
  auth,             // 认证相关的数据
  //当登录成功能后加载下列数据到state中
  account,          // 登录帐号信息
  identity,         // 登录录帐号对应的身份信息
  messages,         // 消息
  devices,          // 设备信息
  resources,        // 绑定的资源树
  settings          // 当前用户身份的配置信息
})


