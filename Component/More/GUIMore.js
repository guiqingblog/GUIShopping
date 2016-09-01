import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Navigator,
    Platform,
    ScrollView,
} from 'react-native';

var CommonCell = require('./GUICommonCell')

class GUIMore extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollView}>
                    {/* 第一组 */}
                    <View style={styles.groupView}>
                        <CommonCell title='扫一扫'/>
                    </View>
                    {/* 第二组 */}
                    <View style={styles.groupView}>
                        <CommonCell title='省流量模式' isSwitch={true}/>
                        <CommonCell title='消息提醒'/>
                        <CommonCell title='邀请好友'/>
                        <CommonCell title='清空缓存' rightTitle="1.99M"/>
                    </View>
                    {/* 第三组 */}
                    <View style={styles.groupView}>
                        <CommonCell title='问卷调查'/>
                        <CommonCell title='支付帮助'/>
                        <CommonCell title='网络诊断'/>
                        <CommonCell title='关于'/>
                        <CommonCell title='我要应聘'/>
                    </View>
                    <View style={styles.groupView}>
                        <CommonCell title='精品应用'/>
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderNavBar(){
        return(
            <View style={styles.navBar}>
                <View></View>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>更多</Text>
                <TouchableOpacity style={styles.navRightView}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.navRightIcon}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    navBar:{
        flexDirection:'row',
        alignItems:'center',//测轴居中
        justifyContent:'center',
        height:Platform.OS == 'ios'? 64:44,
        backgroundColor:'rgba(255,96,0,1.0)'
    },
    navRightIcon:{
        width:Platform.OS=='ios'?28:24,
        height:Platform.OS=='ios'?28:24,
    },
    navRightView:{
        position:'absolute',
        right:10,
        bottom:15,
    },
    scrollView:{

    },
    groupView:{
        marginTop:20,
    }
});

module.exports = GUIMore