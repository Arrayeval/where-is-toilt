
import MainTab from '../components/mainTab'
import List from '../components/read/list'

import About from '../components/setting/about'
import Detail from '../components/setting/detail'
import Help from '../components/setting/help' 
import Fun from '../components/setting/function' 
export default RootStack = {
  rootScreen:{
    MainTab: MainTab,
    List:List,
    About: About,
    Detail: Detail,
    Help: Help,
    Fun: Fun,
  },
  rootConfig:{
    mode: 'modal',
    headerMode: 'none',
  }
};