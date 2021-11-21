import Form, { FormSubmitPayload } from 'formact'
import React from 'react'

import SubmitButton from '../../components/form/SubmitButton'
import TextInput from '../../components/form/TextInput'
import Box from '../../components/layout/Box'
import ScrollView from '../../components/layout/ScrollView'
import Spacer from '../../components/layout/Spacer'
import Paragraph from '../../components/typography/Paragraph'
import { sendResetPasswordLink } from '../../firebase/authentication'
import localize from '../../localization/localize'
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
            <SubmitButton i18nKey="forgotPasswordSubmit" />
          </Box>
        )}>
        <Box padding={1} paddingBottom={2}>
          <Paragraph i18nKey="forgotPasswordDescription" />
          <Spacer v={1} />
          <TextInput
            i18nKey="fieldEmail"
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

export const ScreenOptions = { headerTitle: localize('forgotPasswordHeader') }
