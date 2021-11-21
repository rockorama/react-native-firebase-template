import React from 'react'
import { Button as PaperButton } from 'react-native-paper'

import { getLocalizedChildren, I18nProps } from '../../localization/localize'

type Props = Omit<React.ComponentProps<typeof PaperButton>, 'children'> &
  I18nProps

export default function Button(props: Props) {
  return <PaperButton {...props}>{getLocalizedChildren(props)}</PaperButton>
}
