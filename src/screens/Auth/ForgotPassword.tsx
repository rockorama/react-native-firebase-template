import Form, { FormSubmitPayload } from 'formact'
import React from 'react'
import { Paragraph } from 'react-native-paper'

import SubmitButton from '../../components/form/SubmitButton'
import TextInput from '../../components/form/TextInput'
import Box from '../../components/layout/Box'
import ScrollView from '../../components/layout/ScrollView'
import Spacer from '../../components/layout/Spacer'
import { sendResetPasswordLink } from '../../firebase/authentication'
import { useFeedback } from '../../utils/contexts/Feedback'

type ForgotPasswordForm = {
  email: string
}

export default function ForgotPasswordScreen() {
  const giveFeedback = useFeedback()

  const onSubmit = async (payload: FormSubmitPayload<ForgotPasswordForm>) => {
    if (payload.valid) {
      try {
        await sendResetPasswordLink(payload.values.email)
        giveFeedback('Email sent!')
      } catch (e: any) {
        giveFeedback(e.message.replace('Firebase:', ''), true)
      }
      payload.onFinish()
    }
  }

  return (
    <Form<ForgotPasswordForm> onSubmit={onSubmit}>
      <ScrollView
        renderBottom={() => (
          <Box paddingX={1} paddingBottom={2}>
            <SubmitButton>Send Link</SubmitButton>
          </Box>
        )}>
        <Box padding={1} paddingBottom={2}>
          <Paragraph>
            We will send you an email with a link to reset your password
          </Paragraph>
          <Spacer v={1} />
          <TextInput
            label="Email"
            name="email"
            required
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </Box>
      </ScrollView>
    </Form>
  )
}
