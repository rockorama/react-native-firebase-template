import { useNavigation } from '@react-navigation/core'
import { StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Headline, IconButton, Title } from 'react-native-paper'

import UserAvatar from '../../components/core/UserAvatar'
import Box from '../../components/layout/Box'
import {
  AppNavigationProp,
  AppScreenProps,
} from '../../navigation/stacks/App/types'
import { useAuth } from '../../utils/contexts/Auth'

type Props = AppScreenProps<'Home'>

export default function HomeScreen(props: Props) {
  const { user } = useAuth()
  return (
    <Box center flex1>
      <Headline>Hello {user?.displayName},</Headline>
      <Title>Welcome to your app!</Title>
    </Box>
  )
}

function ProfilePic() {
  const navigation = useNavigation<AppNavigationProp<'Home'>>()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Box paddingX={1}>
        <UserAvatar />
      </Box>
    </TouchableOpacity>
  )
}

function SettingsButton() {
  const navigation = useNavigation<AppNavigationProp<'Home'>>()
  return (
    <IconButton onPress={() => navigation.navigate('Settings')} icon="tune" />
  )
}

export const ScreenOptions: StackNavigationOptions = {
  headerLeft: ProfilePic,
  headerRight: SettingsButton,
}

export type RouteParams = { name: string }

export const isInitialRoute = true
