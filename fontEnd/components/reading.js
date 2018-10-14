import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SelfWebView from '../baseComponent/SelfWebView'
export default class reading  extends React.Component {
    render () {
        return (
            <View style={styles.container}> 
                <SelfWebView url="https://www.baidu.com/"></SelfWebView>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1
    }
})