import React from 'react'

import Button from '../../components/core/Button'
import Box from '../../components/layout/Box'
import ScrollView from '../../components/layout/ScrollView'
import Headline from '../../components/typography/Headline'
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
                i18nKey="welcomeLogin"
                mode="contained"
                color="white"
                onPress={() => props.navigation.navigate('Login')}
              />
            </Box>
            <Box paddingX={1} paddingBottom={2}>
              <Button
                i18nKey="welcomeSignUp"
                mode="contained"
                onPress={() => props.navigation.navigate('SignUp')}
              />
            </Box>
          </>
        )
      }}>
      <Box flex1 center padding={5}>
        <Headline i18nKey="welcomeTitle" />
      </Box>
    </ScrollView>
  )
}

export const ScreenOptions = { header: () => null }

export const isInitialRoute = true
