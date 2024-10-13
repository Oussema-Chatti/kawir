import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
function Toggle ({data}){
    const [counter,setCounter]=useState(0)
    const {name,position,nationality,age,team,img}=data[counter]
    return(
        <>
       <div className='wrap'>
        <div className='card' >
           <img  src={img}  />
           <h1>{name}</h1>
           <h1>{position}</h1>
           <h1>{nationality}</h1>
           <h3>{age}</h3>
           <h3>{team}</h3>
       <button onClick={()=>setCounter(counter - 1)}><FaChevronLeft/></button>
       <button onClick={()=>setCounter(counter +1)}><FaChevronRight/></button>
</div>
</div>       
<iframe width="560" height="315" src="https://www.youtube.com/embed/BZ_3jPrIlxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

 </>
    )
}
export default Toggle
