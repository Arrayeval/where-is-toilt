import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon  from 'react-native-vector-icons/FontAwesome';
// import IconAD  from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from 'react-navigation';
import reading from './components/reading'
import toilt from './components/toilt'
import setting from './components/setting'
import climate from './components/climate'
/*
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}
*/
/*
class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Ionicons name= 'md-home' size={20} color= "#666" />
        <IconAD name= 'stepforward' size={20} color= "#666" />
        <Icon.Button name="facebook" backgroundColor="#3b5998">
          <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
        </Icon.Button>
      </View>
    );
  }
}
*/


export default createBottomTabNavigator(
  {
    Reading: reading,
    Toilt: toilt,
    Setting: setting,
    Climate: climate,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Reading') {
          iconName = `ios-mail-unread${focused ? '' : ''}`;
        } else if (routeName === 'Setting') {
          iconName = `ios-settings${focused ? '' : ''}`;
        } else if (routeName === 'Toilt') {
          iconName = `md-woman${focused ? '' : ''}`;
        }  else if (routeName === 'Climate') {
          iconName = `ios-cloudy-night${focused ? '' : ''}`;
        } 
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#4BC1D2',
      inactiveTintColor: '#000',
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      pressColor: '#788493',
      pressOpacity: 0.8,
      style: {
          backgroundColor: '#fff',
          paddingBottom: 0,
          borderTopWidth: 0.5,
          borderTopColor: '#ccc',
      },
      labelStyle: {
          fontSize: 12,
          margin: 1
      },
      indicatorStyle: {height: 0},
    },
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    lazy: true,
    backBehavior: 'none',
  }
);