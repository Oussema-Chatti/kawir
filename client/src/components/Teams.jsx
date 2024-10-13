import React from "react";

const Teams = ({filterItems})=>{
  return(
    <>
    <button className="buttonTeam" onClick={()=>filterItems('arsenal')} >
    ARS
    </button>
    <button className="buttonTeam"  onClick={()=>filterItems('man united')} >
   MUN
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('liverpool')} >
    LIV
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('bournmouth')} >
    BOU
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('man city')} >
    MCU
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('Spurs')} >
    Spurs
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('Newcastle')} >
   NFC
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('Leicester City')} >
    LCF
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('Brighton')} >
    BRT
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('Everton')} >
    EVE
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('West Ham')} >
    WSH
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('Leeds United')} >
    Leeds
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('Wolverhampton')} >
   WOL
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('Crystal Palace')} >
   CPF
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('FullHam')} >
    FHA
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('Nothingham Forest')} >
    NOT 
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('Brentford')} >
    BFD
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('Southampton')} >
    SOU
    </button>
    <button className="buttonTeam" onClick={()=>filterItems('Norwich City')} >
    NRC
    </button>



    </>
  )
}

export default Teams;