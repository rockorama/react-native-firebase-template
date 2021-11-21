import Form, { FormSubmitPayload, ValidationFunction } from 'formact'
import React from 'react'

import SubmitButton from '../../components/form/SubmitButton'
import TextInput from '../../components/form/TextInput'
import Box from '../../components/layout/Box'
import ScrollView from '../../components/layout/ScrollView'
import { changePassword } from '../../firebase/authentication'
import localize from '../../localization/localize'
import { AppScreenProps } from '../../navigation/stacks/App/types'
import { useFeedback } from '../../utils/contexts/Feedback'

type Props = AppScreenProps<'ChangePassword'>

type ChangePasswordForm = {
  password: string
  newPassword: string
  repeatPassword: string
}

const PASSWORD_VALIDATION = (value: string, values: ChangePasswordForm) => {
  if (!value || value === values.newPassword) {
    return
  }

  return localize('fieldValidationPassword')
}

export default function ChangePasswordScreen(props: Props) {
  const giveFeedback = useFeedback()

  const onSubmit = async (payload: FormSubmitPayload<ChangePasswordForm>) => {
    if (payload.valid) {
      try {
        await changePassword(
          payload.values.password,
          payload.values.newPassword,
        )
        giveFeedback('Passoword changed!')
        payload.onFinish()
        props.navigation.goBack()
      } catch (e: any) {
        giveFeedback(e.message.replace('Firebase:', ''), true)
        payload.onFinish()
      }
    }
  }

  return (
    <Form<ChangePasswordForm> onSubmit={onSubmit}>
      <ScrollView
        renderBottom={() => (
          <Box paddingX={1} paddingBottom={2}>
            <SubmitButton i18nKey="buttonSubmit" />
          </Box>
        )}>
        <Box padding={1} paddingBottom={2}>
          <TextInput
            required
            name="password"
            i18nKey="fieldPassword"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
          />
          <TextInput
            required
            name="newPassword"
            i18nKey="fieldNewPassword"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
          />
          <TextInput
            required
            name="repeatPassword"
            i18nKey="fieldRepeatPassword"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            validation={PASSWORD_VALIDATION as ValidationFunction}
          />
        </Box>
      </ScrollView>
    </Form>
  )
}

export const ScreenOptions = { headerTitle: localize('changePasswordHeader') }
