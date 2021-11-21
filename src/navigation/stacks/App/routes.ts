import HomeScreen, {
  ScreenOptions as HomeOptions,
} from '../../../screens/App/Home'
import SettingsScreen from '../../../screens/App/Settings'
export default [
  {
    name: 'Home' as 'Home',
    component: HomeScreen,
    options: HomeOptions,
  },
  {
    name: 'Settings' as 'Settings',
    component: SettingsScreen,
  },
]
