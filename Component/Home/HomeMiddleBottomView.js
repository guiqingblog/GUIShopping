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
    AlertIOS,

} from 'react-native';

var JsonData = require('../../LocalData/XMG_Home_D4.json')
var ItemView = require('./HomeMiddleItemView')
var Dimensions = require('Dimensions')
var {width,height} = Dimensions.get('window')

class HomeMiddleBottomView extends Component {
    static props={
        popTopHome: null
    }
    render() {
        return (
            <View style={styles.container}>
                 <View style={styles.topView}>
                    {this.renderBottomItem()}
                 </View>
                <View style={styles.bottomView}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    }
    renderBottomItem(){
        var items = []
        var datas = JsonData.data
        for (var i=0;i<datas.length;i++){
            var item = datas[i]
            items.push(
                <ItemView
                     style={{height:60}}
                     title={item.maintitle}
                     subtitle={item.deputytitle}
                     rightIcon={this.processImageURL(item.imageurl)}
                     titleColor={item.typeface_color}
                     cellDidClicked={(data)=>this.popToTopView(data)}
                     tplurl={item.tplurl}
                     key={i}
                />

            );
        }
        return items;

    }

    popToTopView(data){
        // 继续执行回调函数
        this.props.popTopHome(data);
    }

    processImageURL(url){
        if (url.search('w.h') == -1){
            return url
        }
        return url.replace('w.h','120.90')
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
    },
    topView:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
    },
    bottomView:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
    }
});

module.exports = HomeMiddleBottomView
