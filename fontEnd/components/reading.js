import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SelfWebView from '../baseComponent/SelfWebView'
import Utils from "../utils/utils"

import Category from './read/category'
import List from './read/list'
import Recommend from './read/recommend'
import Search from './read/search'
import Topic from './read/topic'

class Hr extends React.Component{
    render () {
        return (
            <View>
                <View style={styles.hr}></View>
            </View>
        )
    }
}
export default class reading  extends React.Component {
    constructor (props) {
        super(props);
        this.state ={
            isShow: false
        }
    }
 
    componentDidMount = () => {
        Utils.get("http://192.168.1.102:3000/dealdata?type=%27it%27", (data) => {
            alert(data)
        }, (err) => {
            alert(err)
        } )
        this.setState({
            isShow:true
        }) 
    }

    render () {
        return (
            <View style={styles.container}> 
               <Search/>
               <Hr style={styles.Hr}/>
               {
                    this.state.isShow?
                    <ScrollView style={styles.container}>
                        <Topic  navigation={this.props.navigation} />
                        <Recommend  navigation = {this.props.navigation} />
                        <Category  navigation = {this.props.navigation}  />
                        <Recommend  navigation = {this.props.navigation} />
                    </ScrollView> : null
                }
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
    },
    hr:{
        borderColor: '#F0F0F0',
        borderWidth: Utils.pixel,
        marginTop:10,
    }
})