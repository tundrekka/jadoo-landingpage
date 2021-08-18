
const TravellerImg: React.FC = () => {

   if(window.innerWidth < 900) return null

   return (
      <div>
         <img src="/static/rigthsidepng.png" alt="traveller girl" />
      </div>
   )
}

export default TravellerImg