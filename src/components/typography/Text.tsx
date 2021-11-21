import React from 'react'
import { Text as PaperText } from 'react-native-paper'

import { getLocalizedChildren, I18nProps } from '../../localization/localize'

type Props = Omit<React.ComponentProps<typeof PaperText>, 'children'> &
  I18nProps

export default function Text(props: Props) {
  return <PaperText {...props}>{getLocalizedChildren(props)}</PaperText>
}
