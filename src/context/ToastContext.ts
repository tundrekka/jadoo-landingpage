import { createContext, SetStateAction } from "react";
import { SnackbarOrigin } from '@material-ui/core/Snackbar'


export interface State extends SnackbarOrigin {
   open: boolean
}

interface IContext {
   state: boolean,
   setState: React.Dispatch<SetStateAction<boolean>>
}
export const ToastContext = createContext<IContext>({} as IContext)