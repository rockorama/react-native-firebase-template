import { FieldProps, useField } from 'formact'
import React from 'react'
import {
  Paragraph,
  TextInput as PaperTextInput,
  useTheme,
} from 'react-native-paper'

import Box from '../layout/Box'

type TextInputProps = React.ComponentProps<typeof PaperTextInput>
type Props = Partial<TextInputProps> &
  Omit<FieldProps, 'type'> & { autoComplete?: boolean }

export default function TextInput(props: Props) {
  const field = useField<string>({
    ...props,
    type:
      props.keyboardType === 'email-address' ||
      props.textContentType === 'emailAddress'
        ? 'email'
        : 'text',
  })

  const theme = useTheme()

  return (
    <Box>
      <PaperTextInput
        testID={props.name}
        mode="outlined"
        {...props}
        label={props.required ? props.label + '*' : props.label}
        disabled={props.disabled || field.submitting}
        value={field.fieldValue || ''}
        onChangeText={field.update}
        onSubmitEditing={() => field.submit()}
        onBlur={() => field.onBlur()}
        error={field.showError}
        autoComplete={props.autoComplete}
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
