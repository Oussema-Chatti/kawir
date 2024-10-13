import React,{useState} from "react";

const Search = (props)=> {
    const [search, setSearch] = useState("");
    const filter = event => {
       setSearch(event.target.value);
       props.filterPlayers(search)
     };
     return (
        <div >
            <input
            type="text"
            placeholder='search by name'
            onChange={filter}
            />
        </div>
     );
   }
  
  export default Search;