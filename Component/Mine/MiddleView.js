/**
 * Created by kenny on 8/9/16.
 */
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
    TouchableOpacity,
} from 'react-native';

var JsonData = require('./MiddleData.json')

class MiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.rendAllItems()}
            </View>
        );
    }
    rendAllItems(){
        var ItemArray = []
        for(var i=0;i<JsonData.length;i++){
            var data = JsonData[i]
            ItemArray.push(
                <ButtonView key={i} iconName={data.iconName} title={data.title}/>
            )
        }
        return ItemArray;
    }
}
const styles = StyleSheet.create({
    container: {
        // 设置主轴的方向
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: 'white',
        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },
});


class ButtonView extends Component{
    static props={
        iconName:'',
        title:'',
    }

    render(){
        return(
            <TouchableOpacity>
            <View style={ButtonStyles.view}>
                <Image source={{uri:this.props.iconName}} style={ButtonStyles.image}/>
                <Text style={ButtonStyles.text}>{this.props.title}</Text>
            </View>
                </TouchableOpacity>
        );

    }
}

const ButtonStyles = StyleSheet.create({
    view:{
        width:70,
        height:70,
        // 水平和垂直居中
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:40,
        height:30,
        marginBottom:3,
    },
    text:{
        color:'gray',
    }
})


module.exports = MiddleView
