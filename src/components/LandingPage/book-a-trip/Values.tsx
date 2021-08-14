import { Value } from "./Value"

export const Values: React.FC = () => {
   return (
      <div>
         <Value iconPath="/static/bookatrip/yellow.svg" title="Choose Destination" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus." />
         <Value iconPath="/static/bookatrip/orange.svg" title="Make Payment" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus." />
         <Value iconPath="/static/bookatrip/bluecar.svg" title="Reach Airport on Selected Date" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus." />
      </div>
   )
}