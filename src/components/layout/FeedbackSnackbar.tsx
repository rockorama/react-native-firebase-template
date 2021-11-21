import React from 'react'
import { Snackbar, useTheme } from 'react-native-paper'

type Props = {
  feedback?: {
    message?: string | null
    error?: boolean
  }
  onDismiss: () => any
}

export default function FeedbackSnackbar(props: Props) {
  const theme = useTheme()

  return (
    <Snackbar
      style={
        props.feedback?.error ? { backgroundColor: theme.colors.error } : null
      }
      visible={!!props.feedback?.message}
      onDismiss={props.onDismiss}
      action={{
        label: 'Dismiss',
        onPress: props.onDismiss,
      }}>
      {props.feedback?.message}
    </Snackbar>
  )
}
