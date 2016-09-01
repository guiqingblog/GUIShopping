import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView,
    ListView,
    AlertIOS,
} from 'react-native';
var TopView = require('./TopView')
var MiddleView = require('./HomeMiddleView')
var HomeDetail = require('./GUIHomeDetail')
var HomeMiddleBottomView = require('./HomeMiddleBottomView')
var ShoppingCenter = require('./GUIShopCenter')
var ShopCenterDetail = require('./GUIShopCenterDetailVew')
var MayYouLike = require('./MayYouLike')

var Dimensions = require('Dimensions')
var {width,height} = Dimensions.get('window')

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*首页的导航条*/}
                {this.renderNavibar()}
                {/*首页的主要内容*/}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {/*顶部collectionView*/}
                    <TopView/>
                    <MiddleView/>
                    <HomeMiddleBottomView
                        popTopHome={(data)=>{this.pushToDetail(data)}}
                    />
                    {/* */}
                    <ShoppingCenter popToHomeView={(data)=>{this.pushToShopCenterDetail(data)}}/>
                    {/* <MayYouLike/>*/}

                </ScrollView>
            </View>
        );
    }

    renderNavibar() {
        return (
            <View style={styles.navBar}>
                <TouchableOpacity>
                <Text style={styles.navLeftText}>北京</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder="输入商家,品类,商圈"
                    style={styles.navInput}
                />
                <View style={styles.navRightView}>
                    <TouchableOpacity>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    pushToDetail(data){

        this.props.navigator.push({
            component: HomeDetail,//要跳转的版块
            title:'详情页',//要传递的参数
        })
    }
    pushToShopCenterDetail(data){
        this.props.navigator.push({
            component:ShopCenterDetail,
            passProps:{'url':this.processURL(data)}
        })
    }
    processURL(url){
        return url.replace('imeituan://www.meituan.com/web/?url=','')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    navBar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        height:Platform.OS == 'ios'? 64:44,
        backgroundColor:'rgba(255,96,0,1.0)'
    },
    navLeftText:{
        color:'white',
    },
    navInput:{
        width:width * 0.7,
        height:Platform.OS=='ios'? 30:40,
        backgroundColor:'white',
        borderRadius:15,
        paddingLeft:10,
        marginTop:Platform.OS=='ios'? 18:0,

    },
    navRightIcon:{
        width:Platform.OS=='ios'?28:24,
        height:Platform.OS=='ios'?28:24,
    },
    navRightView:{
        flexDirection:'row',
    },

});

module.exports = Home