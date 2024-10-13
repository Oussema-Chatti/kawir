import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { FaCalendar } from 'react-icons/fa'
import { FaCalendarCheck } from 'react-icons/fa'

function Player ({_id,name,position,nationality,age,team,img}){
  // console.log(team);
  const handleDelete=(id)=>{
axios.delete(`http://localhost:8080/api/players/${id}`)
window.location.reload(false);
  }
const [namee,setNamee]=useState('')
const [agee,setAgee]=useState(0)
const [teame,setTeame]=useState('')
const [placeholderView,setPlaceholderView]=useState('off')
   const handleEdit=(id)=>{
       console.log(id)
   axios.patch(`http://localhost:8080/api/players/${id}`,{
       name:namee, 
       age:agee,
       team:teame
   })
   .then(res => res.data)
   .catch(error=>{
       throw error
   })
   window.location.reload(false);
   }
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
           <button  className="buttonDelete" onClick={()=>handleDelete(_id)}><FaCalendar/></button>
           <button  className='updatebutton'  onClick={()=>setPlaceholderView('on')}><FaCalendarCheck/></button>
           </div>
           {placeholderView==='on' && <div>
           <input
           className='updateInput' 
           placeholder="update name"
           onChange={(e)=>setNamee(e.target.value)}
           value={namee}
           />
              <input 
               className='updateInput' 
           placeholder="update age"
           onChange={(e)=>setAgee(e.target.value)}
           value={agee}
           />
           <input  className='updateInput' 
           placeholder="update team"
           onChange={(e)=>setTeame(e.target.value)}
           value={teame}
           />
           <button className="buttonUpdate" onClick={()=>handleEdit(_id)} >done</button>
           </div>}
           </div>
       </>
   )
}
export default Player;