import { SectionTitle } from 'components/common/SectionTitle'
import { DestinationCards } from './DestinationCards'
import Fade from 'react-reveal/Fade'

export const Destinations: React.FC = () => {
   return (
      <section style={{ marginTop: '8.25rem' }}>
         <Fade>
            <SectionTitle
               capitalize
               title="Top Destinations"
               subtitle="Top Selling"
            />
         </Fade>
         <DestinationCards />
      </section>
   )
}
