import React from 'react';
import Card from '../Card'
import data from '../../data'

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
        <h1>My travels</h1>
        <div style={{
            display: 'flex',
            marginRight: '10px',
        }}> 
           
           {cards}
        </div>
        </div>
    )
};
  
export default Travels;