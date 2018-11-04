import reading from '../components/reading'
import toilt from '../components/toilt'
import setting from '../components/setting'
import climate from '../components/climate'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default mainTab = {
  route: {
    Reading:{
      screen:  reading,
      // navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
    },
    Toilt: {
      screen: toilt,
      // navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
    },
    Setting: {
      screen: setting,
      // navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
    },
    Climate: {
      screen: climate,
      // navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
    }
  }
}
   
   
  
  