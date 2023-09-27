import styled from "styled-components";
import px2vw from "../../Utils/px2vw";



export const HeaderTitle = styled.h1`
  display: 'flex';
  marginRight: '10px';
  justify-content: center;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const H3Title = styled.h3`
  display: 'flex';
  marginRight: '10px';
  justify-content: center;
  font-size: 1rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
  


`;

export const PText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;