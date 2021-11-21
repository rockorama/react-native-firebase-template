import ChangePasswordScreen, {
  ScreenOptions as ChangePasswordOptions,
} from '../../../screens/App/ChangePassword'
import HomeScreen, {
  ScreenOptions as HomeOptions,
} from '../../../screens/App/Home'
import ProfileScreen, {
  ScreenOptions as ProfileOptions,
} from '../../../screens/App/Profile'
import SettingsScreen, {
  ScreenOptions as SettingsOptions,
} from '../../../screens/App/Settings'
export default [
  {
    name: 'ChangePassword' as 'ChangePassword',
    component: ChangePasswordScreen,
    options: ChangePasswordOptions,
  },
  {
    name: 'Home' as 'Home',
    component: HomeScreen,
    options: HomeOptions,
  },
  {
    name: 'Profile' as 'Profile',
    component: ProfileScreen,
    options: ProfileOptions,
  },
  {
    name: 'Settings' as 'Settings',
    component: SettingsScreen,
    options: SettingsOptions,
  },
]
