import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { CardContainer, Img } from './CardStyle'
export default function Card(props){
    return(
       
         <CardContainer >
           <Img src={props.imageUrl}/>
               
              <span ><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" style={{color: '#F55A5A',}} />&nbsp;&nbsp;&nbsp;{props.location.toUpperCase()}&nbsp;&nbsp;&nbsp;<a href={props.googleMapsUrl} style={{width: '200px'}}>View on Google Maps</a></span>
               <h1>{props.title}</h1>
               <h3>{props.startDate}-{props.endDate}</h3>
               <p>{props.description}</p>
           </CardContainer >
           
        
    )
}