import React from 'react'
import { Paragraph as PaperParagraph } from 'react-native-paper'

import { getLocalizedChildren, I18nProps } from '../../localization/localize'

type Props = Omit<React.ComponentProps<typeof PaperParagraph>, 'children'> &
  I18nProps

export default function Paragraph(props: Props) {
  return (
    <PaperParagraph {...props}>{getLocalizedChildren(props)}</PaperParagraph>
  )
}
