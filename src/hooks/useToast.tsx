import { ToastContext } from 'context/ToastContext'
import { useContext } from 'react'

export const useToast = () => {
   const {state, setState} = useContext(ToastContext);

   return {
      state, 
      setState
   }
}