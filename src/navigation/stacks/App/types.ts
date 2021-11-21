import { NavigationProp, RouteProp } from '@react-navigation/core'

import { RouteParams as HomeParams } from '../../../screens/App/Home'

export type AppStackParamList = {
  Home: HomeParams
  Settings: undefined
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
