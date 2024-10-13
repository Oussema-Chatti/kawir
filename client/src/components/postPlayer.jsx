import axios from "axios";
import React, { useState } from "react";
<link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet"></link>
function PostPlayer(){
    const [name,setName]=useState('')
    const [position,setPosition]=useState('')
    const [img,setImg]=useState('')
    const [nationality,setNationality]=useState('')
    const [age,setAge]=useState(0)
    const [team,setTeam]=useState('')
    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8080/api/players',{
            name:name,
            position:position,
            img:img,
            nationality:nationality,
            age:age,
            team:team
        }).then(res=>console.log('data posted',res))
        .catch(err=>console.log(err))
    }
    return(
        <div className="container" > 
            <div >
                <div ></div>
               <div >
             <h2 className="addNew" >add a new player</h2> 
             <label>Name:</label>
            <input  type='text' 
            onChange={(e)=>setName(e.target.value)
            }
            placeholder='name ..'
            value={name} />
<label>Age:</label>
            <input  type='number' 
            onChange={(e)=>setAge(e.target.value)
            }
            placeholder='age'
            value={age} />
            <label>Position:</label>
            <input  type='text' 
            onChange={(e)=>setPosition(e.target.value)
            }
            placeholder='position'
            value={position}/>
<label>Nationality:</label>
            <input  type='text' 
            onChange={(e)=>setNationality(e.target.value)
            }
            placeholder='nationality'
            value={nationality} />
           <label>team:</label>
            <input  type='text' 
            onChange={(e)=>setTeam(e.target.value)
            }
            placeholder='team'
            value={team} />
            <label>Image:</label>
            <input  type='text' 
            onChange={(e)=>setImg(e.target.value)
            }
            placeholder='img'
            value={img} />
            </div>
            </div>
            <button className="submitButton" onClick= {handleSubmit}>POST</button>
        </div>
    )

} 
export default PostPlayer