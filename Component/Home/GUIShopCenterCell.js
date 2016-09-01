/**
 * Created by kenny on 8/11/16.
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

class GUIShopping extends Component {
    static props = {
        leftIcon:'',
        leftTitle:'',
        rightTitle:'',
    }
    render() {
        return (
            <View style={styles.container}>
               <View style={styles.leftView}>
                   <Image source={{uri:this.props.leftIcon}} style={styles.leftIcon}/>
                    <Text style={{marginLeft:5}}>{this.props.leftTitle}</Text>
               </View>
                <View style={styles.rightView}>
                    <Text style={{marginRight:5}}>{this.props.rightTitle}</Text>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightIcon}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:44,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-between',

        borderBottomWidth:1,
        borderBottomColor:'#e8e8e8'
    },
    leftView:{
        flexDirection:'row',
        alignItems:'center',
    },
    rightView:{
        flexDirection:'row',
        alignItems:'center',
    },
    leftIcon:{
        marginLeft:10,
        width:23,
        height:23,
    },
    rightIcon:{
        width:8,
        height:14,
        marginRight:10,
        marginLeft:8,
    },
});

module.exports = GUIShopping
