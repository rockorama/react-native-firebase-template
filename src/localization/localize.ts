import * as Localization from 'expo-localization'
import I18n from 'i18n-js'

import en from './locales/en'
import es from './locales/es'
import pt from './locales/pt'

I18n.fallbacks = true
I18n.translations = {
  en,
  es,
  pt,
}
I18n.locale = Localization.locale

export type I18nKey = string | [string, Record<string, string>]

export type I18Child = string | null | undefined

export type I18nProps = {
  i18nKey?: I18nKey
  children?: I18Child | I18Child[]
}

export default function localize(item: I18nKey | null | undefined) {
  if (!item) {
    return ''
  }
  return (item = Array.isArray(item) ? I18n.t(...item) : I18n.t(item))
}

export function getLocalizedChildren(props: I18nProps) {
  const children = []
  if (props.i18nKey) {
    children.push(localize(props.i18nKey))
  }
  if (props.children) {
    children.push(props.children)
  }
  return children.join('')
}
