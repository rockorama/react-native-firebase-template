import React, { useState, createContext, useContext } from 'react'

import FeedbackSnackbar from '../components/layout/FeedbackSnackbar'

const FeedbackContext = createContext<{
  giveFeedback: (message: string, error?: boolean) => any
}>({
  giveFeedback: () => {},
})

export function useFeedback() {
  return useContext(FeedbackContext).giveFeedback
}

export default function FeedbackProvider(props: { children: Children }) {
  const [feedback, setFeedback] = useState<{
    message: string
    error?: boolean
  } | null>(null)

  const giveFeedback = (message: string, error?: boolean) => {
    setFeedback({ message, error })
  }

  return (
    <>
      <FeedbackContext.Provider value={{ giveFeedback }}>
        {props.children}
      </FeedbackContext.Provider>

      {feedback ? (
        <FeedbackSnackbar
          feedback={feedback}
          onDismiss={() => setFeedback(null)}
        />
      ) : null}
    </>
  )
}
