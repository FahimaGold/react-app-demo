import styled from "styled-components";



export const TravelsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 100%;
 
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: 100%; 
    height: auto; 
  }
`;


