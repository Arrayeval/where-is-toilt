import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Utils from "../../utils/utils"
export default class topic  extends React.Component {
    render () {
        return (
            <View style={styles.container}> 
                <View>
                    <Text style={styles.text_r}>推荐主题</Text>
                </View>
                <View style={styles.img_view}>
                    <View style={styles.img_item}>
                        <Image style={styles.img} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540120448933&di=16e4553e4d3b32a71eb8337b280e5af2&imgtype=0&src=http%3A%2F%2Fwww.pptbz.com%2Fpptpic%2FUploadFiles_6909%2F201211%2F2012111719294197.jpg'}}/>
                    </View>
                    <View>
                        <Image style={styles.img} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540120448933&di=58831416043a91b7c34e21f371e0215a&imgtype=0&src=http%3A%2F%2Fpic14.nipic.com%2F20110605%2F1369025_165540642000_2.jpg'}}/>
                    </View>
                </View>
                <View>
                    <Text style={styles.text_s}>查看更多同期主题 &gt;</Text>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginRight:10,
    },
    img:{
        width:(Utils.size.width - 30) / 2,
        height:80,
        borderRadius:5,
    },
    img_item:{
        flex:1
    },
    img_view:{
        flexDirection:'row',
        resizeMode: 'cover'
    },
    text_r:{
        color:"#5E5E5E",
        marginBottom:5,
        fontSize:17
    },
    text_s:{ 
        color:"#ccc",
        marginTop:10,
        marginBottom:10,
        fontSize:13,
        fontWeight:'300' 
    }
})