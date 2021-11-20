import { useHeaderHeight } from '@react-navigation/elements'
import React from 'react'
import {
  StyleSheet,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps,
} from 'react-native'

type Props = KeyboardAvoidingViewProps

export default function KeyboardAvoidingView(props: Props) {
  const headerHeight = useHeaderHeight()

  return (
    <RNKeyboardAvoidingView
      behavior="padding"
      style={styles.flex1}
      keyboardVerticalOffset={headerHeight}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
})
