/**
 * Created by kenny on 8/9/16.
 */
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
    Switch,
} from 'react-native';

class MineCell extends Component {
    static defaultProps = {
        leftIconName:'',
        leftTitle:'',//标题
        rightTitle:'',
        hasRightNewIcon:false,//是否显示右侧new图标

    }
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.leftView}>
                        <Image source={{uri:this.props.leftIconName}} style={styles.leftImage}/>
                        <Text style={styles.leftText}>{this.props.leftTitle}</Text>
                    </View>
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    }
    renderRightView(){

        if (this.props.rightTitle.length>0){
            return(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{color:'gray',fontSize:14,marginRight:10}}>{this.props.rightTitle}</Text>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightArrow}/>
                </View>
            );
        }
        if(this.props.hasRightNewIcon){
          return(
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={{uri:'me_new'}} style={styles.rightIcon}/>
                <Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightArrow}/>
            </View>
          );
        }
        return(
            <Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightArrow}/>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height:44,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    leftView:{
        flexDirection:'row',
        alignItems:'center',
    },
    leftImage:{
        marginLeft:10,
        width:30,
        height:30,
        borderRadius:15,
    },
    leftText:{
        marginLeft:10,
    },
    rightArrow:{
        width:10,
        height:20,
        marginRight:10,
    },
    rightIcon:{
        width:24,
        height:13,
        marginRight:10,
    },
});

module.exports = MineCell
