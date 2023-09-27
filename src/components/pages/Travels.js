import React from 'react';
import Card from '../Card'
import data from '../../data'
import { TravelsContainer} from '../styles/TravelsStyle';
import { HeaderTitle } from '../styles/GlobalStyle';

const Travels = () => {
    const cards = data.map((item) =>{
        return (
           
       <Card key={item.id} 
       {...item}
       />
      
        )
    } )
    return (
        <div>
             <HeaderTitle>
            My travels
            </HeaderTitle>
        <TravelsContainer>
       
           {cards}
           </TravelsContainer>
           </div>
    )
};
  
export default Travels;