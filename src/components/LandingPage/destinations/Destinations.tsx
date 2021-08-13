import { SectionTitle } from "components/common/SectionTitle"
import { DestinationCard } from "./DestinationCard"

export const Destinations: React.FC = () => {
   return (
      <div style={{marginTop: '6rem'}}>
         <SectionTitle title="Top Destinations" subtitle="Top Selling" />
         <div className="three-imgs">
            <DestinationCard />
         </div>
      </div>
   )
}