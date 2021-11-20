import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import NavigationContainer from './navigation/NavigationContainer'
import AuthProvider from './utils/contexts/Auth'
import Layout from './utils/contexts/Layout'

export default function Root() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Layout>
          <NavigationContainer />
        </Layout>
      </AuthProvider>
    </SafeAreaProvider>
  )
}
