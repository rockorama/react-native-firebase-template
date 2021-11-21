import { NavigationProp, RouteProp } from '@react-navigation/core'

export type AppStackParamList = {
  //   App Routes
  Home: undefined
}

export type VerificationStackParamList = {
  //   Verification Routes
  EmailVerification: undefined
}

export type AuthStackParamList = {
  //   Auth Routes
  Welcome: undefined
  SignUp: undefined
  Login: undefined
  ForgotPassword: undefined
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

export type VerificationRoute = keyof VerificationStackParamList
export type VerificationNavigationProp<T extends VerificationRoute> =
  NavigationProp<VerificationStackParamList, T>
export type VerificationRouteProp<T extends VerificationRoute> = RouteProp<
  VerificationStackParamList,
  T
>
export type VerificationScreenProps<T extends VerificationRoute> = {
  navigation: VerificationNavigationProp<T>
  route: VerificationRouteProp<T>
}
