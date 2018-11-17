import { LOGIN,LOGOUT } from '../actionTypes'

let initAuthState={
    url:"",//所登录的服务器地址
    username:"",//登录帐号名称
    password:"",//最后登录的密码
    token:"",//最近一次登录的令牌
    loginLast:null,//最后一次成功登录的时间
    saveLogin:true,//是否保存登录
}

export default function Auth(state =initAuthState, action) {
    switch (action.type) {
        default:
            return state
    }  
  }