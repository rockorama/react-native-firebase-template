import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { AppStackParamList } from '../../navigationTypes'
import routes from './routes'

const Stack = createStackNavigator<AppStackParamList>()

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {routes.map((route) => (
        // @ts-ignore
        <Stack.Screen key={route.name} {...route} />
      ))}
    </Stack.Navigator>
  )
}
