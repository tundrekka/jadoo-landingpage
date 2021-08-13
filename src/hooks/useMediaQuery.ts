import { useState, useEffect } from "react"

export const useMediaQuery = ( mediaq: string) => {
   const [changed, setChanged] = useState( typeof window !== 'undefined' ? window.matchMedia(mediaq).matches : null)

   useEffect(() => {
      if(typeof window !== 'undefined') {
         const changeScreenSize = (e: MediaQueryListEvent) => {
            setChanged(e.matches)
         }
         window.matchMedia(mediaq).addEventListener('change', changeScreenSize)
         return () => {
            window.matchMedia(mediaq).removeEventListener('change', changeScreenSize)
            console.log('removido');
         }

      }
   }, [typeof window])
   return changed
}
