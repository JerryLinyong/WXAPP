import React  from 'react';
import PropTypes from 'prop-types'
import { Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


class ReportPage extends React.Component {
    static navigationOptions = {
        title: '统计',
        icon:"finance",//图标
        actions:[
            {name:"email",icon:"search"},
            {name:"home",icon:"home"}
        ]
    }
    constructor(props) {
        super(props)
    }
    exitabc(){

    }
    render() {
        return (
            <View>
                <Text>报告</Text>
            </View>
        )
    }
}

ReportPage.propTypes = {
  title: PropTypes.string
}
ReportPage.defaultProps = {
  title: "美一无线呼叫系统"
}

export default ReportPage

