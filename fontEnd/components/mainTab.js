import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import mainTabSubRoute from '../routeConfig/mainTab'

const SubTab = createBottomTabNavigator(mainTabSubRoute.route, {
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
})
// export default class mainTab  extends React.Component {
//     render () {
//         return (
//           <SubTab/>
//         )
//     }
// }
export default SubTab