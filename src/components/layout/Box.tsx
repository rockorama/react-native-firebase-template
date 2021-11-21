import React, { useMemo } from 'react'
import { View, StyleSheet, ViewProps } from 'react-native'
import { useTheme } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = ViewProps & {
  children?: Children
  safeArea?: 'all' | 'top' | 'bottom'
  absolute?: boolean
  flex1?: boolean
  padding?: number
  center?: boolean
  paddingTop?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingRight?: number
  paddingX?: number
  paddingY?: number
  row?: boolean
  top?: number
  right?: number
  bottom?: number
  left?: number
  borderRadius?: number
  borderColor?: keyof ReactNativePaper.ThemeColors
  borderWidth?: number
  width?: number | string
  height?: number
  minHeight?: number
  backgroundColor?: keyof ReactNativePaper.ThemeColors
  style?: StyleProp
  align?: string
  justify?: string
}

function getFirstValidNumber(values: (number | undefined)[]) {
  return values.find((v) => v !== undefined) || 0
}

export default function Box(props: Props) {
  const theme = useTheme()
  const safeAreaInsets = useSafeAreaInsets()
  const computedProps = useMemo(() => {
    const {
      flex1,
      center,
      row,
      safeArea,
      absolute,
      top,
      right,
      bottom,
      left,
      width,
      height,
      minHeight,
      backgroundColor,
      style,
      align,
      justify,
      borderRadius,
      borderColor,
      borderWidth,
    } = props
    const containerStyles: StyleProp[] = []

    if (center) {
      containerStyles.push(styles.center)
    }
    if (align) {
      containerStyles.push({ alignItems: align })
    }
    if (justify) {
      containerStyles.push({ justifyContent: justify })
    }

    const padding = {
      paddingTop:
        getFirstValidNumber([props.paddingTop, props.paddingY, props.padding]) *
        theme.spacing,
      paddingBottom:
        getFirstValidNumber([
          props.paddingBottom,
          props.paddingY,
          props.padding,
        ]) * theme.spacing,
      paddingLeft:
        getFirstValidNumber([
          props.paddingLeft,
          props.paddingX,
          props.padding,
        ]) * theme.spacing,
      paddingRight:
        getFirstValidNumber([
          props.paddingRight,
          props.paddingX,
          props.padding,
        ]) * theme.spacing,
    }
    containerStyles.push(padding)

    if (safeArea === 'all' || safeArea === 'bottom') {
      containerStyles.push({
        paddingBottom: safeAreaInsets.bottom + padding.paddingBottom,
      })
    }
    if (safeArea === 'all' || safeArea === 'top') {
      containerStyles.push({
        paddingTop: safeAreaInsets.top + padding.paddingTop,
      })
    }

    if (absolute) {
      containerStyles.push({
        position: 'absolute',
      })

      if (top !== undefined) {
        containerStyles.push({
          top,
        })
      }
      if (right !== undefined) {
        containerStyles.push({
          right,
        })
      }
      if (bottom !== undefined) {
        containerStyles.push({
          bottom,
        })
      }
      if (left !== undefined) {
        containerStyles.push({
          left,
        })
      }
    }

    if (height !== undefined) {
      containerStyles.push({
        height,
      })
    }

    if (minHeight !== undefined) {
      containerStyles.push({
        minHeight,
      })
    }

    if (width !== undefined) {
      containerStyles.push({
        width,
      })
    }
    if (backgroundColor) {
      containerStyles.push({
        backgroundColor: theme.colors[backgroundColor],
      })
    }

    if (flex1) {
      containerStyles.push(styles.flex1)
    }

    if (row) {
      containerStyles.push(styles.row)
    }

    if (borderRadius) {
      containerStyles.push({ borderRadius })
    }
    if (borderColor) {
      containerStyles.push({ borderColor: theme.colors[borderColor] })
    }
    if (borderWidth) {
      containerStyles.push({ borderWidth })
    }

    if (style) {
      containerStyles.push(style)
    }

    return { ...props, style: StyleSheet.flatten(containerStyles) }
  }, [props, safeAreaInsets, theme])

  return <View {...computedProps}>{props.children}</View>
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
