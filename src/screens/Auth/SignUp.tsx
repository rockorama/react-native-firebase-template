import Form, { FormSubmitPayload } from 'formact'
import React from 'react'

import SubmitButton from '../../components/form/SubmitButton'
import TextInput from '../../components/form/TextInput'
import Box from '../../components/layout/Box'
import ScrollView from '../../components/layout/ScrollView'
import { signUp } from '../../firebase/authentication'
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
      } catch (e: any) {
        giveFeedback(e.message.replace('Firebase:', ''), true)
        payload.onFinish()
      }
    }
  }

  return (
    <Form<SignUpForm> onSubmit={onSubmit}>
      <ScrollView
        renderBottom={() => (
          <Box paddingX={1} paddingBottom={2}>
            <SubmitButton>Sign Up</SubmitButton>
          </Box>
        )}>
        <Box padding={1} paddingBottom={2}>
          <TextInput label="Name" name="name" required />
          <TextInput
            label="Email"
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
            label="Password"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
          />
        </Box>
      </ScrollView>
    </Form>
  )
}

export const StackOptions = { headerTitle: 'Sign Up' }
