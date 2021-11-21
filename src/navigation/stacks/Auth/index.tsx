import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import routes from './routes'
import { AuthStackParamList } from './types'

const Stack = createStackNavigator<AuthStackParamList>()

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      {routes.map((route) => (
        <Stack.Screen key={route.name} {...route} />
      ))}
    </Stack.Navigator>
  )
}
