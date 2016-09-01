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
    ScrollView,
    ListView,
    AlertIOS,
} from 'react-native';
var TopListView = require('./TopListView')
var TopMenuData = require('../../LocalData/TopMenu.json')

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window')
class TopView extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            activePage: 0,
        };
      }

    render() {
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        onMomentumScrollEnd = {(e)=>{ this.onScrollAnimationEnd(e) }}
                        // onMomentumScrollEnd = {this.onScrollAnimationEnds}
                        // onMomentumScrollEnd = {this.onScrollAnimationEnd}
                    >
                        {this.renderScrollViewItem()}
                    </ScrollView>
                {/*页码部分*/}
                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    backgroundColor:'rgba(255,255,255,1)',
                    }}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    }
    //overwirte
    onScrollAnimationEnd(e){
        // 求出当前的页码
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
        // 更新状态机
        this.setState({ activePage: currentPage })

    }

    renderScrollViewItem(){
        var itemArr = [];
        var dataArr = TopMenuData.data
        for(var i=0;i<dataArr.length;i++){

           itemArr.push(
             <TopListView key={i} style={styles.topListView}
                dataArr={dataArr[i]}
             />
           )
        }
        return itemArr;
    }

    renderIndicator(){
        var indicatorArr = [],style
        for (var i = 0;i < 2;i++){
            style = (i==this.state.activePage) ? {color:'orange'}:{color:'gray'}
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
            )
        }
        return indicatorArr
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    topListView:{
        
    },
});

module.exports = TopView
