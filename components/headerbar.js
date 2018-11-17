/**
 * 
 * 通用标题栏组件
 * 
 *  <Headerbar
 *      theme={theme}
 *      title=""
 *      onAction:{(name)=>{...}}
 *      actions={[
 *          {
 *              name:"",//按钮名称
 *              icon:"archive",
 *              label:"",
 *              style:"",
 *              color:"",
 *              disabled:true,
 *              onPress={() => console.log('Pressed archive')} />
 *          },
 *          ...
 *      ]}
 *  ></Headerbar>
 * 
 */

 import React,{Component} from 'react'
 import { StyleSheet,Text,View } from 'react-native';
 import PropTypes from 'prop-types'
 import { Theme } from 'react-native-paper';
 import { Appbar } from 'react-native-paper';
 import {StatusBar} from 'react-native';
 import ActiveTheme from "../common/theme"


 const styles = StyleSheet.create({
    barStyle:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,  
    }
})

 export default class HeaderBar extends React.Component {
    static propTypes = {
        theme:PropTypes.string,
        title: PropTypes.string,//标题栏
        subtitle: PropTypes.string,//标题栏
        onAction:PropTypes.func,//按钮事件
        icon:PropTypes.oneOfType([//指定左侧要显示的图标
            PropTypes.element,
            PropTypes.string
          ]),
        contextMenu:PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.shape
          ]),
        actions:PropTypes.arrayOf(PropTypes.element)//右侧动作按钮，如果指定上下文菜单，则显示在菜单左侧
    }
    static defaultProps = {
        title: "环宇通"
    }
    render(){
        return (
              
                <Appbar
                style={styles.barStyle}
            >   
                <Appbar.Content
                    title={this.props.title}

                /> 
                {this.props.actions.map((action)=>{
                    let actionProps=Object.assign({},action)
                    delete actionProps.name
                    return <Appbar.Action key={action.name} {...actionProps}/>
                })}
            </Appbar>
           
        )
    }
}