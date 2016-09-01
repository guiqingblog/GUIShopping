import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';

var MineCell = require('./MineCell')
var MiddleView = require('./MiddleView')
var HeaderView = require('./HeaderView')

class GUIMine extends Component {
    render() {
        return (
          <ScrollView style={styles.scrollView}
                      contentInset={{top:-200}}
                      contentOffset={{y:200}}
                      showsVerticalScrollIndicator={false}
          >
              <HeaderView/>
              <View style={styles.middleView}>
                  <MineCell
                      leftIconName="collect"
                      leftTitle="我的订单"
                      rightTitle="查看全部订单"
                  />
                  <MiddleView/>
                  </View>
              <View style={styles.groupView}>
                  <MineCell
                      leftIconName="draft"
                      leftTitle="钱包"
                      rightTitle="账户余额: $100"
                  />
                  <MineCell
                      leftIconName="like"
                      leftTitle="抵用券"
                      rightTitle="10张"
                  />
              </View>
              <View style={styles.groupView}>
                  <MineCell
                      leftIconName="card"
                      leftTitle="积分商城"
                  />
              </View>
              <View style={styles.groupView}>
                  <MineCell
                      leftIconName="new_friend"
                      leftTitle="今日推荐"
                      hasRightNewIcon = {true}
                  />
              </View>
              <View style={styles.groupView}>
                  <MineCell
                      leftIconName="pay"
                      leftTitle="我要合作"
                      rightTitle="轻松开店,招财进宝"
                  />
              </View>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView:{
        backgroundColor:'#e8e8e8'
    },
    groupView:{
        marginTop:20,
    },
    middleView:{

    },

});

module.exports = GUIMine