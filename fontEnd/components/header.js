import React from "react"
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Header extends React.Component{
    constructor (props) {
        super(props)
    }
   
    _goBack = () => {
        this.props.navigation.goBack()
    }
    render () {
        const navigation = this.props.navigation
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.header_nav} onPress={this._goBack}>
                    <Ionicons name="chevron-left" size={40} color="rgba(32,86,86,0.9)" />
                    {/* <Text style={{height:40}}>返回</Text> */}
                </TouchableOpacity>    
                <View style={styles.title_wrapper}>
                    <Text style={styles.title}>{navigation.getParam("title")}</Text>
                </View>
            
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height:40,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },
    header_nav:{
      position:'absolute',
      left:0
    },
    title_wrapper:{
        justifyContent:"center",
        alignItems:'center',
        height: 40,
    },
    title:{
        alignItems:'center',
        fontSize:18,
    }
})