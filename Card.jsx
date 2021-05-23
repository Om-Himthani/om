import React from 'react';
function Card(props){
   return( <>

<div className="cards">

<div className="card">
    <img src={props.imgsrc} className="img" alt="Mypic"/>
    <div className="car_info">

<h3>{props.name}</h3>
<a href={props.link} target="____" >
    <button className="button">Visit Now</button>
</a>

    </div>
</div>
</div>

    </>
    );
} 
export default Card;