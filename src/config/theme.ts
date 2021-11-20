import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import merge from 'deepmerge'
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper'

const CUSTOM_PROPS = { spacing: 20 }

declare global {
  namespace ReactNativePaper {
    interface Theme {
      spacing: number
    }
  }
}

const CombinedDefaultTheme = merge(NavigationDefaultTheme, {
  ...PaperDefaultTheme,
  ...CUSTOM_PROPS,
})
const CombinedDarkTheme = merge(NavigationDarkTheme, {
  ...PaperDarkTheme,
  ...CUSTOM_PROPS,
})

export default {
  light: CombinedDefaultTheme,
  dark: CombinedDarkTheme,
}
