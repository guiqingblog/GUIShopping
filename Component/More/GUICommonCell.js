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

class CommonCell extends Component {
    static defaultProps = {
        title:'',//标题
        isSwitch:false,//是否是开关样式
        rightTitle:'',

    }
      constructor(props) {
        super(props);
        this.state = {
            isSwitchOn:false,
        };
      }
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.title}</Text>
                    {this.renderRightView()}

                </View>
            </TouchableOpacity>
        );
    }

    renderRightView(){
        if (this.props.isSwitch){
            return (
                <Switch
                value={this.state.isSwitchOn==true}
                onValueChange= {()=>{this.setState({isSwitchOn:!this.state.isSwitchOn})}}
                style={{marginRight:8}}/>
            );
        }

        if (this.props.rightTitle.length>0){
            return(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{color:'gray',fontSize:14,marginRight:10}}>{this.props.rightTitle}</Text>
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
    text:{
        marginLeft:20,
    },
    rightArrow:{
        width:10,
        height:20,
        marginRight:10,
    }
});

module.exports = CommonCell
