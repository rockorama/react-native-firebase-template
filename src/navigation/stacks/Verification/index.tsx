import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { VerificationStackParamList } from '../../navigationTypes'
import routes from './routes'

const Stack = createStackNavigator<VerificationStackParamList>()

export default function VerificationStack() {
  return (
    <Stack.Navigator>
      {routes.map((route) => (
        // @ts-ignore
        <Stack.Screen key={route.name} {...route} />
      ))}
    </Stack.Navigator>
  )
}
