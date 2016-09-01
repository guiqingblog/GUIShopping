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
    Platform, //判断当前运行的系统
    Navigator,
} from 'react-native';
{/* */}
import TabNavigator from 'react-native-tab-navigator';
var Home = require('../Home/GUIHome')
var Shop  = require('../Shop/GUIShop')
var Mine = require('../Mine/GUIMine')
var More = require('../More/GUIMore')

class GUIMain extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:'home'
        };
      }
    render() {
        return (
            <TabNavigator>
                {this.renderTabbarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
                {this.renderTabbarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop)}
                {this.renderTabbarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','商家',Mine)}
                {this.renderTabbarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More,'10')}
            </TabNavigator>

        );
    }


    renderTabbarItem(itemTitle,icon,selectedIcon,selectedTag,componentName,component,badgeText){
        return (
            <TabNavigator.Item
                title={itemTitle}//传递变量一定要加{}
                renderIcon={() =><Image source={{uri:icon}} style={styles.tabbarIcon}/>}
                renderSelectedIcon={() =><Image source={{uri:selectedIcon}} style={styles.tabbarIcon}/>} selected={this.state.selectedTab === selectedTag}
                selectedTitleStyle={styles.selectedTitle}
                badgeText={badgeText}
                onPress={() => this.setState({ selectedTab: selectedTag })}>

                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{ return Navigator.SceneConfigs.PushFromRight; }}
                    renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>
                        }} />
            </TabNavigator.Item>
         );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabbarIcon:{
        width:Platform.OS==='ios'?30:25,
        height:Platform.OS==='ios'?30:25,
    },
    selectedTitle:{
        color:'orange',

    },
});

module.exports = GUIMain
