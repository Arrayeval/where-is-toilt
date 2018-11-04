import React from 'react';
import { Text, View,Image,ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Utils from "../utils/utils"
export default class setting  extends React.Component {
    _goToItems = (routePath) => {
        this.props.navigation.navigate(routePath)
    }
    render () {
        return (
            <ScrollView>
                <View> 
                    <View style={styles.img_view}>
                        <Image  style={styles.icon} source={require('../images/setting.jpg')}  resizeMode = 'contain'/>
                    </View>
                    <TouchableOpacity style={styles.text_view} onPress={this._goToItems.bind(this, "Fun")}>
                        <Text style={styles.text}>功能介绍</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.text_view}  onPress={this._goToItems.bind(this, "Help")}>
                        <Text style={styles.text}>帮助中心</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.text_view}  onPress={this._goToItems.bind(this, "Detail")}> 
                        <Text style={styles.text}>服务条款</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.text_view}  onPress={this._goToItems.bind(this, "About")}>
                        <Text style={styles.text}>关于</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    img_view:{
        alignItems:"center",
        marginTop:30,
        marginBottom:30
    },
    icon:{
        width:88,
        height:100,
        borderRadius:5
    },
    text_view:{
        borderTopWidth: Utils.pixel,
        borderTopColor: "#ccc",
        borderBottomWidth:Utils.pixel,
        borderBottomColor: "#ccc",
        height:40,
        paddingLeft:10,
        justifyContent:'center'
    },
    text:{
        fontSize:16,
        color:"#868887",
        fontWeight:'400'
    }
})