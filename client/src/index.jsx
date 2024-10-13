import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Players from './components/Players.jsx'
import axios from 'axios'
import PostPlayer from './components/postPlayer.jsx'
import Navbar from './components/Narvbar.jsx'
import Toggle from './components/Toggle.jsx'
import About from './components/about.jsx'
 import Search from './components/Search.jsx'
 import Teams from './components/Teams.jsx'

function App (){
   
  useEffect(()=>{
      axios.get('http://localhost:8080/api/players/')
      .then(res=>{
        setData(res.data)
      })
      .catch(error=>{
        throw error
      })
    },[])
    const [data,setData]=useState([])
    const [view,setView]=useState('home')
  // console.log(data);
  
  let filterPlayers = (val)=>{
    const newPlayers= data.filter(player=>(player.name.toLowerCase()).includes(val.toLowerCase()))
     setData(newPlayers)
   }
      const filterItems=(team)=>{
        const newItems=data.filter((player)=>(player.team)===team)
        setData(newItems)
      }
      data.map(ele=>console.log(ele.team))
   const changeView= ()=>{
setView('post')
   }
   const homeView=()=>{
    setView('home')
   }
   const toggleView=()=>{
    setView('toggle')
   }
   const aboutView=()=>{
    setView('about')
   }
    return(
        <>
     <Navbar aboutView={aboutView} toggleView={toggleView} homeView={homeView} changeView={changeView}  />
     <Teams filterItems={filterItems} />
     <Search filterPlayers={filterPlayers} />
        {view ==='home' &&   <Players homeView={homeView} changeView={changeView} data={data} />}
        {view ==='post' && <PostPlayer /> }
        {view === 'toggle' && <Toggle data={data}/>}
        {view ==='about' && <About />}  
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
