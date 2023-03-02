import React, {useState} from "react";

function Search( {onSearch}) {
  const [search, setSearch]= useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search)
  }
  return (
    <div className="ui search">
      <div className="ui icon input" onChange = {handleSubmit}>
        <input className="prompt" 
          type = "text"
          id = "search"
          placeholder = "Type a name to search..."
          value = {search}
          onChange = {(e) => setSearch(e.target.value)}/>
        <i className="search icon" 

        />
      </div>
    </div>
  );
}

export default Search;
