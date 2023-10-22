import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { CardContainer, Img, LocationLink, LocationIcon} from './styles/CardStyle'
import { HeaderTitle, H3Title, PText } from './styles/GlobalStyle'
export default function Card(props){
    return(
       
         <CardContainer >
           <Img src={props.imageUrl}/>
               
              <span ><LocationIcon icon={faMapMarkerAlt}/>&nbsp;&nbsp;&nbsp;{props.location.toUpperCase()}&nbsp;&nbsp;&nbsp;<LocationLink href={props.googleMapsUrl} style={{width: '200px'}}>View on Google Maps</LocationLink></span>
               <HeaderTitle>
                {props.title}
                </HeaderTitle>
               <H3Title>
                {props.startDate}-{props.endDate}
                </H3Title>
               <PText>
                {props.description}
                </PText>
           </CardContainer >
           
        
    )
}