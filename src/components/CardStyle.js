import styled from "styled-components";
import px2vw from "../Utils/px2vw";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin: ${px2vw(32)};
  width: 25%;
  height: auto;
  @media (max-width: 767px) {
    width: 100%; 
    height: auto;
    
  }
`;

export const Img = styled.img`

 
  width: ${px2vw(320)};
  height: ${px2vw(200)};
  
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
 
  @media (max-width: 767px) {
  
    width: 100%; 
    height: auto;
    
  }

  
`;

export const LocationLink = styled.a`
color: var(--a-color);

`


export const LocationIcon = styled(FontAwesomeIcon)`
  icon: ${faMapMarkerAlt};
  size=lg;
  color: #F55A5A;
  padding: 0 1em;
  margin-left: 10%;
  }
`;