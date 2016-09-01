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
    ListView,
    Platform,
    TouchableOpacity,
    AlertIOS,
} from 'react-native';

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window')

// 全局的变量
var cols = 5;
var cellW = Platform.OS == 'ios' ? 70: 60;
var cellH = 75;
var vMargin = (width - cellW * cols) / (cols + 1);

class TopListView extends Component {
     static props= {
        dataArr:[]
     }
      constructor(props) {
        super(props);
          var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!==r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)

        };
      }
    render() {
        return (
           <ListView
               dataSource={this.state.dataSource}
               renderRow={this.renderRow}
               contentContainerStyle={styles.contentView}
               scrollEnabled={false}
           >

           </ListView>
        );
    }

    renderRow(rowData){
        return(
            <TouchableOpacity style={styles.cellStyle} onPress={()=>{AlertIOS.alert('click')}}>
            <View style={styles.cellStyle}>
                <Image source={{uri:rowData.image}} style={styles.image}/>
                <Text>{rowData.title}</Text>
            </View>
                </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    image:{
        width:50,
        height:50,
    },
    contentView:{
        // 设置主轴的方向
        flexDirection:'row',
        // 多个cell在同一行显示
        flexWrap:'wrap',
        // 宽度
        width:width,
    },
    cellStyle:{
        // backgroundColor:'red',
        width:cellW,
        height:cellH,
        // 水平居中和垂直居中
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:vMargin
    },

    titleStyle:{
        fontSize:Platform.OS == 'ios' ? 14 : 12,
        color:'gray'
    }
});

module.exports = TopListView
