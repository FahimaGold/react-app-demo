import styled from "styled-components";
import px2vw from "../Utils/px2vw";


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


export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;