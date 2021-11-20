type Child = JSX.Element | null
type Children = Child | Child[]

type StyleProp = Record<string, any> | Record<string, any>[] | null | undefined

type FeedbackState = {
  message: string
  severity: 'success' | 'error'
} | null
