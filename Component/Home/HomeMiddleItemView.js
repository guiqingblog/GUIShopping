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
    AlertIOS,
} from 'react-native';

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window')
class HomeMiddleItemView extends Component {
    static props = {
        title:'',
        subtitle:'',
        rightIcon:'',
        titleColor:'',
        cellDidClicked:null,
        tplurl:''
    }
    render() {
        return (
            <TouchableOpacity onPress={()=>this.clickCell(this.props.tplurl)}>
            <View style={styles.container}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={[{color:this.props.titleColor},styles.title]}>{this.props.title}</Text>
                    <Text style={styles.subtitle}>{this.props.subtitle}</Text>
                </View>
                <Image style= {styles.rightImage} source={{uri:this.props.rightIcon}}/>
            </View>
            </TouchableOpacity>
        );
    }

    clickCell(data){
        if (this.props.cellDidClicked == null) return;
        this.props.cellDidClicked(data);
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'white',
        width:width*0.5-1,
        height:60,
        marginRight:1,
        marginBottom:1,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
    },
    subtitle:{
        color:'gray'
    },
    rightImage:{
        width:64,
        height:43,
        resizeMode:'contain',
    }
});

module.exports = HomeMiddleItemView
