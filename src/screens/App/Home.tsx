import { useNavigation } from '@react-navigation/core'
import { StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconButton } from 'react-native-paper'

import UserAvatar from '../../components/core/UserAvatar'
import Box from '../../components/layout/Box'
import Headline from '../../components/typography/Headline'
import Title from '../../components/typography/Title'
import localize from '../../localization/localize'
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
      <Headline i18nKey={['homeTitle', { name: user?.displayName || '' }]} />
      <Title i18nKey="homeSubtitle" />
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
  headerTitle: localize('homeHeader'),
}

export type RouteParams = { name: string }

export const isInitialRoute = true
