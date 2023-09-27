import React from 'react';
import Card from '../Card'
import data from '../../data'
import { TravelsContainer } from '../styles/TravelsStyle';

const Travels = () => {
    const cards = data.map((item) =>{
        return (
           
       <Card key={item.id} 
       {...item}
       />
      
        )
    } )
    return (
        <TravelsContainer>
        <h1>My travels</h1>
           {cards}
           </TravelsContainer>
    )
};
  
export default Travels;