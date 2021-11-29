import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useColorScheme } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

import Background from '../components/layout/Background'
import themes from '../config/theme'

export default function LayoutProvider(props: { children: Children }) {
  const scheme = useColorScheme()

  return (
    <PaperProvider theme={themes[scheme || 'light']}>
      <StatusBar style="auto" />
      <Background>{props.children}</Background>
    </PaperProvider>
  )
}
