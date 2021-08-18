import { FC, useRef } from 'react'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { memo } from 'react'

/**
 *  elementRef: RefObject<Element>,
   {
      threshold = 0,
      root = null,
      rootMargin = '0%',
      freezeOnceVisible = false,
   }: Args,
 */

export const LazyLoad: FC = memo(({ children }) => {
   const ref = useRef<HTMLDivElement | null>(null)
   const entry = useIntersectionObserver(ref, {
      freezeOnceVisible: true,
      rootMargin: '100px',
   })
   const isVisible = !!entry?.isIntersecting

   return (
      <div ref={ref}>
         <>{isVisible && <>{children}</>}</>
      </div>
   )
})
