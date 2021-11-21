import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import routes from './routes'
import { VerificationStackParamList } from './types'

const Stack = createStackNavigator<VerificationStackParamList>()

export default function VerificationStack() {
  return (
    <Stack.Navigator>
      {routes.map((route) => (
        <Stack.Screen key={route.name} {...route} />
      ))}
    </Stack.Navigator>
  )
}
