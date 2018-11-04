
// import Icon  from 'react-native-vector-icons/FontAwesome';
// import IconAD  from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from 'react-navigation';
import RootStack from './routeConfig'
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


export default createStackNavigator(RootStack.rootScreen, RootStack.rootConfig);