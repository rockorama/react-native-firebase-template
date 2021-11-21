import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { AuthStackParamList } from '../../navigationTypes'
import routes from './routes'

const Stack = createStackNavigator<AuthStackParamList>()

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      {routes.map((route) => (
        // @ts-ignore
        <Stack.Screen key={route.name} {...route} />
      ))}
    </Stack.Navigator>
  )
}
