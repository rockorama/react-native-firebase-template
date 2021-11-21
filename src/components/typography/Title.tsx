import React from 'react'
import { Title as PaperTitle } from 'react-native-paper'

import { getLocalizedChildren, I18nProps } from '../../localization/localize'

type Props = Omit<React.ComponentProps<typeof PaperTitle>, 'children'> &
  I18nProps

export default function Title(props: Props) {
  return <PaperTitle {...props}>{getLocalizedChildren(props)}</PaperTitle>
}
