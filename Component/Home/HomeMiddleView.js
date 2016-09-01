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
var MiddleItemView = require('./HomeMiddleItemView')
var JsonData = require('../../LocalData/HomeTopMiddleLeft.json')
class HomeMiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderLeftPart()}
                <View>
                {this.renderRightPart()}
                    </View>
            </View>
        );
    }

    renderLeftPart(){
        var leftData = JsonData.dataLeft[0];
        return(
            <TouchableOpacity onPress={()=>{}}>
            <View style={styles.leftView}>
                <Image source={{uri:leftData.img1}} style={styles.leftImage}/>
                <Image source={{uri:leftData.img2}} style={styles.leftImage}/>
                <Text style={styles.leftTitle}>{leftData.title}</Text>
                <View style={{flexDirection:'row',   marginTop:5,}}>
                    <Text style={styles.leftSubtitleMain}>{leftData.price}</Text>
                    <Text style={styles.leftSubtitleAppend}>{leftData.sale}</Text>
                </View>
            </View>
                </TouchableOpacity>
        );
    }

    renderRightPart(){
        var itemArr = []
        var dataArr = JsonData.dataRight;
        for (var i=0;i<dataArr.length;i++){
            var itemData = dataArr[i]
            itemArr.push(
                <MiddleItemView key={i}
                                title={itemData.title}
                                subtitle={itemData.subTitle}
                                rightIcon={itemData.rightImage}
                                titleColor={itemData.titleColor}


                >

                </MiddleItemView>
            );
        }
        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
       marginTop:10,
       flexDirection:'row',

    },
    leftImage:{
        width:100,
        height:30,
        resizeMode:'contain'
    },
    leftView:{
        width:width*0.5,
        height:121,
        backgroundColor:'white',
        alignItems:'center',
        marginRight:1,

    },
    leftSubtitleMain:{
        color:'blue',
        marginRight:5,
    },
    leftSubtitleAppend:{
        fontSize:12,
        color:'orange',
        backgroundColor:'yellow',

    },
    leftTitle: {
        color:'gray',
    }
});

module.exports = HomeMiddleView
