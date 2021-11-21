import React from 'react'
import { Title } from 'react-native-paper'

import Box from '../../components/layout/Box'
import { AppScreenProps } from '../../navigation/stacks/App/types'

type Props = AppScreenProps<'Settings'>

export default function SettingsScreen(props: Props) {
  return (
    <Box center flex1>
      <Title>Settings!</Title>
    </Box>
  )
}
