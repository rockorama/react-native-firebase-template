import React from 'react'

import Box from './Box'

type Props = {
  h?: number
  v?: number
}

export default function Spacer(props: Props) {
  return <Box paddingLeft={props.h} paddingTop={props.v} />
}
