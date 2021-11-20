// import { Snackbar } from '@material-ui/core'
// import Alert from '@material-ui/lab/Alert'
// import { useContext, useState } from 'react'
// import { createContext } from 'react'

// const AlertContext = createContext<{
//   alert: (item: FeedbackState) => void
// }>({
//   alert: () => {},
// })

// export function useAlert() {
//   const { alert } = useContext(AlertContext)
//   return alert
// }

// export default function AlertProvider(props: { children: Children }) {
//   const [alert, setAlert] = useState<FeedbackState | Error | null>()

//   return (
//     <AlertContext.Provider value={{ alert: setAlert }}>
//       {props.children}
//       {alert ? (
//         <Snackbar
//           anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//           open={!!alert}
//           autoHideDuration={6000}
//           onClose={() => setAlert(null)}
//         >
//           <Alert
//             onClose={() => setAlert(null)}
//             severity={alert instanceof Error ? 'error' : alert.severity}
//           >
//             {alert.message}
//           </Alert>
//         </Snackbar>
//       ) : null}
//     </AlertContext.Provider>
//   )
// }
