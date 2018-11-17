import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types'
import { Platform, StyleSheet, Text, View} from 'react-native';
import { Appbar } from 'react-native-paper';

class MapPage extends React.Component {
    static navigationOptions = {
        title: '地图',
        icon:"map-outline",//图标
        actions:[
            {name:"email",icon:"search"}
        ]
    }
    onSearch(){
        alert("map search")
    }
    constructor(props) {
        super(props)
    }
    exitabc(){

    }
    render() {
        return (
            <View>
                <Text>地图</Text>
            </View>
        )
    }
}

MapPage.propTypes = {
    title: PropTypes.string
}
MapPage.defaultProps = {
    title: "美一无线呼叫系统"
}

export default MapPage

