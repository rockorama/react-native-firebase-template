import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import EmailVerification from '../screens/Verification/EmailVerification'
import { VerificationStackParamList } from './navigationTypes'

const Stack = createStackNavigator<VerificationStackParamList>()

export default function VerificationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={{ headerTitle: 'Verify your email' }}
      />
    </Stack.Navigator>
  )
}
