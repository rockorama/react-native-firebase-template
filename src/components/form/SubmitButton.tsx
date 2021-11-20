import { useForm } from 'formact'
import React from 'react'
import { ActivityIndicator, Button, useTheme } from 'react-native-paper'

type Props = React.ComponentProps<typeof Button>

export default function SubmitButton(props: Props) {
  const { submit, submitting, valid } = useForm()

  const theme = useTheme()

  const disabled = submitting || !valid

  return (
    <Button
      mode="contained"
      {...props}
      onPress={disabled ? undefined : () => submit()}
      color={disabled ? theme.colors.disabled : undefined}>
      {submitting ? <ActivityIndicator /> : props.children}
    </Button>
  )
}
