import ForgotPasswordScreen, {
  ScreenOptions as ForgotPasswordOptions,
} from '../../../screens/Auth/ForgotPassword'
import LoginScreen from '../../../screens/Auth/Login'
import SignUpScreen, {
  ScreenOptions as SignUpOptions,
} from '../../../screens/Auth/SignUp'
import WelcomeScreen, {
  ScreenOptions as WelcomeOptions,
} from '../../../screens/Auth/Welcome'
export default [
  {
    name: 'ForgotPassword' as 'ForgotPassword',
    component: ForgotPasswordScreen,
    options: ForgotPasswordOptions,
  },
  {
    name: 'Login' as 'Login',
    component: LoginScreen,
  },
  {
    name: 'SignUp' as 'SignUp',
    component: SignUpScreen,
    options: SignUpOptions,
  },
  {
    name: 'Welcome' as 'Welcome',
    component: WelcomeScreen,
    options: WelcomeOptions,
  },
]
