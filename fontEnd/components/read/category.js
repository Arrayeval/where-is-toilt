import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Utils from "../../utils/utils"
export default class category  extends React.Component {
    _goToList = (Routeflag, PressProps) => {
       this.props.navigation.navigate(Routeflag,{title: PressProps})
    }

    render () {
        return (
            <View style={styles.container}> 
                <Text style={styles.text_a}>分类 </Text>
                <View style={styles.row}>
                    <View style={styles.row_item}> 
                        <TouchableOpacity style={styles.item} onPress={this._goToList.bind(this, "List", "互联网")}>
                            <Text stlye={styles.title}>互联网</Text>
                        </TouchableOpacity>
                    </View>
                    <View  style={styles.row_item}>
                        <TouchableOpacity style={styles.item} onPress={this._goToList.bind(this, "List", "散文")}>
                            <Text  stlye={styles.title}>散文</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.row_item}> 
                        <TouchableOpacity style={styles.item} onPress={this._goToList.bind(this, "List", "笑话")}>
                            <Text  stlye={styles.title}>笑话</Text>
                        </TouchableOpacity>
                    </View>
                    <View  style={styles.row_item}>
                        <TouchableOpacity style={styles.item} onPress={this._goToList.bind(this, "List", "管理")}>
                            <Text  stlye={styles.title}>管理</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        marginHorizontal:10,
        marginBottom:10
    },
    text_a:{
        color: "#5E5E5E",
        marginBottom:8,
        fontSize:16
    },
    row:{
        flexDirection:'row',
        marginTop:5
    },
    item:{
        height:53,
        width: (Utils.size.width - 10) / 2,
        borderColor:'#f1f1f1',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    row_item:{
        flex:1
    },
    title:{
        color:"#707070",
        fontSize:17,
        fontWeight:"400"
    }

})