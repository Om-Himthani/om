import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';

import data from './data';

ReactDOM.render(
<>
<center>
    <h1>Top 5 youtube Channel</h1>
</center>
{data.map((card)=>{
   
   return(<Card
    imgsrc={card.img}
   link={card.lin}
name={card.nam} 

   />);
})}


</>
,document.getElementById('root')
);
