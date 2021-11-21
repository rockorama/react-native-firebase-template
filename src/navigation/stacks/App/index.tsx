import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import routes from './routes'
import { AppStackParamList } from './types'

const Stack = createStackNavigator<AppStackParamList>()

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {routes.map((route) => (
        <Stack.Screen key={route.name} {...route} />
      ))}
    </Stack.Navigator>
  )
}
