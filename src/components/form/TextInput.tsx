import { FieldProps, useField } from 'formact'
import React, { useState } from 'react'
import {
  Paragraph,
  TextInput as PaperTextInput,
  useTheme,
} from 'react-native-paper'

import { getLocalizedChildren, I18nKey } from '../../localization/localize'
import Box from '../layout/Box'

type TextInputProps = React.ComponentProps<typeof PaperTextInput>
type Props = Omit<TextInputProps, 'label' | 'autoComplete'> &
  Omit<FieldProps, 'type'> & {
    i18nKey?: I18nKey
    label?: string
    autoComplete?: boolean
  }

export default function TextInput(props: Props) {
  const field = useField<string>({
    ...props,
    type:
      props.keyboardType === 'email-address' ||
      props.textContentType === 'emailAddress'
        ? 'email'
        : 'text',
    defaultErrorMessages: {
      email: getLocalizedChildren({ i18nKey: 'fieldValidationEmail' }),
      required: getLocalizedChildren({ i18nKey: 'fieldValidationRequired' }),
    },
  })
  const [showPassword, setShowPassword] = useState(false)
  const theme = useTheme()

  const label = getLocalizedChildren({
    i18nKey: props.i18nKey,
    children: props.label,
  })

  return (
    <Box>
      <PaperTextInput
        testID={props.name}
        mode="outlined"
        {...props}
        label={props.required ? label + '*' : label}
        disabled={props.disabled || field.submitting}
        value={field.fieldValue || ''}
        onChangeText={field.update}
        onSubmitEditing={() => field.submit()}
        onBlur={() => field.onBlur()}
        error={field.showError}
        autoComplete={props.autoComplete}
        secureTextEntry={props.secureTextEntry && !showPassword}
        right={
          props.secureTextEntry ? (
            <PaperTextInput.Icon
              onPress={() => setShowPassword(!showPassword)}
              name={showPassword ? 'eye-off' : 'eye'}
            />
          ) : null
        }
      />
      <Box minHeight={theme.spacing}>
        {field.showError ? (
          <Paragraph style={{ color: theme.colors.error }}>
            {field.errorMessage}
          </Paragraph>
        ) : null}
      </Box>
    </Box>
  )
}
