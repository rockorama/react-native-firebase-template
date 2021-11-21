import React from 'react'
import { Title } from 'react-native-paper'

import Box from '../../components/layout/Box'
import { AppScreenProps } from '../../navigation/stacks/App/types'

type Props = AppScreenProps<'Profile'>

export default function ProfileScreen(props: Props) {
  return (
    <Box center flex1>
      <Title>Profile</Title>
    </Box>
  )
}
