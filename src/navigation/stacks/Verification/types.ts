import { NavigationProp, RouteProp } from '@react-navigation/core'

export type VerificationStackParamList = {
  EmailVerification: undefined
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
