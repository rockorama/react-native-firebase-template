import Form from 'formact'
import React, { useEffect } from 'react'

import Button from '../../components/core/Button'
import SubmitButton from '../../components/form/SubmitButton'
import Box from '../../components/layout/Box'
import ScrollView from '../../components/layout/ScrollView'
import Spacer from '../../components/layout/Spacer'
import Paragraph from '../../components/typography/Paragraph'
import Title from '../../components/typography/Title'
import { sendVerificationLink, signOut } from '../../firebase/authentication'
import localize from '../../localization/localize'
import { useAuth } from '../../utils/contexts/Auth'
import { useFeedback } from '../../utils/contexts/Feedback'

export default function EmailVerificationScreen() {
  const giveFeedback = useFeedback()
  const { user, refreshUser } = useAuth()

  useEffect(() => {
    // refresh the user every 3 seconds to check if the email is validated
    const timer = setInterval(refreshUser, 3000)
    return () => {
      timer && clearInterval(timer)
    }
  }, [])

  const renderBottom = () => (
    <Box paddingX={1} paddingY={2}>
      <Form
        onSubmit={async (payload) => {
          try {
            await sendVerificationLink()
            giveFeedback('Email sent!')
          } catch (e: any) {
            giveFeedback(e.message.replace('Firebase:', ''), true)
          }
          payload.onFinish()
        }}>
        <SubmitButton mode="contained" i18nKey="emailVerificationSubmit" />
      </Form>
      <Spacer v={1} />
      <Button onPress={signOut}>Sign out</Button>
    </Box>
  )

  return (
    <ScrollView flex1 renderBottom={renderBottom}>
      <Box flex1 center paddingX={2}>
        <Title i18nKey="emailVerificationTitle" />
        <Spacer v={2} />
        <Paragraph
          i18nKey={[
            'emailVerificationDescription',
            { email: user?.email || '' },
          ]}
        />
      </Box>
    </ScrollView>
  )
}

export const ScreenOptions = {
  headerTitle: localize('emailVerificationHeader'),
}
