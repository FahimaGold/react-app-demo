import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
export default function Card(props){
    return(
         <div style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '[first] 200px [line2] 200px [line3] auto [end]',
  gridTemplateRows: '[row1-start] 25% [row1-end] 100px [third-line] 100px  [fourth-line] 100px [fifth-line] auto[last-line]',
            justifyContent: 'center',
            width: '470px',
            height: '200px',
            top: '40px',   
            left: '5%',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '10.24px',
            lineHeight: '150%',
        }}>
           <img src={props.imageUrl} style={{
            position: 'absolute',
            width: '200px',
            height: '168px',
            left: '40px',
            top:'10px',
            justifyContent: 'center',
            borderRadius: '5px',}}/>
           <div style={{
            position: 'relative',
            display: 'grid',
            left: '0px',
            top: '200px',
            flexWrap: 'wrap',
           }}>
               
               <span ><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" style={{color: '#F55A5A',}} />&nbsp;&nbsp;&nbsp;{props.location.toUpperCase()}&nbsp;&nbsp;&nbsp;<a href={props.googleMapsUrl} style={{width: '200px'}}>View on Google Maps</a></span>
               <h1>{props.title}</h1>
               <h3>{props.startDate}-{props.endDate}</h3>
               <p>{props.description}</p>

           </div>
           
         </div>
        
    )
}