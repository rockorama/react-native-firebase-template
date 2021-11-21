import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import ForgotPasswordScreen from '../screens/Auth/ForgotPassword'
import LoginScreen from '../screens/Auth/Login'
import SignUpScreen from '../screens/Auth/SignUp'
import WelcomeScreen from '../screens/Auth/Welcome'
import { AuthStackParamList } from './navigationTypes'

const Stack = createStackNavigator<AuthStackParamList>()

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerTitle: 'Sign Up' }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerTitle: 'Forgot Password' }}
      />
    </Stack.Navigator>
  )
}
