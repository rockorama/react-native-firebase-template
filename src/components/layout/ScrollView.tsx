import React, { useEffect, useState } from 'react'
import {
  ScrollView as RNScrollView,
  StyleSheet,
  LayoutChangeEvent,
  ScrollViewProps,
} from 'react-native'

import Box from './Box'
import KeyboardAvoidingView from './KeyboardAvoidingView'

type Props = ScrollViewProps & {
  flex1?: boolean
  children?: Children
  noKeyboardAvoiding?: boolean
  renderBottom?: () => Children
}

export default function ScrollView(props: Props) {
  const [contentTopHeight, setContentTopHeight] = useState<number>(0)
  const [contentBottomHeight, setContentBottomHeight] = useState<number>(0)
  const [scrollHeight, setScrollHeight] = useState<number>(0)
  const [scrollableContent, setScrollableContent] = useState<boolean>()

  useEffect(() => {
    const isScrollable = contentTopHeight + contentBottomHeight > scrollHeight
    isScrollable !== scrollableContent && setScrollableContent(isScrollable)
  }, [contentTopHeight, contentBottomHeight, scrollHeight])

  const onScrollLayout = (layout: LayoutChangeEvent) => {
    setScrollHeight(layout.nativeEvent.layout.height)
    props.onLayout?.(layout)
  }
  const onContentTopLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    setContentTopHeight(nativeEvent.layout.height)
  }
  const onContentBottomLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    setContentBottomHeight(nativeEvent.layout.height)
  }

  const scrollContentStyle: StyleProp[] = [
    !scrollableContent ? styles.scrollableContent : null,
  ]

  const { children, renderBottom, flex1, ...other } = props

  const scrollView = (
    <RNScrollView
      scrollEnabled={scrollableContent}
      style={styles.flex1}
      keyboardShouldPersistTaps="handled"
      {...other}
      onLayout={onScrollLayout}
      contentContainerStyle={scrollContentStyle}>
      <Box
        minHeight={flex1 ? scrollHeight - contentBottomHeight : 0}
        onLayout={onContentTopLayout}>
        {children}
      </Box>
      {renderBottom ? (
        <Box safeArea="bottom" onLayout={onContentBottomLayout}>
          {renderBottom?.()}
        </Box>
      ) : null}
    </RNScrollView>
  )

  if (props.noKeyboardAvoiding) return scrollView

  return <KeyboardAvoidingView>{scrollView}</KeyboardAvoidingView>
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  scrollableContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
