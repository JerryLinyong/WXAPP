import React from 'react';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform,StyleSheet, Text, View,Image,Button} from 'react-native';
import { List,Surface,Portal,TouchableRipple } from 'react-native-paper';
import { CHANGE_THEME } from "../../store/common/theme/actionTypes"
import { connect } from 'react-redux'

const styles = StyleSheet.create({
    content: {

    }
})

const mapStateToProps=(state,ownProps)=>{//mapStateToProps
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeTheme:(theme)=>dispatch({type:CHANGE_THEME,theme:theme})
    }
}

class HomePage extends React.Component {
    static propTypes = {
        title: PropTypes.string
    }
    static defaultProps = {
        title: "美一无线呼叫系统"
    }
    static navigationOptions = {
        title: '首页',
        icon:"home-outline",//图标
        actions:[
            {name:"email",icon:"search"},
            {name:"home",icon:"home"}
        ],
        menu:[
            {name:"email",title:"search"},
            {name:"home",title:"home"}
        ]
    }
    constructor(props) {
        super(props)
        this.state = {
        }
        this.menuRef=React.createRef()
    }
    /**
     * 当导航条的按钮按下时触发此事件
     * @param {String} name 
     */
    onNavigationAction(name){
        if(name==="home"){
            
        }
    }
    /**
     *显示菜单
     */
    onNavigationMenu(name){
        alert("我是首页："+name)
    }
    render() {        
        return (
            <View> 
                <View style={styles.content}>
                    <Text>首页内容</Text>
                    <Button title="默认主题" onPress={()=>this.props.changeTheme("default")}></Button>
                    <Button title="红色主题" onPress={()=>this.props.changeTheme("red")}></Button>
                </View>
                {/* <Banner
                    visible={ true }
                    actions={[
                        {
                            label: 'Fix it',
                            onPress: () => this.setState({ visible: false }),
                        },
                        {
                            label: 'Learn more',
                            onPress: () => this.setState({ visible: false }),
                        },
                    ]}
                    image={({ size }) =>
                        <Image
                            source={{ uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4' }}
                            style={{
                                width: size,
                                height: size,
                            }}
                        />
                    }
                >
                There was a problem processing a transaction on your credit card.
                </Banner> */}
            </View>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomePage)

