import React from 'react';
import { Text, View,StyleSheet, FlatList } from 'react-native';

import Header from "../../components/header"
export default class lsit  extends React.Component {
    // 渲染单个组件
    _renderItem = ({item}) => (
        <MyListItem
          id={item.id}
          onPressItem={this._onPressItem}
          selected={!!this.state.selected.get(item.id)}
          title={item.title}
        />
    );
    render () {
        return (
            <View style={styles.container}> 
                <Header navigation={this.props.navigation}  />
                <View style={styles.content_wrapper}>
                    <Text >{this.props.navigation.getParam("title")}</Text>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={this.props.data}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
        )
    }
}

class MyListItem extends  React.Component {
    render () {
        return(
            <View style={styles.itemContainer}>
                <View style={styles.itemWrapper}>
                    <Text>01</Text>
                    <Text>这是文章标题的内容</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    content_wrapper:{
        flex:1,
        paddingHorizontal:10 
    },
    listContainer:{
        paddingHorizontal:10
    }
})