import { NavigationContainer as ReactNavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator, useTheme } from 'react-native-paper'

import { useAuth } from '../utils/contexts/Auth'
import AppStack from './stacks/App'
import AuthStack from './stacks/Auth'
import VerificationStack from './stacks/Verification'

export default function NavigationContainer() {
  const { user, ready } = useAuth()
  const theme = useTheme()

  if (!ready) {
    return <ActivityIndicator />
  }

  return (
    // @ts-ignore
    <ReactNavigationContainer theme={theme}>
      {user ? (
        !user.emailVerified ? (
          <VerificationStack />
        ) : (
          <AppStack />
        )
      ) : (
        <AuthStack />
      )}
    </ReactNavigationContainer>
  )
}
