import { NavigationProp, RouteProp } from '@react-navigation/core'

export type AppStackParamList = {
  //   App Routes
  Home: undefined
}

export type AuthStackParamList = {
  //   Auth Routes
  Welcome: undefined
  SignUp: undefined
  Login: undefined
}

export type AppRoute = keyof AppStackParamList

export type AppNavigationProp<T extends AppRoute> = NavigationProp<
  AppStackParamList,
  T
>
export type AppRouteProp<T extends AppRoute> = RouteProp<AppStackParamList, T>

export type AppScreenProps<T extends AppRoute> = {
  navigation: AppNavigationProp<T>
  route: AppRouteProp<T>
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
