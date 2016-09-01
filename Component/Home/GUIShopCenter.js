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
    Image,
    TouchableOpacity,
} from 'react-native';

var ShopCenterData = require('../../LocalData/XMG_Home_D5.json')

var Cell = require('./GUIShopCenterCell')
class GUIShopCenter extends Component {
    static props={
        popToHomeView:null
    }
    render() {
        return (
            <View style={styles.container}>
               <Cell
                    leftIcon="gw"
                    leftTitle="购物中心"
                    rightTitle={ShopCenterData.tips}
               />
                <ScrollView style={styles.scrollView}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    }

    renderAllItem(){
        var items = []
        var datas = ShopCenterData.data
        for (var i=0;i<datas.length;i++){
            var data = datas[i]
            items.push(
                <ShopCenterItem
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                    detailURL={data.detailurl}
                    popTopShopCenter={(url)=>{this.popToHome(url)}}
                    key={i}
                 />
            );
        }
        return items;
    }

    popToHome(url){
        if (this.props.popToHomeView==null) return;
        this.props.popToHomeView(url);
    }
}



const styles = StyleSheet.create({
    container: {
        marginTop:15,
    },
    scrollView:{
        backgroundColor:'white',
        padding:10,
    }
});

class ShopCenterItem extends  Component{
    static props = {
        shopImage:'',
        shopSale:'',
        shopName:'',
        detailURL:'',
        popTopShopCenter:null
    }
    render(){
        return(
            <TouchableOpacity onPress={()=>{this.clickItem(this.props.detailURL)}}>
                <View style={{
                    margin:10,
                }}>
                    <Image source={{uri:this.props.shopImage}} style={{
                        width:120,
                        height:100,
                        borderRadius:8,
                    }}/>
                    <Text style={{
                        position:'absolute',
                        bottom:30,
                        left:0,
                        backgroundColor:'orange',
                        color:'white',
                        padding:3,
                    }}>{this.props.shopSale}</Text>
                    <Text>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    clickItem(url){
        if(this.props.detailURL==null) return;
        this.props.popTopShopCenter(url)
    }
}



module.exports = GUIShopCenter
