import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

class GUIHomeDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.backToHome()}}>
                <Text>测试跳转</Text>
                </TouchableOpacity>
            </View>
        );
    }
    backToHome(){
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

module.exports = GUIHomeDetail