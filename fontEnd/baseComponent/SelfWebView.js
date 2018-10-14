import React, {Component} from 'react'
import {StyleSheet, Text, View, WebView} from 'react-native'
export default class SelfWebView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
            isError: false
        };
    }
    _showError = () => {
        this.setState({isError: true})
    }
    render () {
        return (
            <View style={styles.container} > 
                {
                    this.state.isError ?   
                    <View style={styles.errInfo}><Text style={styles.text}>网络错误，请检查你的网络</Text></View> 
                    :
                    <WebView source={{uri: this.state.url}} 
                        onError = {this._showError}
                        startInLoadingState = {true}
                    />
                }
              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    errInfo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:16,
        fontWeight:'300'
    }
})
