import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Utils from "../../utils/utils"
export default class recommend  extends React.Component {
    render () {
        return (
            <View style={styles.container}>  
                <View><Text style={styles.text_r}>热门推荐</Text></View>
                <View style={styles.img_view}>
                    <View style={[styles.img_item]}>
                        <Image style={[styles.img, styles.shadow]} 
                            resizeMode={"cover"}
                            source={{uri: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4115825325,3478781251&fm=26&gp=0.jpg" }} /> 
                        <Text  style={styles.text_s} numberOfLines={2}>标题标题标题标题标题标题标题标题标题标题标题标题</Text>                    
                    </View>
                    <View  style={[styles.img_item]}>
                        <Image style={[styles.img, styles.shadow]} 
                            resizeMode={"cover"}
                            source={{uri:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1654954329,1157106473&fm=26&gp=0.jpg"}} />
                        <Text  style={styles.text_s} numberOfLines={2}>标题</Text>   
                    </View>
                    <View style={[styles.img_item]}>
                        <Image style={[styles.img, styles.shadow]} 
                            resizeMode={"cover"}
                            source={{uri:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2086972466,4153089489&fm=26&gp=0.jpg"}} />
                        <Text  style={styles.text_s} numberOfLines={2}>标题</Text>   
                    </View>
                    <View  style={[styles.img_item]}>
                        <Image style={[styles.img, styles.shadow]} 
                            resizeMode={"cover"}
                            source={{uri:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1073392760,440995056&fm=26&gp=0.jpg"}} />
                        <Text  style={styles.text_s} numberOfLines={2}>标题</Text>   
                    </View>
                </View>
                <View style={styles.img_view}>
                    <View style={[styles.img_item]}>
                        <Image style={[styles.img, styles.shadow]} source={{uri: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4115825325,3478781251&fm=26&gp=0.jpg" }} /> 
                        <Text  style={styles.text_s} numberOfLines={2}>标题</Text>                    
                    </View>
                    <View  style={[styles.img_item]}>
                        <Image style={[styles.img, styles.shadow]} source={{uri:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1654954329,1157106473&fm=26&gp=0.jpg"}} />
                        <Text  style={styles.text_s} numberOfLines={2}>标题</Text>   
                    </View>
                    <View style={[styles.img_item]}>
                        <Image style={[styles.img, styles.shadow]} source={{uri:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2086972466,4153089489&fm=26&gp=0.jpg"}} />
                        <Text  style={styles.text_s} numberOfLines={2}>标题</Text>   
                    </View>
                    <View  style={[styles.img_item]}>
                        <Image style={[styles.img, styles.shadow]} source={{uri:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1073392760,440995056&fm=26&gp=0.jpg"}} />
                        <Text  style={styles.text_s} numberOfLines={2}>标题</Text>   
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        marginLeft:10,
        marginRight:10,
    },
    img_view:{
        flexDirection:'row'
    },
    img_item:{
        flex:1,
        height:160,
        // resizeMode: 'cover'
    },
    shadow:{
        shadowOpacity: 1,
        shadowColor: "#ccc",
        shadowOffset:{width: Utils.pixel *1 , height: Utils.pixel}
    },
    img:{
        height:120,
        width: (Utils.size.width - 50) / 4,
      
    },
    text_r:{
        color:"#5E5E5E",
        marginBottom:5,
        fontSize:17
    },
    text_s:{ 
        color:"rgb(78,78,78)",
        // marginTop:10,
        marginBottom:10,
        fontSize:13,
        fontWeight:'300' 
    }
})