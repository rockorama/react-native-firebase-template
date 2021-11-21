import { NavigationProp, RouteProp } from '@react-navigation/core'

export type AuthStackParamList = {
  ForgotPassword: undefined
  Login: undefined
  SignUp: undefined
  Welcome: undefined
}
export type AuthRoute = keyof AuthStackParamList
export type AuthNavigationProp<T extends AuthRoute> = NavigationProp<
  AuthStackParamList,
  T
>
export type AuthRouteProp<T extends AuthRoute> = RouteProp<
  AuthStackParamList,
  T
>
export type AuthScreenProps<T extends AuthRoute> = {
  navigation: AuthNavigationProp<T>
  route: AuthRouteProp<T>
}
