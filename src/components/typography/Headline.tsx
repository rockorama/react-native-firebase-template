import React from 'react'
import { Headline as PaperHeadline } from 'react-native-paper'

import { getLocalizedChildren, I18nProps } from '../../localization/localize'

type Props = Omit<React.ComponentProps<typeof PaperHeadline>, 'children'> &
  I18nProps

export default function Headline(props: Props) {
  return <PaperHeadline {...props}>{getLocalizedChildren(props)}</PaperHeadline>
}
