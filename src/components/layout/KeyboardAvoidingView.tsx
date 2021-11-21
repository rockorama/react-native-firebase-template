import { useHeaderHeight } from '@react-navigation/elements'
import React from 'react'
import {
  StyleSheet,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = KeyboardAvoidingViewProps

export default function KeyboardAvoidingView(props: Props) {
  const headerHeight = useHeaderHeight()
  const { bottom } = useSafeAreaInsets()

  return (
    <RNKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.flex1}
      keyboardVerticalOffset={headerHeight - bottom}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
})
