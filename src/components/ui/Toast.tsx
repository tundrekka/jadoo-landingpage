import React from 'react'
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar'
import { useContext } from 'react'
import { ToastContext } from 'context/ToastContext'

export interface State extends SnackbarOrigin {
   open: boolean
}

export default function Toast() {
   const { state, setState } = useContext(ToastContext)

   const handleClose = () => {
      setState(false)
   }

   return (
      <div>
         <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={state}
            onClose={handleClose}
            autoHideDuration={2500}
            message="This feature is not available now"
            key={'bottom' + 'left'}
         />
      </div>
   )
}
