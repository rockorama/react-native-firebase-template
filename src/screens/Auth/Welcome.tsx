import React from 'react'
import { Button, Title } from 'react-native-paper'

import Box from '../../components/layout/Box'
import ScrollView from '../../components/layout/ScrollView'
import { AuthScreenProps } from '../../navigation/stacks/Auth/types'

type Props = AuthScreenProps<'Welcome'>

export default function WelcomeScreen(props: Props) {
  return (
    <ScrollView
      flex1
      renderBottom={() => {
        return (
          <>
            <Box padding={1}>
              <Button
                mode="contained"
                color="white"
                onPress={() => props.navigation.navigate('Login')}>
                Login
              </Button>
            </Box>
            <Box paddingX={1} paddingBottom={2}>
              <Button
                mode="contained"
                onPress={() => props.navigation.navigate('SignUp')}>
                Sign up
              </Button>
            </Box>
          </>
        )
      }}>
      <Box flex1 center padding={5}>
        <Title>Welcome</Title>
      </Box>
    </ScrollView>
  )
}

export const ScreenOptions = { header: () => null }

export const isInitialRoute = true
