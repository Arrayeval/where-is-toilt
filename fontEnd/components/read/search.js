import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Utils from "../../utils/utils"
export default class search  extends React.Component {
    render () {
        return (
            <View style = {styles.container}> 
                {/* <Text>this is search page </Text> */}
                <TextInput style={styles.search_input} placeholder="搜索" placeholderTextColor="#5E6877"/>
            </View>
        )
    }

}

var styles = StyleSheet.create({
    container:{
        // flex:1,
        paddingLeft: 10,
        paddingRight:10,
    },
    search_input: {
        height:50,
        // width:200
        borderWidth:1,
        borderWidth: Utils.pixel,
        borderColor:'#EEEEEE',
        paddingLeft:5,
        fontSize:16
    }
})