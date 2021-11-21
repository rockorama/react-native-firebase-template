import { useNavigation } from '@react-navigation/core'
import { StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { IconButton, Title } from 'react-native-paper'

import Box from '../../components/layout/Box'
import {
  AppNavigationProp,
  AppScreenProps,
} from '../../navigation/stacks/App/types'

type Props = AppScreenProps<'Home'>

export default function HomeScreen(props: Props) {
  return (
    <Box center flex1>
      <Title>Welcome to your app!</Title>
    </Box>
  )
}

function HeaderComponent() {
  const navigation = useNavigation<AppNavigationProp<'Home'>>()
  return (
    <IconButton onPress={() => navigation.navigate('Settings')} icon="tune" />
  )
}

export const ScreenOptions: StackNavigationOptions = {
  headerRight: HeaderComponent,
}

export type RouteParams = { name: string }

export const isInitialRoute = true
