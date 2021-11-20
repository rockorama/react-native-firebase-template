import Form, { FormSubmitPayload } from 'formact'
import React from 'react'

import SubmitButton from '../../components/form/SubmitButton'
import TextInput from '../../components/form/TextInput'
import Box from '../../components/layout/Box'
import ScrollView from '../../components/layout/ScrollView'
import { login } from '../../firebase/authentication'

type LoginForm = {
  email: string
  password: string
}

export default function LoginScreen() {
  const onSubmit = async (payload: FormSubmitPayload<LoginForm>) => {
    if (payload.valid) {
      try {
        await login(payload.values.email, payload.values.password)
      } catch (e: any) {
        payload.onFinish()
      }
    }
  }

  return (
    <Form<LoginForm> onSubmit={onSubmit}>
      <ScrollView
        renderBottom={() => (
          <Box padding={1}>
            <SubmitButton>Login</SubmitButton>
          </Box>
        )}>
        <Box padding={1} paddingBottom={8}>
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
