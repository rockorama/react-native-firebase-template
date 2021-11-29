import Form, { FormSubmitPayload } from 'formact'
import React from 'react'

import SubmitButton from '../../components/form/SubmitButton'
import TextInput from '../../components/form/TextInput'
import Box from '../../components/layout/Box'
import ScrollView from '../../components/layout/ScrollView'
import { signUp } from '../../firebase/authentication'
import localize from '../../localization/localize'
import { useFeedback } from '../../utils/contexts/Feedback'

type SignUpForm = {
  name: string
  email: string
  password: string
}

export default function SignUpScreen() {
  const giveFeedback = useFeedback()

  const onSubmit = async (payload: FormSubmitPayload<SignUpForm>) => {
    if (payload.valid) {
      try {
        await signUp(payload.values)
        return
      } catch (e: any) {
        giveFeedback(e.message.replace('Firebase:', ''), true)
      }
    }
    payload.onFinish()
  }

  return (
    <Form<SignUpForm> onSubmit={onSubmit}>
      <ScrollView
        renderBottom={() => (
          <Box paddingX={1} paddingBottom={2}>
            <SubmitButton i18nKey="signUpSubmit" />
          </Box>
        )}>
        <Box padding={1} paddingBottom={2}>
          <TextInput i18nKey="fieldName" name="name" required />
          <TextInput
            i18nKey="fieldEmail"
            name="email"
            required
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            required
            name="password"
            i18nKey="fieldPassword"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
          />
        </Box>
      </ScrollView>
    </Form>
  )
}

export const ScreenOptions = { headerTitle: localize('signUpHeader') }
