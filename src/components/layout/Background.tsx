import React from 'react'
import { StyleSheet } from 'react-native'

import Box from './Box'

export default function Background(props: { children: Children }) {
  return (
    <Box backgroundColor="background" style={StyleSheet.absoluteFillObject}>
      {props.children}
    </Box>
  )
}
