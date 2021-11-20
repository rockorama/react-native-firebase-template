import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import HomeScreen from '../screens/App/Home'
import { AppStackParamList } from './navigationTypes'

const Stack = createStackNavigator<AppStackParamList>()

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
