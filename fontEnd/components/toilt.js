import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { MapView } from 'react-native-amap3d'
import SelfWebView from '../baseComponent/SelfWebView'
export default class toilt  extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                {/* <Text>this is toilt page </Text> */}
                <SelfWebView url={require('../html/nearby.html')}></SelfWebView>
                <MapView
                coordinate={{
                    latitude: 39.91095,
                    longitude: 116.37296,
                }}
                />
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex:1
    }
})