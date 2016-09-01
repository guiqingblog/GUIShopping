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
    TouchableOpacity,
    Image,
    Platform,
    WebView,
} from 'react-native';

var token = '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'

class GUIShopCenterDetailVew extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            detailURL:this.props.url+token
        };
      }
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri:this.state.detailURL}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}

                />
            </View>
        );
    }

    renderNavBar() {
        return (
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navLeftView} onPress={()=>{this.props.navigator.pop()}}>
                    <Image source={{uri:'icon_camera_back_normal'}} style={styles.navRightIcon}/>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>详情</Text>
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
    navLeftView:{
        position:'absolute',
        left:10,
        bottom:15,
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

module.exports = GUIShopCenterDetailVew
