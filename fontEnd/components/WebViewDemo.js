import React from 'react'
import { View, Text, Button, StyleSheet, WebView } from 'react-native'
import TWebView from './baseComponents/TWebView'
 export default class WebViewDemo  extends React.Component {
  bootstrapJS () {
    const data = { hello: 'world' }
    return `init(${JSON.stringify(data)})`
  }
  render () {
    return(
    <View style={styles.container}>
      <TWebView url= {require('../html/webViewDemo.html')}   injectedJavaScript={this.bootstrapJS.bind(this)}/>
    </View>
    )
  }
 }
 const styles = StyleSheet.create({
  container: {
      flex:1
  },
})