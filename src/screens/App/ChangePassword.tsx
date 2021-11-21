import React from 'react'
import { Title } from 'react-native-paper'

import Box from '../../components/layout/Box'
import { AppScreenProps } from '../../navigation/stacks/App/types'

type Props = AppScreenProps<'ChangePassword'>

export default function ChangePasswordScreen(props: Props) {
  return (
    <Box center flex1>
      <Title>ChangePassword</Title>
    </Box>
  )
}

export const ScreenOptions = { headerTitle: 'Change Password' }
