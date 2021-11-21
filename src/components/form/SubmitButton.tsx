import { useForm } from 'formact'
import React from 'react'
import { ActivityIndicator, useTheme } from 'react-native-paper'

import Button from '../core/Button'

type Props = React.ComponentProps<typeof Button>

export default function SubmitButton(props: Props) {
  const { submit, submitting } = useForm()

  const theme = useTheme()

  const disabled = submitting

  return (
    <Button
      mode="contained"
      {...props}
      onPress={disabled ? undefined : () => submit()}
      color={disabled ? theme.colors.disabled : undefined}
      icon={() => (submitting ? <ActivityIndicator /> : null)}
    />
  )
}
