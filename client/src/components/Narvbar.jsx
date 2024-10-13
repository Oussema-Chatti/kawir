import React from "react";

function Navbar ({aboutView,toggleView,homeView,changeView}){
    return(
        <>
        <nav>
  <a href="#" onClick={()=>homeView()}>Home</a>
  <a href="#" onClick={()=>aboutView()}>About</a>
  <a href="#" onClick={()=>toggleView()}>Toggle</a>
  <a href="#" onClick={()=>changeView()}>Post </a>
</nav>
<div className="divider"></div>
        </>
    )
}
export default Navbar
