/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
} from 'react-native';
var  Main = require('./GUIMain')
class LaunchImage extends Component {
    render() {
        return (
            //不要带后缀
                <Image source = {{uri:'launchimage'}} style={styles.launchImage}/>
        );
    }

    componentDidMount() {//复杂的操作:定时器,网络请求
        //2s之后切换到main中
        setTimeout(()=>{
            //页面的切换
            this.props.navigator.replace({
                component:Main,//具体的路由版块
            });
        },2000);

    }
}

const styles = StyleSheet.create({
    launchImage:{
        flex:1,
    }
});

module.exports = LaunchImage
