import React from 'react'
import { Button, Title } from 'react-native-paper'

import Box from '../../components/layout/Box'
import ScrollView from '../../components/layout/ScrollView'
import { AuthScreenProps } from '../../navigation/navigationTypes'

type Props = AuthScreenProps<'Welcome'>

export default function WelcomeScreen(props: Props) {
  return (
    <ScrollView
      flex1
      renderBottom={() => {
        return (
          <Box padding={1}>
            <Button onPress={() => props.navigation.navigate('Login')}>
              Login
            </Button>
            <Button onPress={() => props.navigation.navigate('SignUp')}>
              Sign up
            </Button>
          </Box>
        )
      }}>
      <Box flex1 center padding={5}>
        <Title>Welcome</Title>
      </Box>
    </ScrollView>
  )
}
