import { SectionTitle } from "components/common/SectionTitle"
import { DestinationCards } from "./DestinationCards"

export const Destinations: React.FC = () => {
   return (
      <div style={{marginTop: '6rem'}}>
         <SectionTitle title="Top Destinations" subtitle="Top Selling" />
         <DestinationCards />
         <p style={{marginTop: '4rem'}}>Margin</p>

      </div>
   )
}