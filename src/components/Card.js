import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { CardContainer, Img } from './CardStyle'
import { HeaderTitle, H3Title, PText } from './styles/GlobalStyle'
export default function Card(props){
    return(
       
         <CardContainer >
           <Img src={props.imageUrl}/>
               
              <span ><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" style={{color: '#F55A5A',}} />&nbsp;&nbsp;&nbsp;{props.location.toUpperCase()}&nbsp;&nbsp;&nbsp;<a href={props.googleMapsUrl} style={{width: '200px'}}>View on Google Maps</a></span>
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